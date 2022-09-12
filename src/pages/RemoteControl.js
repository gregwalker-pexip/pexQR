import PubNub from 'pubnub';
import { useHistory, useNavigate } from "react-router-dom";

import './RemoteControl.css';


var channelID = sessionStorage.getItem("pexKey"); 
console.log ("Remote Control Channel:", channelID );

const RemoteControl = () => {
    
    var virtualRemote = new PubNub({
        publishKey: 'pub-c-62c7c7fd-85b5-41d0-a67f-7e3601a60752',
        subscribeKey: 'sub-c-4d7062b1-224e-4c5a-bcc4-1e789b5a6d32',
        keepAlive: true, // Keep the connection alive
        presenceTimeout: 600, // Don't timeout for 10 minutes
        uuid: "PexAssist_VirtualRemote"
        });
        
 
    const toggleMicrophone = () => {  
        virtualRemote.publish({
            channel: channelID,
            message: "🎙️ToggleMicrophone",
            x: ("🎙️ToggleMicrophone" )
           
        });
        console.log("TX: 🎙️ToggleMicrophone");
    };


    const toggleCamera = () => {  
        virtualRemote.publish({
            channel: channelID,
            message: "📹ToggleCamera",
            x: ("📹ToggleCamera" )
           
        });
        console.log("TX: 📹ToggleCamera");
    };


    const switchView = () => { 
        virtualRemote.publish({
            channel: channelID,
            message: "🔀SwitchView",
            x: ("🔀SwitchView" )
           
        });
        console.log("TX: 🔀SwitchView");
    };

    const endCall = () => {  
        virtualRemote.publish({
            channel: channelID,
            message: "❌TerminateCall",
            x: ("❌TerminateCall" )
           
        });
        console.log("TX: ❌TerminateCall");
    };

    const reSync = () => { 
        
        console.log("Resync Channel Listner - Not Implemented");
    };

    console.log ("------------ GET STATUS ------------" );
    virtualRemote.publish({
        channel: channelID,
        message: "❓GetStatus",
        x: ("❓GetStatus" ) 
    });


    return (

    <div>
    
       <div id="inMeetingLabel" className="inMeetingLabel">VIRTUAL REMOTE CONTROL</div>  
       <div><button id="toggleMicrophone" className="Button toggleMicrophone" onClick={toggleMicrophone}>Microphone</button></div>   
       <div><button id="toggleCamera" className="Button toggleCamera" onClick={toggleCamera}>Camera</button></div>  
      
       <div><button id="endCall" className="Button endCall" onClick={endCall}>End Call</button></div> 

    </div>
    )
  
  };
  
  export default RemoteControl;