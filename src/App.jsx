import "./App.css";

// const totalGamesPerRound = [32, 16, 8, 4, 2, 1]

// DATA STRUCTURES

// region: { regionId: 1, name: 'Region 1', games: [gameId] }
// 6 regions: 4 initial region, 1 final four, 1 championship
const REGION_OBJECT = {
  regionId: null,
  name: null,
  games: [],
};

// games: { gameId: 1, team1Id: 1, team2Id: 2, team1Score: 0, team2Score: 0 }
// 63 games (total teams minus 1)
const GAME_OBJECT = {
  gameId: null,
  team1Id: null,
  team2Id: null,
  team1Score: 0,
  team2Score: 0,
  predictedWinner: null,
};

// teams: { teamId: 1, seed: 1, name: 'Team 1' }
// 64 teams
const TEAM_OBJECT = {
  teamId: null,
  seed: null,
  name: null,
};

// HELPER FUNCTIONS

const generateGames = () => {
  // Create an array of 63 games
  const games = [];
  for (let i = 1; i <= 63; i++) {
    let game = { ...GAME_OBJECT };
    game.gameId = i;
    games.push(game);
  }
  return games;
};

const generateRegions = (games) => {
  const regions = [];
  // Split games into groups of 15 games
  for (let i = 0; i < 5; i++) {
    let region = { ...REGION_OBJECT };
    region.regionId = i + 1;

    // Set Final Four and Championship
    if (i === 4) {
      region.games = games.slice(60, 63);
      region.name = "Final Four";
    } else {
      let gamesIndex = i * 15;
      region.games = games.slice(gamesIndex, gamesIndex + 15);
    }
    regions.push(region);
  }
  return regions;
};

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

const generateTeams = () => {
  // Create an object for the 64 teams
  const teams = {};
  for (let i = 1; i <= 64; i++) {
    let team = { ...TEAM_OBJECT };
    team.teamId = i;
    team.name = `Team ${i}`;
    teams[i] = team;
  }
  return teams;
};

function App() {
  // generate scaffolding for the bracket: teams, games, regions
  const allGames = generateGames();

  const regions = generateRegions(allGames);

  // generates regions and their rounds
  for (let region of regions) {
    console.log(generateRegionalRounds(region.games));
  }


  const teams = generateTeams();
  console.log(teams)

  return (
    <div className="main-container">
      <div className="region1 region-container">
        <span>Region 1</span>
        <div className="teams16 round-container">
          <span>Round 1</span>
        </div>
        <div className="teams8 round-container">
          <span>Round 2</span>
        </div>
        <div className="teams4 round-container">
          <span>Sweet 16</span>
        </div>
        <div className="teams2 round-container">
          <span>Elite 8</span>
        </div>
      </div>

      <div className="region2 region-container">
        <span>Region 2</span>
        <div className="teams16 round-container">
          <span>Round 1</span>
        </div>
        <div className="teams8 round-container">
          <span>Round 2</span>
        </div>
        <div className="teams4 round-container">
          <span>Sweet 16</span>
        </div>
        <div className="teams2 round-container">
          <span>Elite 8</span>
        </div>
      </div>

      <div className="region3 region-container">
        <span>Region 3</span>
        <div className="teams16 round-container">
          <span>Round 1</span>
        </div>
        <div className="teams8 round-container">
          <span>Round 2</span>
        </div>
        <div className="teams4 round-container">
          <span>Sweet 16</span>
        </div>
        <div className="teams2 round-container">
          <span>Elite 8</span>
        </div>
      </div>

      <div className="region4 region-container">
        <span>Region 4</span>
        <div className="teams16 round-container">
          <span>Round 1</span>
        </div>
        <div className="teams8 round-container">
          <span>Round 2</span>
        </div>
        <div className="teams4 round-container">
          <span>Sweet 16</span>
        </div>
        <div className="teams2 round-container">
          <span>Elite 8</span>
        </div>
      </div>

      <div className="region5 final-4-container">
        <span>Final 4</span>
        <div className="teams4 round-container">
          <span>Final 4</span>
        </div>
        <div className="teams2 round-container">
          <span>Championship</span>
        </div>
      </div>
    </div>
    // <div className="main-container">
    //   {regions.map((region) => (
    //     <div key={Math.random() * 100 + 64} className="region">
    //     {region.games.map((game) => (
    //       <div key={Math.random() * 10000} className="game">
    //         <div key={Math.random() * 10000000} className="team">Team {game.team1Id}</div>
    //         <div key={Math.random() * 10000000} className="team">Team {game.team2Id}</div>
    //       </div>
    //     ))}
    //     </div>
    //   ))}
    // </div>
  );
}

export default App;
