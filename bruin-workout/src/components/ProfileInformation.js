import { getData } from "./UserData";
import literalRock from '../assets/literal-rock.jpg';
import {useEffect,useState} from "react";
import React from "react";

/*  Here is how the object for each user is stored by default
 const userData = {
    username:"",
    age:"",
    height:"",
    ethnicity:"",
    gender:"",
    favWorkout:"",
    workouts:[],
};
*/

export default function ProfileInformation(props){
    //This can either be the user who clicked "My Profile" or profile search
    const [data,setData] = useState({
        username:"",
        age:"",
        height:"",
        ethnicity:"",
        gender:"",
        favWorkout:"",
        workouts:[],
    });
    //use a state variable to load in the results from getData which is an async function and
    //therefore should be used in a Effect callback
    useEffect( () => {
        async function fetchData(){
        var result=await getData(props.id);    
        setData(result);      
        }
        fetchData();
     },[props.id]);
    
    console.log(data);
    return(
        <div>
        <img src={literalRock} alt="" className="literal-rock1"/>
        <img src={literalRock} alt="" className="literal-rock2"/>
        <h3>
            Username: {data.username}
        </h3>
        <h3>
            Age: {data.age}
        </h3>

        <h3> 
            Ethnicity: {data.ethnicity}
        </h3>

        <h3> 
            Height: {data.height}
        </h3>

        <h3> 
            Gender: {data.gender}
        </h3>

        <h3> 
            Favorite Workout: {data.favWorkout}
        </h3>
        </div>);   
}
