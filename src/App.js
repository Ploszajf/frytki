import './App.css';
import StartingScreen from './Components/StartingScreen';
import StartingContent from './Components/StartingContent';
import Player from './Components/Player';
import Background from './Components/Background';
import Game from './Components/Game';
import Obstacle from './Components/Obstacle';
import Score from './Components/Score';
import FinalScore from './Components/FinalScore';
import * as constants from './constants';
import { useEffect, useRef, useState } from 'react';


function App() {
  const pressedKey = useRef(false);                               //Checking if [a, A, left arrow, d, D, right arrow] key pressed
  const touch = useRef(false)                                     //Checking if the screen is touched
  const mobileX = useRef()                                        //Touch X position
  const currentPosition = useRef(50);                             //Current X position
  const finalMessage = 'Your final score: ';                      //

  const [playerPositionX, setPlayerPositionX] = useState(50);     //X position of the player
  const [obstacleLeftWidth, setObstacleLeftWidth] = useState(Math.random() * (100 - constants.OBSTACLE_GAP * 2) + constants.OBSTACLE_GAP);   //Left obstacle width
  const [obstacleTop, setObstacleTop] = useState(0); //Y position of obstacles
  const [game, setGame] = useState(true);                         //Condition for the duration of the game
  const [score, setScore] = useState(0);                         //Number of scored points
  const [win, setWin] = useState();                               //Text of the message about the end of the game in the center of the screen
  const [scoreboardVis, setScoreboadrVis] = useState("none");    //Showing/hiding scoreboard
  const [endMessageVis, setEndMessageVis] = useState("none");     //Showing/hiding the message about the end of the game
  const [gameVis, setGameVis] = useState("none");
  const [startingScreenVis, setStartingScreenVis] = useState("flex")
  const [start, setStart] = useState(false)
  let key = "";                                                   //pressed key


  function gameStart() {
    setStart(true);
    setScoreboadrVis("block")
    setStartingScreenVis("none")
    setGameVis("block")
    setPlayerPositionX(50)
    setObstacleTop(-constants.OBSTACLE_HEIGHT)
  }

  //EventListeners for move
  document.addEventListener('keydown', (e) => {
    if (pressedKey.current) {
      return
    }
    if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft" || e.key === "d" || e.key === "D" || e.key === "ArrowRight") {

      key = e.key;
      pressedKey.current = true
      move()
    }
  });

  document.addEventListener('keyup', () => {
    if (!pressedKey.current) {
      return
    }
    pressedKey.current = false
  })

  document.addEventListener('touchstart', (e) => {
    if (touch.current) {
      return
    }
    touch.current = true
    mobileX.current = e.changedTouches[0].clientX / document.body.clientWidth * 100
    mobileTouch(e)
  });
  let moveID = setTimeout
  document.addEventListener('touchmove', (e) => {
    if (mobileX.current === e.changedTouches[0].clientX / document.body.clientWidth * 100) {
      clearTimeout(moveID)
      return
    } else {
      clearTimeout(moveID)
      mobileX.current = e.changedTouches[0].clientX / document.body.clientWidth * 100
      moveID(mobileTouch, 20)
    }

  });

  document.addEventListener('touchend', () => {
    if (!touch.current) {
      return
    }
    touch.current = false
  });

  document.addEventListener('touchcancel', (e) => {
    if (!touch.current) {
      return
    }
    touch.current = false
  });

  //Movement of the player
  function move() {
    if (pressedKey.current) {
      if ((key === "a" || key === "A" || key === "ArrowLeft") && (currentPosition.current > 1)) {
        setPlayerPositionX(playerPositionX => playerPositionX - constants.MOVE_VALUE);
      }
      if ((key === "d" || key === "D" || key === "ArrowRight") && ((currentPosition.current + constants.PLAYER_SIZE_WIDTH) < 99)) {
        setPlayerPositionX(playerPositionX => playerPositionX + constants.MOVE_VALUE);
      }
      setTimeout(move, 5)
    }
  }

  function mobileTouch() {
    if (touch.current) {
      if (mobileX.current < currentPosition.current + constants.PLAYER_SIZE_WIDTH && ((currentPosition.current) > 1)) {
        if (mobileX.current - (currentPosition.current + constants.PLAYER_SIZE_WIDTH) > constants.MOVE_VALUE) {
          setPlayerPositionX(playerPositionX => playerPositionX - constants.MOVE_VALUE);
        } else {
          setPlayerPositionX(mobileX.current - constants.PLAYER_SIZE_WIDTH / 2)
        }
      }
      if (mobileX.current > currentPosition.current + constants.PLAYER_SIZE_WIDTH && (currentPosition.current + constants.PLAYER_SIZE_WIDTH < 99)) {
        if ((currentPosition.current + constants.PLAYER_SIZE_WIDTH) - mobileX.current > constants.MOVE_VALUE) {
          setPlayerPositionX(playerPositionX => playerPositionX + constants.MOVE_VALUE);
        } else {
          setPlayerPositionX(mobileX.current - constants.PLAYER_SIZE_WIDTH / 2)
        }
      }
    }
  }



  //Setting player position on screen
  useEffect(() => {
    currentPosition.current = playerPositionX;
  })

  //Movement of the obsticles
  useEffect(() => {
    let obsticleInterval;
    if (start) {
      if (game && obstacleTop <= 100) {
        obsticleInterval = setInterval(() => {
          setObstacleTop(obstacleTop => obstacleTop + constants.OBSTACLE_SPEED)
        }, 20);

        return () => {
          clearInterval(obsticleInterval)
        };
      }
      else {
        setObstacleTop(- (constants.OBSTACLE_HEIGHT / document.body.clientHeight * 100));
        setObstacleLeftWidth(Math.random() * (100 - constants.OBSTACLE_GAP * 2) + constants.OBSTACLE_GAP);

        //points
        if (game) {
          setScore(score => score + 1)
        }
        return () => {
          clearInterval(obsticleInterval)
        };
      }
    }
  }, [game, obstacleTop, score, start]);


  //win
  useEffect(() => {

    if (score === constants.MAX_SCORE) {
      setGame(false)
      setWin(constants.WIN_MESSAGE)
      setEndMessageVis("block")
      setScoreboadrVis("none")
      setGameVis("none")
    }

  }, [score])

  //Colision with the obstacles
  useEffect(() => {
    const colisionLeft = playerPositionX >= 0 && playerPositionX < obstacleLeftWidth
    const colisionRight = playerPositionX >= obstacleLeftWidth + constants.OBSTACLE_GAP - constants.PLAYER_SIZE_WIDTH
    const colisionTop = obstacleTop - (constants.OBSTACLE_HEIGHT / document.body.clientHeight * 100) - constants.PLAYER_SIZE_HEIGHT < constants.PLAYER_POSITION_Y
    const colisionBottom = obstacleTop + (constants.OBSTACLE_HEIGHT / document.body.clientHeight * 100) > constants.PLAYER_POSITION_Y
    if (colisionTop && colisionBottom) {
      if (colisionLeft || colisionRight) {
        setGame(false)
        setWin(constants.LOSE_MESSAGE)
        setEndMessageVis("block")
        setScoreboadrVis("none")
      }
    }

  }, [obstacleLeftWidth, obstacleTop, playerPositionX]);



  return (
    <Background>
      <StartingScreen vis={startingScreenVis}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <StartingContent></StartingContent>
          <button style={{ width: '80%' }} onClick={gameStart}>Start</button>
        </div>
      </StartingScreen>
      <Score vis={scoreboardVis}>Points: {score}</Score>
      <FinalScore vis={endMessageVis}>
        {win}
        <br />
        {finalMessage}{score}
      </FinalScore>
      <Game vis={gameVis}>

        <Obstacle
          top={obstacleTop}
          height={constants.OBSTACLE_HEIGHT}
          left={0}
          width={obstacleLeftWidth} />
        <Obstacle
          top={obstacleTop}
          height={constants.OBSTACLE_HEIGHT}
          left={100 - (100 - obstacleLeftWidth - constants.OBSTACLE_GAP)}
          width={100 - obstacleLeftWidth - constants.OBSTACLE_GAP}
        />
        <Player id='player' width={constants.PLAYER_SIZE_WIDTH} height={constants.PLAYER_SIZE_HEIGHT} top={constants.PLAYER_POSITION_Y} left={playerPositionX} />
      </Game>
    </Background>
  );
}

export default App;
