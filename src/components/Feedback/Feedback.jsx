import css from "./Feedback.module.css"

export default function Feedback({feedback: {good, neutral, bad}, totalFeedback}) {

    return (
        <div>
            <p className={css.reviews}>Good: {good}</p>
            <p className={css.reviews}>Neutral: {neutral}</p>
            <p className={css.reviews}>Bad: {bad}</p>
        </div>
    )
}

