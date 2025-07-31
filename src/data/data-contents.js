import heroTabOneSrc from "../assets/images/illustration-features-tab-1.svg"
import heroTabTwoSrc from "../assets/images/illustration-features-tab-2.svg"
import heroTabThreeSrc from "../assets/images/illustration-features-tab-3.svg"

import chromeExtensionUrl from "../assets/images/logo-chrome.svg"
import firefoxExtensionUrl from "../assets/images/logo-firefox.svg"
import operaExtensionUrl from "../assets/images/logo-opera.svg"

export const Links = ["features", "pricing", "contact"]
export const btnMore = ["More Info"]
export const btnList = ["Get it on Chrome", "Get it on Firefox"]
export const TabList = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"]

export const articleList = {
    "manager" : {
        title : "A Simple Bookmark Manager",
        paragraph: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
    },
    "features" : {
        title : "Features",
        paragraph: "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
    },
    "extension" : {
        title : "Download the extension",
        paragraph: "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
    },
    "faq" : {
        title : "Frequently Asked Questions",
        paragraph : "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
    }
}

export const tabSrcList = [
    heroTabOneSrc,
    heroTabTwoSrc,
    heroTabThreeSrc
]

export const tabContentList = [
    {
        title : "Bookmark in one click",
        paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        title : "Intelligent search",
        paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        title : "Share your bookmarks",
        paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
]

export const ExtensionList = [
    {
        imageUrl : chromeExtensionUrl,
        title : "Add to Chrome",
        paragraph: "Minimum version 62"
    },
    {
        imageUrl : firefoxExtensionUrl,
        title : "Add to Firefox",
        paragraph: "Minimum version 55"
    },
    {
        imageUrl : operaExtensionUrl,
        title : "Add to Opera",
        paragraph: "Minimum version 46"
    }
]

export const FaqList = [
    {
        title : "What is Bookmark?",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        title : "How can I request a new browser?",
        paragraph: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
        title : "Is there a mobile app?",
        paragraph: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
        title : "What about other Chromium browsers?",
        paragraph: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
]
