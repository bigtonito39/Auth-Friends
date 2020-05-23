import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function ProtectedRoute( {component:Component, ...rest}) {

    let isItIn = localStorage.getItem("token");

/*creating component that wraps route and checks to see if user is logged in..
if theyre loogged in send them to proper route
if theyre NOT logged in it will redirect them to the login component*/

console.log()

return(
    <Route {...rest} 

    render={() => {
        if (isItIn) {
            return <Component />
        }
        else {
            return <Redirect to= "/login"/>
        }
    }}
    
        
    
    />
)


}
