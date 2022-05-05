import React, { useState, useEffect } from "react";
import * as execute from '../contract/execute';
import { useConnectedWallet } from "@terra-money/wallet-provider";
import LoadingIndicator from '../components/LoadingIndicator';

const Play = () => {
    const connectedWallet = useConnectedWallet();
    const playTime = 20;
    const levelTwo = 9;
    const levelThree = 19;
    const min = 4.5;
    const max = 45;
    const audioFiles = ["/lvl1.m4a", "/lvl2.m4a", "/lvl3.m4a"];

    const [score, setScore] = useState(0);
    const [time, setTime] = useState(playTime);
    const [gameOver, setGameOver] = useState(false);
    const [targetPosition, setTargetPosition] = useState({ top: "15%", left: "50%" });
    const [loading, setLoading] = useState(false);
    const [level, setLevel] = useState(1);

    // Every second we lower the value of time.
    useEffect(() => {
        const unsubscribe = setInterval(() => {
            setTime(time => time > 0 ? time - 1: 0);
        }, 1000);
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (time === 0) {
            setTargetPosition({ display: 'none' });
            alert(`Game Over! Your score is ${score}. Please confirm transaction to submit score.`);
            submitScore();
        }
    }, [time]);

    const submitScore = async () => {
        if (connectedWallet && connectedWallet.network.name === 'testnet') {
            setLoading(true);
            const tx = await execute.setScore(connectedWallet, score);
            console.log(tx);
            alert('Score submitted!');
            setLoading(false);
            window.location.href = '/leaderboard';
        }
    };

    const handleClick = () => {
        let audio = new Audio(audioFiles[level - 1]);

        audio.volume = 0.2;
        audio.play();

        setScore(score => score + 1);

        if (score === levelTwo) {
            setLevel(level => level + 1);
        } else if (score === levelThree) {
            setLevel(level => level + 1);
        }

        // Function to randomize spawn times for Bama
        function targetPosition() {
            let rand = Math.floor(Math.random() * (max - min + 1) + min);
            setTargetPosition({
                top: `${Math.floor(Math.random() * 60)}%`,
                left: `${Math.floor(Math.random() * 90)}%`
            });
            setTimeout(targetPosition, rand * 1000);
        }

        targetPosition();
    };

    // Conditional rendering based on level of game
    const renderGameContainer = () => {
        if (level === 1) {
            return (
                <div className="game-container-1">
                    <img src="pepe.png" id="target" alt="Target" style={{ ...targetPosition }} onClick={handleClick} />
                    <img src="Marine.png" id="marine-img" alt="Marine" />
                </div>
            );
        } else if (level === 2) {
            return (
                <div className="game-container-2">
                    <img src="pepe.png" id="target" alt="Target" style={{ ...targetPosition }} onClick={handleClick} />
                    <img src="Marine.png" id="marine-img" alt="Marine" />
                </div>
            );
        } else {
            return (
                <div className="game-container-3">
                    <img src="pepe.png" id="target" alt="Target" style={{ ...targetPosition }} onClick={handleClick} />
                    <img src="Marine.png" id="marine-img" alt="Marine" />
                </div>
            );
        }
    }

    return (
        <div className="score-board-container">
            <div className="play-container">
                <span>Score: {score} Pets!</span>
                <span>Time left: {time} s</span>
                <span>Level: {level}</span>
            </div>

            {loading ? (
                <LoadingIndicator />
            ) :  (
                renderGameContainer()
            )}
        </div>
    );
};

export default Play;