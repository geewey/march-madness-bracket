import React from "react";

type GameProps = {
    gameId: number,
    team1Id: number,
    team2Id: number,
    team1Score: number,
    team2Score: number,
    predictedWinnerId: number,
};

const Game: React.FC<GameProps> = (props) => {
    
    return (
        <div>{props.gameId}</div>
    )
}

export default Game;