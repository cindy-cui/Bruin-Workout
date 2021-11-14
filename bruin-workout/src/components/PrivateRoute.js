import React from 'react';
import { Navigate} from 'react-router-dom';
import auth from './Auth';


function PrivateRoute(props) {
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return props.signedIn ? <Navigate to="/home" /> : <Navigate to="/login" />;
}
export default PrivateRoute;