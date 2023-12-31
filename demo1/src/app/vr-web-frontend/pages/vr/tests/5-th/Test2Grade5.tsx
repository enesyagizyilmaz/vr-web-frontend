import {useState} from "react";

const Test2Grade5 = () =>
{
    const [score, setScore] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<any>([null, null]);
    const [showQuestions, setShowQuestions] = useState(false);
    const [finishTest, setFinishTest] = useState(false);

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
                { id: 1, text: 'JavaScript', isCorrect: true },
                { id: 2, text: 'Python', isCorrect: false },
                { id: 3, text: 'Java', isCorrect: false },
                { id: 4, text: 'C#', isCorrect: false },
            ],
        },
        {
            index: 2,
            text: 'React.js hangi şirket tarafından geliştirilmiştir?',
            options: [
                { id: 5, text: 'Facebook', isCorrect: true },
                { id: 6, text: 'Google', isCorrect: false },
                { id: 7, text: 'Microsoft', isCorrect: false },
                { id: 8, text: 'Apple', isCorrect: false },
            ],
        },
        {
            index: 3,
            text: "Türkiye'nin başkenti neresidir?",
            options: [
                { id: 5, text: 'Ankara', isCorrect: true },
                { id: 6, text: 'Bursa', isCorrect: false },
                { id: 7, text: 'Trabzon', isCorrect: false },
                { id: 8, text: 'Kastamonu', isCorrect: false },
            ],
        },
        {
            index: 4,
            text: '5 + 5 = ?',
            options: [
                { id: 5, text: '8', isCorrect: false },
                { id: 6, text: '11', isCorrect: false },
                { id: 7, text: '14', isCorrect: false },
                { id: 8, text: '10', isCorrect: true },
            ],
        },
        {
            index: 5,
            text: '6 * 6 + 5 - 3 = ?',
            options: [
                { id: 5, text: '38', isCorrect: true },
                { id: 6, text: '48', isCorrect: false },
                { id: 7, text: '72', isCorrect: false },
                { id: 8, text: '0', isCorrect: false },
            ],
        },
    ];

    return(
        <>

            {!showQuestions && <div className="card shadow-sm">
                <div className="card-header">
                    <h3 className="card-title">Test 2 | Grade 5</h3>
                    <div className="card-toolbar">

                    </div>
                </div>
                <div className="card-body">
                    There are 5 questions in this test. If you are ready, press the button to take the test
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-info" onClick={handleShowQuestion}>
                        Take test
                    </button>
                </div>
            </div>}

            {finishTest && <div className="card shadow-sm">
                <div className="card-header">
                    <h3 className="card-title">Test 2 | Grade 5</h3>
                </div>
                <div className="card-body">
                    Thank you. Your answers have been recorded
                </div>
            </div>}

            {!finishTest && showQuestions && <div className="card shadow-sm">
                <div className="card-body">
                    <h1>Test 2 | Grade 5</h1>
                </div>

                <div className="card-footer">
                    <div className="form-check form-check-custom form-check-solid">
                        <form>
                            {questions.map((question, index) => (
                                <div key={index}>
                                    <h2>{question.index}-) {question.text}</h2>
                                    <ul style={{listStyleType: 'none', padding: 0}}>
                                        {question.options.map((option) => (
                                            <li key={option.id}>
                                                <label style={{display: 'flex', alignItems: 'center'}}>
                                                    <input
                                                        type="radio"
                                                        name={`answer-${index}`}
                                                        value={option.id}
                                                        checked={option.id === selectedOptions[index]}
                                                        onChange={() => handleOptionChange(index, option.id)}
                                                        style={{marginRight: '8px'}}
                                                    />
                                                    {option.text}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </form>
                    </div>
                    <button className="btn btn-success" onClick={calculateScore}>Finish</button>
                </div>
            </div>}<br/>

        </>
    )
}

export default Test2Grade5;