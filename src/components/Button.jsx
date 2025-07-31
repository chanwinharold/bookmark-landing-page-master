import "../styles/Button.css"

function Button({styleType, children}) {
    return <button className={styleType} content={children}>{children}</button>
}

export default Button