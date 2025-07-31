import "../styles/Form.css"
import Button from "./Button.jsx";
import {useId, useState} from "react";

function Form() {
    const id = useId()
    const [isIncorrect, setIsIncorrect] = useState(false)
    const [email, setEmail] = useState("")

    const errorMessage = "Whoops, make sure it's an email"
    const regex = new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    const handleChange = (value) => {
        setEmail(value)
        setIsIncorrect(!regex.test(email))
    }

    return (
        <div className="form-container">
            <div style={{maxWidth: 500}}>
                <div className="form-head">
                    <p>35,000+ already joined</p>
                    <h3>Stay up-to-date with what we’re doing</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        <input
                            id={id}
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Enter your email address"
                            className={ (isIncorrect) ? "border-error".toString() : null }
                        />
                        {
                            isIncorrect ? (
                                <>
                                    <span className="icon-error"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg></span>
                                    <span className="error-zone">{errorMessage}</span>
                                </>
                            ) : null
                        }
                    </label>
                    <Button styleType="btn-login btn-form">Contact Us</Button>
                </form>
            </div>
        </div>
    )
}

export default Form