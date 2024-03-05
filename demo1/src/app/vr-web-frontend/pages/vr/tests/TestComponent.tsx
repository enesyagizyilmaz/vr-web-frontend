import React, { useState, useEffect, useContext } from 'react';
import Result from './Result';
import {AuthContext} from "../../../context/AuthContext";
import {postScoreApi} from "../../../api/ApiService";
import {AchievementTable} from "./AchievementTable";
import {AchievementData} from "./AchievementData";
import Welcome from "./Welcome";
import TestHandler from "./TestQuestions";
interface TestProps
{
    testTitle: string;
    achievementTitle: string;
    testNumber: string;
    grade: string;
    getTestFunction: () => Promise<any>;
    getAchievements: () => Promise<any>;
}

const TestComponent: React.FC<TestProps> = ({ testTitle, testNumber, getTestFunction, getAchievements, achievementTitle, grade}) =>
{
    const [score, setScore] = useState<any>(null);
    const [selectedOptions, setSelectedOptions] = useState<any>([null, null]);
    const [showQuestions, setShowQuestions] = useState(false);
    const [finishTest, setFinishTest] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState<any>([]);
    const [question, setQuestion] = useState<any>([]);
    const authState = useContext(AuthContext);
    const [achievementData, setAchievementData] = useState<AchievementData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getTestFunction();
                setQuestion(response.data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchData();
    }, [getTestFunction]);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await getAchievements();
                setAchievementData(response.data);
            } catch (error) {
                console.error("Error fetching achievements:", error);
            }
        };
        fetchAchievements();
    }, []);

    const handleOptionChange = (index, optionId) => {
        setSelectedOptions((prevOptions) => {
            const newOptions = [...prevOptions];
            newOptions[index] = optionId;
            return newOptions;
        });
    };

    useEffect(() => {
        if (score !== null) {
            sendScore();
        }
    }, [score]);

    const sendScore = async () => {
        try {
            const userId = authState.id;
            const data = {
                userId: userId,
                score: score,
                grade: grade,
                testNumber: testNumber,
            };
            await postScoreApi(data);
        } catch (error) {
            console.error("Error sending score:", error);
        }
    };

    const calculateScore = () => {
        const newScore = question.reduce((acc, question, index) => {
            const selectedOption = selectedOptions[index];
            const correctOption = question.options.find((option) => option.isCorrect);
            if (selectedOption !== correctOption?.option_id) {
                setWrongAnswers((prevWrongAnswers) => [...prevWrongAnswers, { question: question.text, selectedOption }]);
            }
            return acc + (selectedOption === correctOption?.option_id ? 1 : 0);
        }, 0);
        setScore(newScore);
        setFinishTest(true);
    };

    const handleShowQuestion = () => {
        setShowQuestions(true);
    }

    return (
        <>
            {!showQuestions && <Welcome handleShowQuestion={handleShowQuestion} testTitle={testTitle} />}

            {finishTest && <Result testName={testTitle} wrongAnswers={wrongAnswers} questions={question} score={score} />}

            {!finishTest && showQuestions && <TestHandler title={testTitle} questions={question} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} calculateScore={calculateScore} />}

            <br />

            {!showQuestions &&
            <AchievementTable
                title={achievementTitle}
                topic1={achievementData?.topic1}
                topic1Achievement1={achievementData?.topic1Achievement1}
                topic1Achievement2={achievementData?.topic1Achievement2}
                topic1Achievement3={achievementData?.topic1Achievement3}
                topic2={achievementData?.topic2}
                topic2Achievement1={achievementData?.topic2Achievement1}
                topic2Achievement2={achievementData?.topic1Achievement2}
                topic2Achievement3={achievementData?.topic2Achievement3}
                topic3={achievementData?.topic3}
                topic3Achievement1={achievementData?.topic3Achievement1}
                topic3Achievement2={achievementData?.topic3Achievement2}
                topic3Achievement3={achievementData?.topic3Achievement2}
                topic4={achievementData?.topic4}
                topic4Achievement1={achievementData?.topic4Achievement1}
                topic4Achievement2={achievementData?.topic4Achievement2}
                topic4Achievement3={achievementData?.topic4Achievement3}
                className={'mb-5 mb-xl-8'}
                />
            }
        </>
    );
};

export default TestComponent;
