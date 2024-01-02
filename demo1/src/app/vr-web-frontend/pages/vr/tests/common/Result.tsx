import React from 'react';
import { Link } from 'react-router-dom';

interface ResultProps
{
    testName: string;
    wrongAnswers: { question: string }[];
    score: number
    questions: {
        index: number;
        text: string;
        options: { id: string; text: string }[];
    }[];
}

const Result: React.FC<ResultProps> = ({ testName, wrongAnswers, questions, score }) =>
{
    const QuestionTable = ({ questions }) =>
    {
        return (
            <div className={"table-responsive"}>
                <table className={"table table-rounded table-striped border gy-7 gs-7"}>
                    <thead>
                    <tr className={"fw-semibold fs-6 text-gray-800 border-bottom border-gray-200"}>
                        <th><h3>Question</h3></th>
                        <th><h3>Correct Answer</h3></th>
                    </tr>
                    </thead>
                    <tbody>
                    {questions.map((question) => (
                        <tr key={question.index}>
                            <td>{question.text}</td>
                            <td>
                                <span className="badge badge-light-success">{question.options.find((option) => option.isCorrect)?.text || 'N/A'}</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const WrongAnswersTable = ({ wrongAnswers }) =>
    {
        return (
            <div className='col-xxl-6'>
                {wrongAnswers.length > 0 && (
                    <div className={"table-responsive"}>
                        <table className={"table table-rounded table-striped border gy-7 gs-7"}>
                            <thead>
                            <tr className={"fw-semibold fs-6 text-gray-800 border-bottom border-gray-200"}>
                                <th><h3>#</h3></th>
                                <th><h3>Question</h3></th>
                            </tr>
                            </thead>
                            <tbody>
                            {wrongAnswers.map((wrongAnswer, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{wrongAnswer.question}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    };

    return(
        <div className="card shadow-sm">
            <div className="card-header">
                <h3 className="card-title">{testName}</h3>
                <div className={"card-title"}>
                    <Link to='/dashboard' className='btn btn-sm btn-primary'>
                        Return Home
                    </Link>
                </div>
            </div>

            <div className={"card-body"}>
                <h3>Thank you. Your answers have been recorded</h3>
                <h3>Score: {score}/5</h3>
            </div>

            <div className="card-body">
                <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
                    <div className='col-xxl-6'>
                        <h1>Answer Key</h1>
                        <QuestionTable questions={questions} />

                    </div>
                    <div className='col-xxl-6'>
                        <h1>Wrong Answers</h1>
                        <WrongAnswersTable wrongAnswers={wrongAnswers} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
