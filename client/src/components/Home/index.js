import * as React from 'react';
import "./index.css";
import callApiLoadUserSettings from './callApiLoadUserSettings.js';
const serverURL = "";


const Home = () => {

  const [userID, setUserID] = React.useState(1);
  const [mode, setMode] = React.useState(0);

  
  React.useEffect(() => {
    //loadUserSettings();
  }, []);
  
  const loadUserSettings = () => {
    callApiLoadUserSettings(serverURL, userID)
      .then(res => {
        //console.log("parsed: ", res[0].mode)
        setMode(res[0].mode);
      });
  }

  return (
    <div className="content">
      <div className="title">
        <div className='shape circle'/>
        <div className='shape rectanlge'/>
        <div className='shape triangle'/>
        ResiRate
      </div>
    </div>
  );
}




export default Home;