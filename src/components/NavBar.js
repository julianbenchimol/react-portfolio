import React from "react"

export default function NavBar({currentPage, pageChange}) {
    return (
        <ul className = "nav nav-tabs" id = "nav-bar">

            {/* Portfolio Link */}
            <li className = "nav-item">
                <a href = "#portfolio" 
                onClick={() => pageChange("Portfolio")}
                className = {currentPage === "Portfolio" ? "nav-link-active" : "nav-link"}/>
            </li>

            {/* Resume Link */}
            <li className = "nav-item">
                <a href = "#my-resume" 
                onClick={() => pageChange("MyResume")}
                className = {currentPage === "MyResume" ? "nav-link-active" : "nav-link"}/>
            </li>

            {/* Aboute Me Link */}
            <li className = "nav-item">
                <a href = "#about-me" 
                onClick={() => pageChange("AboutMe")}
                className = {currentPage === "AboutMe" ? "nav-link-active" : "nav-link"}/>
            </li>

            {/* Contact Me Link */}
            <li className = "nav-item">
                <a href = "#contact-me" 
                onClick={() => pageChange("Contact")}
                className = {currentPage === "ContactMe" ? "nav-link-active" : "nav-link"}/>
            </li>
        </ul>
    )
}