// TestQuestions.js
import React from 'react';

interface TestQuestionsProps {
    questions: {
        index: number;
        text: string;
        options: { id: string; text: string }[];
    }[];
    selectedOptions: string[];
    handleOptionChange: (index: number, optionId: string) => void;
    calculateScore: () => void;
}

const TestHandler: React.FC<TestQuestionsProps> = ({ questions, selectedOptions, handleOptionChange, calculateScore }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h1>Test 1 | Grade 5</h1>
            </div>

            <div className="card-footer">
                <div className="form-check form-check-custom form-check-solid">
                    <form>
                        {questions.map((question, index) => (
                            <div key={index}>
                                <h2>
                                    {question.index}-) {question.text}
                                </h2><br/>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {question.options.map((option) => (
                                        <li key={option.id}>
                                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                                <input
                                                    type="radio"
                                                    className={"form-check-input"}
                                                    name={`answer-${index}`}
                                                    value={option.id}
                                                    checked={option.id === selectedOptions[index]}
                                                    onChange={() => handleOptionChange(index, option.id)}
                                                    style={{ marginRight: '8px' }}
                                                />
                                                {option.text}
                                            </label><br/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </form>
                </div>
                <button className="btn btn-success" onClick={calculateScore}>
                    Finish
                </button>
            </div>
        </div>
    );
};

export default TestHandler;
