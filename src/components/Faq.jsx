import "../styles/Faq.css"
import {useState} from "react";

function Faq({object}) {
    const [folded, setFolded] = useState(false)

    return (
        <div onClick={() => setFolded(value => !value)} className="faq-container">
            <div className="faq-head">
                <h4>{object.title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
            </div>
            { folded ? <p>{object.paragraph}</p> : null }
        </div>
    )
}

export default Faq