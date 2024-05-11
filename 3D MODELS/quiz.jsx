import React, { useState } from 'react';

const QuizApp = () => {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            answer: 'Paris'
        },
        {
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'],
            answer: '4'
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            answer: 'Mars'
        },
        {
            question: 'What is the largest mammal?',
            options: ['Elephant', 'Whale', 'Giraffe', 'Rhino'],
            answer: 'Whale'
        },
        {
            question: 'What is the capital of Australia?',
            options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
            answer: 'Canberra'
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className="quiz-app">
            {showScore ? (
                <div className="quiz-app__score">
                    You scored {score} out of {questions.length}
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="quiz-app__question">
                        <h2>{questions[currentQuestion].question}</h2>
                    </div>
                    <div className="quiz-app__options">
                        {questions[currentQuestion].options.map((option) => (
                            <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizApp;
