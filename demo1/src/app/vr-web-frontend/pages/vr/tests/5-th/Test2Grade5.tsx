import React, {useContext, useEffect, useState} from "react";
import Welcome from "../common/Welcome";
import Result from "../common/Result";
import TestHandler from "../common/TestQuestions";
import {AuthContext} from "../../../../context/AuthContext";
import {postScoreApi} from "../../../../api/ApiService";

const Test2Grade5 = () =>
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
                testNumber: "Test 2",
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
            text: "Ay'ın atmosferi hakkında aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                { id: "Ay'da yoğun bir atmosfer bulunmaktadır.", text: "Ay'da yoğun bir atmosfer bulunmaktadır.", isCorrect: false },
                { id: "Ay'ın atmosferi, hava olaylarına izin veren bir yapıya sahiptir.", text: "Ay'ın atmosferi, hava olaylarına izin veren bir yapıya sahiptir.", isCorrect: false },
                { id: "Ay'ın atmosferi yok denecek kadar azdır.", text: "Ay'ın atmosferi yok denecek kadar azdır.", isCorrect: true },
                { id: "Ay, atmosferi nedeniyle yağışlı bir gezegen gibidir.", text: "Ay, atmosferi nedeniyle yağışlı bir gezegen gibidir.", isCorrect: false },
            ],
        },
        {
            index: 2,
            text: "Ay'daki gece ve gündüz sıcaklık farkının nedeni nedir?",
            options: [
                { id: "Ay'ın atmosferindeki gazlar", text: "Ay'ın atmosferindeki gazlar", isCorrect: false },
                { id: "Ay'ın atmosferinin olmaması", text: "Ay'ın atmosferinin olmaması", isCorrect: true },
                { id: "Ay'ın yer çekimi etkisi", text: "Ay'ın yer çekimi etkisi", isCorrect: false },
                { id: "Ay'ın yüzeyindeki su varlığı", text: "Ay'ın yüzeyindeki su varlığı", isCorrect: false },
            ],
        },
        {
            index: 3,
            text: "Ay'a giden astronotların bıraktığı ayak izleri hakkında aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                { id: "Ayak izleri zamanla kaybolur ve silinir.", text: "Ayak izleri zamanla kaybolur ve silinir.", isCorrect: false },
                { id: "Ay'ın atmosferi nedeniyle izler bozulmaz.", text: "Ay'ın atmosferi nedeniyle izler bozulmaz.", isCorrect: false },
                { id: "Ayak izleri, Ay'ın ince toz tabakasında kalıcıdır.", text: "Ayak izleri, Ay'ın ince toz tabakasında kalıcıdır.", isCorrect: true },
                { id: "Ay'ın yüzeyi sıcaklığı nedeniyle izler kaybolur.", text: "Ay'ın yüzeyi sıcaklığı nedeniyle izler kaybolur.", isCorrect: false },
            ],
        },
        {
            index: 4,
            text: "Ay'da yaşam olmamasının nedenleri arasında aşağıdaki ifadelerden hangisi yer almaz?",
            options: [
                { id: "Atmosferin olmaması", text: "Atmosferin olmaması", isCorrect: false },
                { id: "Yer çekiminin az olması", text: "Yer çekiminin az olması", isCorrect: false },
                { id: "Gece ve gündüz sıcaklık farkı", text: "Gece ve gündüz sıcaklık farkı", isCorrect: false },
                { id: "Ay'ın atmosferinin zengin gazlar içermesi", text: "Ay'ın atmosferinin zengin gazlar içermesi", isCorrect: true },
            ],
        },
        {
            index: 5,
            text: "Ayda yaşam olması için önerilen çözümler arasında aşağıdaki ifadelerden hangisi yer almaz?",
            options: [
                { id:"Canlıların yaşayabileceği fanuslar yapılabilir.", text: "Canlıların yaşayabileceği fanuslar yapılabilir.", isCorrect: false },
                { id: "Ay'ın yer altında yaşam alanları kurulabilir.", text: "Ay'ın yer altında yaşam alanları kurulabilir.", isCorrect: false },
                { id: "Gündüz ve gece arasındaki zaman farkı dengelemelidir.", text: "Gündüz ve gece arasındaki zaman farkı dengelemelidir.", isCorrect: true },
                { id: "Ay'ın yüzeyinde su kaynakları aranmalıdır.", text: "Ay'ın yüzeyinde su kaynakları aranmalıdır.", isCorrect: false },
            ],
        },
    ];

    return(
        <>
            {!showQuestions && <Welcome handleShowQuestion={handleShowQuestion} testTitle={'Test 2 | Grade 5'}/>}

            {finishTest && <Result testName={'Test 2 | Grade 5'} wrongAnswers={wrongAnswers} questions={questions} score={score}/>}

            {!finishTest && showQuestions && <TestHandler questions={questions} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} calculateScore={calculateScore} />}
        </>
    )
}

export default Test2Grade5;