import {Link} from "react-router-dom";
import React from "react";


function NavigationBar(props){
        if(props.page==="Home"){
                return(<div className="navigation">
                <ul>
                        <li><Link to="/logout">Log out </Link></li>
                        <li><Link to="/myprofile">My Profile </Link></li>
                </ul>
                </div>);
        }
        if(props.page==="Profile"){
                return(<div className="navigation">
                <ul>
                        <li><Link to="/">Home </Link></li>
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