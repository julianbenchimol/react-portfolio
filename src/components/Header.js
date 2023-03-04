import React from "react"
import NavBar from './NavBar'

export default function Header(props) {
    const {currentPage, pageChange} = props
    return (
        <div>
            <div id = "header">
                <h1>Julian Benchimol</h1>
                <NavBar
                    currentPage = {currentPage}
                    pageChange = {pageChange}/>
            </div>
        </div>
    )
}