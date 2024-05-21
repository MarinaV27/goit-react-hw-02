import Description from "../Description/Description.jsx"
import Options from "../Options/Options.jsx"
import Feedback from "../Feedback/Feedback.jsx"
import Notification from "../Notification/Notification.jsx"
//import css from "./App.module.css"
import { useState, useEffect } from "react"

export default function App() {
    const startFeedbeck = JSON.parse(localStorage.getItem("feedback")) || {
        good: 0,
        neutral: 0,
        bad: 0
    };
     const [feedback, setFeedback] = useState (() => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : startFeedbeck;
     });

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

    const resetFeedback = () => { 
        localStorage.removeItem("feedback");
        setFeedback (startFeedbeck);
    };

    const updateFeedback = feedbackType => {
        setFeedback ({ 
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        })
       };
    useEffect(() => {
        localStorage.setItem("feedbeck", JSON.stringify(feedback));
    }, [feedback]);

    return (
        <>
        <Description />
        <Options 
         updateFeedback={updateFeedback}
         totalFeedback={totalFeedback}
         positiveFeedback={positiveFeedback}
         resetFeedback={resetFeedback}
         />
         {totalFeedback > 0 ?(
        <Feedback 
         feedback={feedback}
         totalFeedback={totalFeedback}
         positiveFeedback={positiveFeedback}
        />
         ) : (
        <Notification />
         )
    }

        </>
    )
}




