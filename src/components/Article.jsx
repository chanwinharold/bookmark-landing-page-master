import "../styles/Article.css"

function Article({content, styleType}) {

    return (
        <section className={styleType}>
            <h2>{content.title}</h2>
            <p>{content.paragraph}</p>
        </section>
    )
}

export default Article