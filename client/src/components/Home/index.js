import {useState, useEffect, useRef} from 'react';
import "./index.css";
import callApiLoadUserSettings from './callApiLoadUserSettings.js';
import SearchBar from '../SearchBar/index.js';
const serverURL = "";


const Home = () => {

  // const [userID, setUserID] = useState(1);
  // const [mode, setMode] = useState(0);

  // useEffect(() => {
  //   //loadUserSettings();
  // }, []);
  
  // const loadUserSettings = () => {
  //   callApiLoadUserSettings(serverURL, userID)
  //     .then(res => {
  //       //console.log("parsed: ", res[0].mode)
  //       setMode(res[0].mode);
  //     });
  // }

  return (
    <div className="content">
      <div className='titleContent'>
        <div className="title">
          <div className='shape circle'/>
          <div className='shape rectangle'/>
            Choose your next home wisely!
          <div className="subtitle">
            Real reviews by real students.
          </div>
        </div>
        <SearchBar isNavbar={false}/>
      </div>
    </div>
  );
}




export default Home;