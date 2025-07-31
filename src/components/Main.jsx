import "../styles/Main.css"
import Article from "./Article.jsx";
import Button from "./Button.jsx";

function Main({containerClass, imageClass, articleClass, buttonClass, ButtonNames, ArticleContent, imageSrc}) {

    return (
        <div className={containerClass}>
            <img className={imageClass} srcSet={imageSrc} alt="illustration"/>
            <div className={articleClass}>
                <Article content={ArticleContent} styleType={articleClass} />
                <div>
                    {
                        ButtonNames.map((buttonName, index) => (
                            <Button key={index} styleType={buttonClass}>{buttonName}</Button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Main