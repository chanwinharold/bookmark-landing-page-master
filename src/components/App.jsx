import {useState} from "react";

import '../styles/App.css'
import heroSrc from "../assets/images/illustration-hero.svg";

import {btnMore, btnList, Links, TabList, tabSrcList, articleList, tabContentList, ExtensionList, FaqList} from "../data/data-contents.js";

import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Article from "./Article.jsx";
import Main from "./Main.jsx";
import Extension from "./Extensions.jsx";
import Button from "./Button.jsx";
import Faq from "./Faq.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";


function App() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <>
            { mobileMenu && <Menu setDisplayed={setMobileMenu} /> }

            <Header setDisplayed={setMobileMenu} Links={Links} />

            <main className="container">
                <h1 className="visually-hidden">Bookmark master</h1>
                <Main
                    containerClass="bookmark manager"
                    imageClass="image" imageSrc={heroSrc}
                    articleClass="article-container" ArticleContent={articleList.manager}
                    buttonClass="btn-common" ButtonNames={btnList}
                />
            </main>

            <Article styleType="container bookmark-article" content={articleList.features}></Article>

            <div className="container tabs">
                <nav className="tabs-navbar">
                    <ul className="tabs-list">
                        {
                            TabList.map((tab, index) => (
                                <li
                                    key={index}
                                    className={ (index === tabIndex) ? "isActive".toString() : null }
                                    onClick={() => setTabIndex(index)}
                                >
                                    {tab}
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>

            <Main
                containerClass="container bookmark tabs"
                imageClass="image" imageSrc={tabSrcList[tabIndex]}
                articleClass="article-container" ArticleContent={tabContentList[tabIndex]}
                buttonClass="btn-common" ButtonNames={btnMore}
            />

            <Article styleType="container bookmark-article" content={articleList.extension}></Article>

            <div className="container extension">
                {
                    ExtensionList.map((extension, index) => (
                        <Extension
                            key={index}
                            extensionUrl={extension.imageUrl}
                            title={extension.title}
                            version={extension.paragraph}
                        />
                    ))
                }
            </div>

            <Article styleType="container bookmark-article" content={articleList.faq}></Article>

            <div className="container">
                {
                    FaqList.map((faq, index) => (
                        <Faq key={index} object={faq}/>
                    ))
                }
            </div>

            <Button styleType="btn-common btn-blue centered">{btnMore}</Button>
            <Form />
            <Footer Links={Links} />
        </>
    )
}

export default App
