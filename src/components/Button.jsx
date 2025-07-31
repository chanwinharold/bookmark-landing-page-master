import "../styles/Button.css"

function Button({styleType, children}) {
    return <button className={styleType}>{children}</button>
}

export default Button