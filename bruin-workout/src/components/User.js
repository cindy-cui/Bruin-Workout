class User{
    constructor(){
        this.username="";
        this.age = -1;
        this.height = -1;
        this.ethnicity = "";
        this.gender = "";
        this.favWorkout = "";
    }
    setUsername(username){this.username=username;}
    setName(name){this.name=name;};
    setAge(age){this.age=age;}
    setEthnicity(ethnicity){this.ethnicity=ethnicity;}
    setHeight(height){this.height=height;}
    setGender(gender){this.gender=gender;}
    getUsername(){return this.username;}
    getName(){return this.name;};
    getAge(){return this.age;}
    getEthnicity(){return this.ethnicity;}
    getHeight(){return this.height;}
    getGender(){return this.gender;}
}
export default User;
