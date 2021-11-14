import {getDoc,doc} from "firebase/firestore";
import db from "./Database";

export async function getData(userID,options=""){
    let userData = {
        "user":null,
        "username":"",
        "age":"",
        "height":"",
        "ethnicity":"",
        "gender":"",
        "favWorkout":"",
        "workouts":{
            "monday":{name:"", type:""},
            "tuesday":{name:"", type:""},
            "wednesday":{name:"", type:""},
            "thursday":{name:"", type:""},
            "friday":{name:"", type:""},
            "saturday":{name:"", type:""},
            "sunday":{name:"", type:""},
          }, 
    };    
    try{
        const docRef = doc(db, "users", userID);
        const user = await getDoc(docRef);
        if(user.exists()){
            if(options==="username"){
                return user.get("username");
            }
            return{
            username:user.get("username"),
            age:user.get("age"),
            height:user.get("height"),
            ethnicity:user.get("ethnicity"),
            gender:user.get("gender"),
            favWorkout:user.get("age"),
            workouts:user.get("workouts"),
            };
        }
    }
    catch{
        return null;
    }     
  };