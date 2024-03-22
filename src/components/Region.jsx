const Region = (props) => {

    const generateRegionalRounds = (games) => {
        // if 15 games, then split into 4 rounds: 8, 4, 2, 1
        // if 3 games, then split into 2 rounds: 2, 1
        const rounds = [];
        let divisor = Math.ceil(games.length / 2);
        let gameStart = 0;
        while (divisor >= 1) {
          let round = [];
          for (let i = gameStart; i < gameStart + divisor; i++) {
            round.push(games[i]);
          }
          rounds.push(round);
          gameStart += divisor;
          divisor /= 2;
        }
        return rounds;
    };

    return (
        <div>Region</div>
    )
}



export default Region;