import css from "./Options.module.css"

export default function Options(){
    return (
        <div className={css.buttons}>
            <button className={css.btn}>Good</button>
            <button className={css.btn}>Neutral</button>
            <button className={css.btn}>Bad</button>
            
        </div>

    )
}