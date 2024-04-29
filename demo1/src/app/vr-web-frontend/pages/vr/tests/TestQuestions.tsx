// TestQuestions.js
import React from 'react';

interface TestQuestionsProps {
    questions: {
        index: number;
        achievement: string
        text: string;
        options: { option_id: string; text: string }[];
    }[];
    selectedOptions: string[];
    handleOptionChange: (index: number, optionId: string) => void;
    calculateScore: () => void;
    title: string
}

const TestQuestions: React.FC<TestQuestionsProps> = ({ questions, selectedOptions, handleOptionChange, calculateScore, title}) => {
    return (
        <>
            <div className="card shadow-sm">

                <div className="card-body">
                    <h1>{title}</h1>
                </div>

                <div className="card-footer">

                    <div className="form-check form-check-custom form-check-solid">
                        <form>
                            {questions.map((question, index) => (
                                <div key={index}>
                                    <h2>
                                        {question.index}-) {question.text}
                                    </h2><br/>
                                    <div className="accordion accordion-icon-toggle" id="kt_accordion_2">
                                        <div className="mb-5">
                                            <div className="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_3">
                                                <span className="accordion-icon">
                                                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span
                                                        className="path2"></span></i>
                                                </span>
                                                <h3 className="fs-4 fw-semibold mb-0 ms-4">Bu sorunun kapsadığı kazanımlar :</h3>
                                            </div>
                                            <span className="badge badge-warning">
                                                <div id="kt_accordion_2_item_3" className="collapse fs-6 ps-10" data-bs-parent="#kt_accordion_2">
                                                    {question.achievement}
                                                </div>
                                            </span>

                                        </div>
                                    </div>
                                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                                        {question.options.map((option) => (
                                            <li key={option.option_id}>
                                                <label style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input
                                                        type="radio"
                                                        className={"form-check-input"}
                                                        name={`answer-${index}`}
                                                        value={option.option_id}
                                                        checked={option.option_id === selectedOptions[index]}
                                                        onChange={() => handleOptionChange(index, option.option_id)}
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
        </>
    );
};

export default TestQuestions;
