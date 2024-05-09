import css from "./Feedback.module.css"

export default function Feedback() {
    return (
        <div>
            <p className={css.reviews}>Good: 0</p>
            <p className={css.reviews}>Neutral: 0</p>
            <p className={css.reviews}>Bad: 0</p>
        </div>
    )
}