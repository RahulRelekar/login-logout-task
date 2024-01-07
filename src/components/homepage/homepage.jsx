import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser, user, logout}) => {
    return (
        // test1
        <div className="homepage">
            <h1>Welcome {user.name} to Kimshuka Technologies</h1>
            <div className="button" onClick={logout}>Logout</div>
        </div>
    )
}

export default Homepage;
