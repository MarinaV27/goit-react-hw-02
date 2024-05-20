import Description from "../Description/Description.jsx"
import Options from "../Options/Options.jsx"
import Feedback from "../Feedback/Feedback.jsx"
//import css from "./App.module.css"
import { useState } from "react"

export default function App() {
    const startFeedbeck = {
        good: 0,
        neutral: 0,
        bad: 0
    };
     const [feedback, setFeedback] = useState (() => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : startFeedbeck;
     });

    const updateFeedback = feedbackType => {
        setFeedback ({ 
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        })
       };

    return (
        <>
        <Description />
        <Options 
         updateFeedback={updateFeedback}
         />
        <Feedback 
         feedback={feedback}
        />

        </>
    )
}




