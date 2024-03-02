import React, {useContext, useEffect, useState} from "react";
import Welcome from "../common/Welcome";
import Result from "../common/Result";
import TestHandler from "../common/TestQuestions";
import {AuthContext} from "../../../../context/AuthContext";
import {getTest4Grade5, postScoreApi} from "../../../../api/ApiService";

const Test4Grade5 = () =>
{
    const [score, setScore] = useState<any>(null);
    const [selectedOptions, setSelectedOptions] = useState<any>([null, null]);
    const [showQuestions, setShowQuestions] = useState(false);
    const [finishTest, setFinishTest] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState<any>([]);
    const [question, setQuestion] = useState<any>([]);
    const authState = useContext(AuthContext);

    useEffect(() =>
    {
        const fetchQuestions = async () =>
        {
            try
            {
                const response = await getTest4Grade5();
                setQuestion(response.data);
            }
            catch (error)
            {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
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
                testNumber: "Test 4",
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
            {!showQuestions && <Welcome handleShowQuestion={handleShowQuestion} testTitle={'Test 4 | Grade 5'}/>}

            {finishTest && <Result testName={'Test 4 | Grade 5'} wrongAnswers={wrongAnswers} questions={question} score={score}/>}

            {!finishTest && showQuestions && <TestHandler questions={question} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} calculateScore={calculateScore} />}
        </>
    )
}

export default Test4Grade5;