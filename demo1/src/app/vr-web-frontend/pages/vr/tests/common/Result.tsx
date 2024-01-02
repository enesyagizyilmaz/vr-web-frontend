// Result.js
import React from 'react';
import { Link } from 'react-router-dom';

interface ResultProps {
    testName: string;
    wrongAnswers: { question: string }[];
}

const Result: React.FC<ResultProps> = ({ testName, wrongAnswers }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header">
                <h3 className="card-title">{testName}</h3>
            </div>
            <div className="card-body">
                Thank you. Your answers have been recorded
                {wrongAnswers.length > 0 && (
                    <div>
                        <div className="card-body">
                            <h3>Yanlış Cevaplar</h3>
                            <ul>
                                {wrongAnswers.map((wrongAnswer, index) => (
                                    <li key={index}>{wrongAnswer.question}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='mb-0'>
                            <Link to='/dashboard' className='btn btn-sm btn-primary'>
                                Return Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Result;
