import React from "react";

interface TestIntroProps {
    handleShowQuestion: () => void;
    testTitle: string
}

const Welcome: React.FC<TestIntroProps> = ({ handleShowQuestion, testTitle}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header">
                <h3 className="card-title">{testTitle}</h3>
                <div className="card-toolbar"></div>
            </div>
            <div className="card-body">
                There are 5 questions in this test. If you are ready, press the button to take the test
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-info" onClick={handleShowQuestion}>
                    Take test
                </button>
            </div>
        </div>
    );
};


export default Welcome;