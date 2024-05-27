import { useContext, useState } from 'react';
import './MainComponent.css';
import Xicon from "./X_icon.png";
import Oicon from "./O_icon.png";
import ThemeContext from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

const arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

const MainComponent = () => {

  const [turn,setTurn] = useState(0);
  const [winner,setWinner] = useState(-1);
  const {theme , setTheme} = useContext(ThemeContext);

  function handleClick(e)
  {
    let cell = Number(e.target.id);

    // console.log("Calling handle Click for cell : " + cell);
    
    if(arr[cell] == -1)
      {
        // console.log("Before Inside if and having value of arr[cell] : " + arr[cell]);
        arr[cell] = turn;
        // console.log("After Inside if and having value of arr[cell] : " + arr[cell]);
    }
  
    checkWinner(turn,arr);
  }

  function checkWinner(turn,arr)
  {
      if( ( arr[1] === arr[2] && arr[1] === arr[3] && arr[1] !== -1 && arr[2] !== -1 && arr[3] !== -1) || 
          ( arr[4] === arr[5] && arr[4] === arr[6] && arr[4] !== -1 && arr[5] !== -1 && arr[6] !== -1) ||
          ( arr[7] === arr[8] && arr[7] === arr[9] && arr[7] !== -1 && arr[8] !== -1 && arr[9] !== -1) ||
          ( arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== -1 && arr[4] !== -1 && arr[7] !== -1) ||
          ( arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== -1 && arr[5] !== -1 && arr[8] !== -1) ||
          ( arr[3] === arr[6] && arr[3] === arr[9] && arr[3] !== -1 && arr[6] !== -1 && arr[9] !== -1) ||
          ( arr[1] === arr[5] && arr[1] === arr[9] && arr[1] !== -1 && arr[5] !== -1 && arr[9] !== -1) ||
          ( arr[3] === arr[5] && arr[3] === arr[7] && arr[3] !== -1 && arr[5] !== -1 && arr[7] !== -1)
        )
      {
          setWinner(turn);
      }
      else
      {
        let flag = false;

        for(let i=1 ; i<=9 ; i++)
        {
            if(arr[i] === -1)
            {
                flag = true;
                break;
            }
        }

        if(flag)
        {
            setTurn( (turn + 1 ) % 2 );
        }
        else
        {
            setWinner(2);
        }
      }
      
  }

  function handleRestart()
  {
    // clearing all the values of arr[i] to -1
    for(let i=0 ; i<=9 ; i++)
    {
        arr[i] = -1;
    }

    setTurn(0);
    setWinner(-1);
  }

  return (
    <>
      <div className={ (theme ? "light-theme" : "dark-theme") + " Themeclass"}>
            <FontAwesomeIcon onClick={() => setTheme(!theme)} className="ThemeButton" icon={faCircleHalfStroke} />
      </div>

      <div className={ (theme ? "light-theme" : "dark-theme") + " superParent"}>
        <div className={ (theme ? "light-theme" : "dark-theme") + " container"}>

        <div className="row" onClick={(e) => handleClick(e)}>

        <div className="square" id="1">
            {arr[1] === -1 ? "" : arr[1] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        <div className="square" id="2">
        {arr[2] === -1 ? "" : arr[2] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        <div className="square" id="3">
        {arr[3] === -1 ? "" : arr[3] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        </div>

        <div className="row" onClick={(e) => handleClick(e)}>

        <div className="square" id="4">
        {arr[4] === -1 ? "" : arr[4] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        <div className="square" id="5">
        {arr[5] === -1 ? "" : arr[5] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        <div className="square" id="6">
        {arr[6] === -1 ? "" : arr[6] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>
        
        </div>

        <div className="row" onClick={(e) => handleClick(e)}>

        <div className="square" id="7">
        {arr[7] === -1 ? "" : arr[7] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        <div className="square" id="8">
        {arr[8] === -1 ? "" : arr[8] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        <div className="square" id="9">
        {arr[9] === -1 ? "" : arr[9] === 0 ? <img src={Xicon} alt="Xicon" /> : <img src={Oicon} alt="Oicon" />} 
        </div>

        </div>

        {
        winner === -1 ? <p className="turn">Turn For Player : {turn}</p> : 
        <>
            {
                winner === 2 ? <p className='turn'>Draw between both the players..</p>
                 :  <p className='turn'>Winner of the game is Player : {turn}</p>
            }

            <button className="restart" onClick={(e) => handleRestart()}>Restart</button>
        </>
        
        }
        </div>
      </div>

    </>
  );
}

export default MainComponent;