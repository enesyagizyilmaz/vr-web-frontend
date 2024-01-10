import React, {useContext, useEffect, useState} from "react";
import Welcome from "../common/Welcome";
import Result from "../common/Result";
import TestHandler from "../common/TestQuestions";
import {AuthContext} from "../../../../context/AuthContext";
import {postScoreApi} from "../../../../api/ApiService";

const Test1Grade5 = () =>
{
    const [score, setScore] = useState<any>(null);
    const [selectedOptions, setSelectedOptions] = useState<any>([null, null]);
    const [showQuestions, setShowQuestions] = useState(false);
    const [finishTest, setFinishTest] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState<any>([]);
    const authState = useContext(AuthContext);

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
                testNumber: "Test 1",
            };
            await postScoreApi(data);

        } catch (error) {
            console.error("Error sending score:", error);
        }
    };

    const calculateScore = () =>
    {
        const newScore = questions.reduce((acc, question, index) => {
            const selectedOption = selectedOptions[index];
            const correctOption = question.options.find((option) => option.isCorrect);
            if (selectedOption !== correctOption?.id)
            {
                setWrongAnswers((prevWrongAnswers) => [...prevWrongAnswers, { question: question.text, selectedOption }]);
            }
            return acc + (selectedOption === correctOption?.id ? 1 : 0);
        }, 0);
        setScore(newScore);
        setFinishTest(true);
    };

    const handleShowQuestion = () =>
    {
      setShowQuestions(true);
    }

    const questions = [
        {
            index: 1,
            text: "Güneş'in dönüş yönü nedir?",
            options: [
                { id: "Saat yönünün tersine", text: "Saat yönünün tersine", isCorrect: true },
                { id: " Saat yönünde", text: " Saat yönünde", isCorrect: false },
                { id: "Doğudan batıya", text: "Doğudan batıya", isCorrect: false },
                { id: "Batıdan doğuya", text: "Batıdan doğuya", isCorrect: false },
            ],
        },
        {
            index: 2,
            text: "Dünya'nın kendi ekseni etrafındaki dönüş hareketi nasıl gerçekleşir?",
            options: [
                { id: "Saat yönünün tersine", text: "Saat yönünün tersine", isCorrect: true },
                { id: "Saat yönünde", text: "Saat yönünde", isCorrect: false },
                { id: "Doğudan batıya", text: "Doğudan batıya", isCorrect: false },
                { id: "Batıdan doğuya", text: "Batıdan doğuya", isCorrect: false },
            ],
        },
        {
            index: 3,
            text: "Dünya'nın Güneş etrafında dolanma süresi kaç gündür?",
            options: [
                { id: " 24 saat", text: " 24 saat", isCorrect: false },
                { id: " 365 gün 6 saat", text: " 365 gün 6 saat", isCorrect: true },
                { id: "30 gün", text: "30 gün", isCorrect: false },
                { id: "12 saat", text: "12 saat", isCorrect: false },
            ],
        },
        {
            index: 4,
            text: " Ay'ın kendi ekseni etrafındaki dönüş hareketi hangi yönde gerçekleşir?",
            options: [
                { id: "Saat yönünün tersine", text: "Saat yönünün tersine", isCorrect: true },
                { id: "Saat yönünde", text: "Saat yönünde", isCorrect: false },
                { id: "Doğudan batıya", text: "Doğudan batıya", isCorrect: false },
                { id: "Batıdan doğuya", text: "Batıdan doğuya", isCorrect: false },
            ],
        },
        {
            index: 5,
            text: "Ay, Dünya etrafında dolanma hareketini hangi yönde yapar?",
            options: [
                { id:"Saat yönünün tersine", text: "Saat yönünün tersine", isCorrect: true },
                { id: "Saat yönünde", text: "Saat yönünde", isCorrect: false },
                { id: "Doğudan batıya", text: "Doğudan batıya", isCorrect: false },
                { id: "Batıdan doğuya", text: "Batıdan doğuya", isCorrect: false },
            ],
        },
    ];

    return(
        <>
            {!showQuestions && <Welcome handleShowQuestion={handleShowQuestion} testTitle={'Test 1 | Grade 5'}/>}

            {finishTest && <Result testName={'Test 1 | Grade 5'} wrongAnswers={wrongAnswers} questions={questions} score={score}/>}

            {!finishTest && showQuestions && <TestHandler questions={questions} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} calculateScore={calculateScore} />}
        </>
    )
}

export default Test1Grade5;