import {Link} from "react-router-dom";
import React from "react";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NavigationError from '../pages/Error';
import PrivateRoute from './PrivateRoute';

function NavigationBar(props){
        if(props.page==="Login"){
                return(<div>
                </div>);
        }
        if(props.page==="Signup"){
                return(<div>
                </div>);
        }
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
        return(<div className="navigation">
        <ul>
                <li><Link to="/">Home </Link></li>
                <p> error</p>
        </ul>
        </div>);
}

export default NavigationBar;