import {useState} from "react";
import '../styles/App.css'

import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Article from "./Article.jsx";
import Main from "./Main.jsx";

function App() {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            { mobileMenu && <Menu setDisplayed={setMobileMenu} /> }

            <Header setDisplayed={setMobileMenu} />
            <Main />
            <Article styleType="container bookmark-features" title="Features">Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.</Article>
        </>
    )
}

export default App
