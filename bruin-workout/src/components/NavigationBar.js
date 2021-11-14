import {Link} from "react-router-dom";
import React from "react";
import auth from "./Auth";
import {signOut} from "firebase/auth";

function NavigationBar(props){
        async function logout(){
                signOut(auth).then(() => {
                        // Sign-out successful.
                      }).catch((error) => {
                        // An error happened.
                      });
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