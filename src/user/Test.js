import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {api} from "../https/api";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";


const Test = () => {
    function refreshPage() {
        window.location.reload();
    }

    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api(`/api/v1/question/`)
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
     const minuteSeconds = catalog[0]?.time_second;
    const timerProps = {
        isPlaying: true,
        size: 90,
        strokeWidth: 6
    };
    const router = useNavigate()
    const renderTime = (dimension, time) => {
        if (time === 1) {
            router(``)
        }
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
            </div>
        );
    };

    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;



    const onSubmitQuestion = data => {
        api.post("/api/v1/question/", {
            option_1_ru: data.option_1_ru,
            option_2_ru: data.option_2_ru,
            option_3_ru: data.option_3_ru,
            option_4_ru: data.option_4_ru,
        })
    }



    return (
        <div className="names">
            <div className="container">
                <div>
                    {
                        catalog.map(el => (
                            <div key={el.id}>
                                <div className="testQy">
                                    <CountdownCircleTimer{...timerProps} colors="#218380"
                                                         duration={minuteSeconds}>{({elapsedTime, color}) => (<span
                                        style={{color}}>{renderTime("seconds", getTimeSeconds(elapsedTime))}</span>)}
                                    </CountdownCircleTimer>
                                    <div>
                                        <h1>{el.correct_answer}</h1>
                                        <div className="testQuestion">
                                            <h1>{el.question_ru}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            el?.image ?
                                                <div>
                                                    <img className="testImg" src={el.image} alt=""/>
                                                </div> :
                                                <div style={{margin: "0 0 90px 0"}}></div>
                                        }
                                    </div>
                                    <div className="testAnswer">
                                        <div className="testAnswers">
                                            <div className="testing">
                                                <svg className="iconTest" viewBox="0 0 67 118" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="67" height="118" rx="21" fill="#012192"/>
                                                    <circle cx="34" cy="59" r="16" fill="white"/>
                                                </svg>
                                                <h1>{el.option_1_ru}</h1></div>

                                            <div className="testing">
                                                <svg className="iconTest" viewBox="0 0 67 118" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="67" height="118" rx="21" fill="#6918B4"/>
                                                    <path d="M34 38L50.4545 66.5H17.5455L34 38Z" fill="white"/>
                                                </svg>
                                                <h1>{el.option_2_ru}</h1></div>
                                            <div>
                                                {
                                                    el?.option_4_ru ? <div className="testing">
                                                        <svg className="iconTest" viewBox="0 0 67 118" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="67" height="118" rx="21" fill="#3DBE00"/>
                                                            <rect x="17.627" y="43" width="32" height="32"
                                                                  fill="white"/>
                                                        </svg>
                                                        <h1>{el.option_3_ru}</h1></div> : ""
                                                }
                                            </div>
                                            <div>
                                                {
                                                    el?.option_4_ru ? <div className="testing">
                                                        <svg className="iconTest" viewBox="0 0 67 118" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="67" height="118" rx="21" fill="#E00000"/>
                                                            <rect x="11.373" y="59" width="32" height="32"
                                                                  transform="rotate(-45 11.373 59)" fill="white"/>
                                                        </svg>
                                                        <h1>{el.option_4_ru}</h1></div> : ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Test;
