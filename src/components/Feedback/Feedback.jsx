import css from "./Feedback.module.css"

export default function Feedback({feedback: {good, neutral, bad}, totalFeedback, positiveFeedback}) {

    return (
        <div>
            <p className={css.reviews}>Good: {good}</p>
            <p className={css.reviews}>Neutral: {neutral}</p>
            <p className={css.reviews}>Bad: {bad}</p>
            <p className={css.reviews}>Total: {totalFeedback}</p>
            <p className={css.reviews}>Positive: {positiveFeedback}%</p>

        </div>
    )
}

