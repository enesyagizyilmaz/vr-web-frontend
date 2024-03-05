import React from "react";
import {Link} from "react-router-dom";

interface TestIntroProps {
    handleShowQuestion: () => void;
    testTitle: string
}

const Welcome: React.FC<TestIntroProps> = ({ handleShowQuestion, testTitle}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header">
                <h1 className="card-title">{testTitle}</h1>
                <div className={"card-title"}>
                    <Link to='/dashboard' className='btn btn-sm btn-primary'>
                        Return Home
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <h3>There are 5 questions in this test. If you are ready, click the button to take the test</h3>
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