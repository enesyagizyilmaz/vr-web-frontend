import React, {useState} from "react";
import Welcome from "../common/Welcome";
import Result from "../common/Result";
import TestHandler from "../common/TestQuestions";

const Test1Grade5 = () =>
{
    const [score, setScore] = useState<any>(0);
    const [selectedOptions, setSelectedOptions] = useState<any>([null, null]);
    const [showQuestions, setShowQuestions] = useState(false);
    const [finishTest, setFinishTest] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState<any>([]);

    const handleOptionChange = (index, optionId) => {
        setSelectedOptions((prevOptions) => {
            const newOptions = [...prevOptions];
            newOptions[index] = optionId;
            return newOptions;
        });
    };

    const calculateScore = () => {
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
            text: 'React.js hangi dilde yazılmıştır?',
            options: [
                { id: 'JavaScript', text: 'JavaScript', isCorrect: true },
                { id: 'Python', text: 'Python', isCorrect: false },
                { id: 'Java', text: 'Java', isCorrect: false },
                { id: 'C#', text: 'C#', isCorrect: false },
            ],
        },
        {
            index: 2,
            text: 'React.js hangi şirket tarafından geliştirilmiştir?',
            options: [
                { id: 'Facebook', text: 'Facebook', isCorrect: true },
                { id: 'Google', text: 'Google', isCorrect: false },
                { id: 'Microsoft', text: 'Microsoft', isCorrect: false },
                { id: 'Apple', text: 'Apple', isCorrect: false },
            ],
        },
        {
            index: 3,
            text: "Türkiye'nin başkenti neresidir?",
            options: [
                { id: 'Ankara', text: 'Ankara', isCorrect: true },
                { id: 'Bursa', text: 'Bursa', isCorrect: false },
                { id: 'Trabzon', text: 'Trabzon', isCorrect: false },
                { id: 'Kastamonu', text: 'Kastamonu', isCorrect: false },
            ],
        },
        {
            index: 4,
            text: '5 + 5 = ?',
            options: [
                { id: '8', text: '8', isCorrect: false },
                { id: '11', text: '11', isCorrect: false },
                { id: '14', text: '14', isCorrect: false },
                { id: '10', text: '10', isCorrect: true },
            ],
        },
        {
            index: 5,
            text: '6 * 6 + 5 - 3 = ?',
            options: [
                { id: '38', text: '38', isCorrect: true },
                { id: '48', text: '48', isCorrect: false },
                { id: '72', text: '72', isCorrect: false },
                { id: '0', text: '0', isCorrect: false },
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