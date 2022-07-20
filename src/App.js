import './App.css';
import './css/user.css'
import './css/question.css'
import './css/rating.css'
import appLogo from "./img/image 5.png";
import appLog from "./img/MOTION TEST.png";
import user from "./user/User";
import Home from "./home/Home";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {api} from "./https/api";

function App() {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/api/v1/theme/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
    return (
        <div>
            {catalog.length === 0 ? <div>
                    <div className="appBg">
                        <div className="heroContainer2">
                            <div>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <img src={appLogo} alt=""/>
                                    <img src={appLog} alt=""/>
                                </div>
                            </div>

                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <h1 className="appH1">Motion Web LLC</h1>

                        </div>


                    </div>
                </div> :
                <div>
                      <Home/>
                </div>
            }
        </div>
    );
}

export default App;
