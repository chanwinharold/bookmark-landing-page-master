import "../styles/Article.css"

function Article({title, children, styleType}) {

    return (
        <section className={styleType}>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default Article