 import './App.css';
import './css/user.css'
 import appLogo from "./img/image 5.png";
import appLog from "./img/MOTION TEST.png";
 import user from "./user/User";
 import Home from "./home/Home";
 function App() {
     return (
         <div>
             {/*<div className="appBg">*/}
             {/*    <div className="heroContainer2">*/}
             {/*        <div>*/}
             {/*            <div style={{display: "flex", alignItems: "center"}}>*/}
             {/*                <img src={appLogo} alt=""/>*/}
             {/*                <img src={appLog} alt=""/>*/}
             {/*            </div>*/}
             {/*        </div>*/}

             {/*        <div className="lds-ring">*/}
             {/*            <div></div>*/}
             {/*            <div></div>*/}
             {/*            <div></div>*/}
             {/*            <div></div>*/}
             {/*        </div>*/}

             {/*        <h1 className="appH1">Motion Web LLC</h1>*/}

             {/*    </div>*/}

             {/* */}
             {/*</div>*/}
             <Home/>
         </div>
  );
}

export default App;
