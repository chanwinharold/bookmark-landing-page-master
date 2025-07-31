import "../styles/Main.css"
import heroSrc from "../assets/images/illustration-hero.svg";
import Article from "./Article.jsx";
import Button from "./Button.jsx";

function Main() {

    return (
        <div className="container bookmark-manager">
            <img srcSet={heroSrc} alt="hero illustration"/>
            <div className="article-container">
                <Article title="A Simple Bookmark Manager">A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.
                </Article>
                <div>
                    <Button styleType="btn-common btn-blue">Get it on Chrome</Button>
                    <Button styleType="btn-common btn-white">Get it on Firefox</Button>
                </div>
            </div>
        </div>
    )
}

export default Main