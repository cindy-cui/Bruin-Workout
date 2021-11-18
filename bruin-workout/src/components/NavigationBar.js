import {Link} from "react-router-dom";
import React from "react";
import auth from "./Auth";
import {signOut} from "firebase/auth";

//This bar returns a specific list of Link objects depending on what page is currently
//loaded, which is stored in the props.page field. Clicking on these pages go to specific "/URL", which is
//associated with a render in App.js. For instance, the Link to "/home" is a Route with a path "/home" that
//  renders the <Home/> element (see App.js). This Link is only logical for a profile page, which needs a link back to Home, so
// this Link is displayed when props.page==="Profile". So in Profile.js the <Profile/> object 
//has a <NavigationBar page="Profile"/> within it.
// -Daniel Shim
function NavigationBar(props){
        async function logout(){
                await signOut(auth);
        }
        if(props.page==="Home"){
                return(<div className="navigation">
                <ul>
                        <li><Link to="/" onClick={logout}>Log out </Link></li>
                        <li><Link to="/myprofile">My Profile </Link></li>
                </ul>
                </div>);
        }
        if(props.page==="Profile"){
                return(<div className="navigation">
                <ul>
                        <li><Link to="/home">Home </Link></li>
                </ul>
                </div>);
        }
        if(props.page==="Error"){
                return(<div className="navigation">
                <ul>
                        <li><Link to="/">Home </Link></li>
                </ul>
                </div>);
        }
        if(props.page==="Signup"){
                return(<div className="navigation">
                <ul>
                        <li><Link to="/login">Back to Login </Link></li>
                </ul>
                </div>);
        }
        return null;
}

export default NavigationBar;