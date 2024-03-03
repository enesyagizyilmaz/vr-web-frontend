import React, {useContext, useEffect, useState} from "react";
import Welcome from "../common/Welcome";
import Result from "../common/Result";
import TestHandler from "../common/TestQuestions";
import {AuthContext} from "../../../../context/AuthContext";
import {getTest9Grade5, getUnit3Grade5Achievements, postScoreApi} from "../../../../api/ApiService";
import {AchievementData} from "../common/AchievementData";
import {AchievementTable} from "../common/AchievementTable";

const Test9Grade5 = () =>
{
    const [score, setScore] = useState<any>(null);
    const [selectedOptions, setSelectedOptions] = useState<any>([null, null]);
    const [showQuestions, setShowQuestions] = useState(false);
    const [finishTest, setFinishTest] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState<any>([]);
    const [question, setQuestion] = useState<any>([]);
    const authState = useContext(AuthContext);
    const [achievementData, setAchievementData] = useState<AchievementData | null>(null);

    useEffect(() =>
    {
        const fetchQuestions = async () =>
        {
            try
            {
                const response = await getTest9Grade5();
                setQuestion(response.data);
            }
            catch (error)
            {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
    }, []);

    useEffect(() =>
    {
        const fetchAchievements = async () =>
        {
            try
            {
                const response = await getUnit3Grade5Achievements();
                setAchievementData(response.data);
            }
            catch (error)
            {
                console.error("Error fetching achievements:", error);
            }
        };
        fetchAchievements();
    }, []);

    const handleOptionChange = (index, optionId) =>
    {
        setSelectedOptions((prevOptions) => {
            const newOptions = [...prevOptions];
            newOptions[index] = optionId;
            return newOptions;
        });
    };

    useEffect(() =>
    {
        if (score !== null)
        {
            sendScore();
        }
    }, [score]);

    const sendScore = async () => {
        try {
            const userId = authState.id;
            const data = {
                userId: userId,
                score: score,
                grade: "Grade 5",
                testNumber: "Test 9",
            };
            await postScoreApi(data);

        } catch (error) {
            console.error("Error sending score:", error);
        }
    };

    const calculateScore = () =>
    {
        const newScore = question.reduce((acc, question, index) =>
        {
            const selectedOption = selectedOptions[index];
            const correctOption = question.options.find((option) => option.isCorrect);
            if (selectedOption !== correctOption?.option_id)
            {
                setWrongAnswers((prevWrongAnswers) => [...prevWrongAnswers, { question: question.text, selectedOption }]);
            }
            return acc + (selectedOption === correctOption?.option_id ? 1 : 0);
        }, 0);
        setScore(newScore);
        setFinishTest(true);
    };

    const handleShowQuestion = () =>
    {
        setShowQuestions(true);
    }

    return(
        <>
            {!showQuestions && <Welcome handleShowQuestion={handleShowQuestion} testTitle={'UNIT 3: Measurement of Force and Friction: Test 9 - Grade 5'}/>}

            {finishTest && <Result testName={'UNIT 3: Measurement of Force and Friction: Test 9 - Grade 5'} wrongAnswers={wrongAnswers} questions={question} score={score}/>}

            {!finishTest && showQuestions && <TestHandler title={'UNIT 3: Measurement of Force and Friction: Test 9 - Grade 5'} questions={question} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} calculateScore={calculateScore} />}

            <br/>

            {!showQuestions &&
                <AchievementTable
                    title={"Achievements: UNIT 3: Measurement of Force and Friction"}
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
    )
}

export default Test9Grade5;