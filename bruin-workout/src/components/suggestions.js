class Workout{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    get theName(){
        return this.name;
    }
    get getType(){
        return this.type;
    }
}


let benchPress = new Workout("BenchPress", "chest");
let chestFly = new Workout("ChestFly", "chest");
let dips = new Workout("Dips", "chest");

let tricepExtension = new Workout("TricepExtension", "tricep");
let skullCrusher = new Workout("Skullcrusher", "tricep");
let tricepDips = new Workout("TricepDips", "tricep");
let tricepPullDown = new Workout("TricepPullDown", "tricep");

let rows = new Workout("Rows", "back");
let latPulldowns = new Workout("LatPulldowns", "back");
let bentOverRow = new Workout("BentOverRow", "back");
let pullUps = new Workout("PullUps", "back");

let twentyOnes = new Workout("21s", "bicep");
let hammerCurls = new Workout("HammerCurls", "bicep");
let inclineDumbbellCurl = new Workout("InclineDumbbellCurl", "bicep");

let shrugs = new Workout("Shrugs", "shoulder");
let shoulderPress = new Workout("ShoulderPress", "shoulder");

let squat = new Workout("Squat", "legs");
let deadlift = new Workout("Deadlift", "legs");
let splitSquat = new Workout("SplitSquat", "legs");
let legCurlMachine = new Workout("LegCurlMachine", "legs");
let legPressMachine = new Workout("LegPressMachine", "legs");
let gobletSquat = new Workout("GobletSquat", "legs");

let running = new Workout("Running", "cardio");
let basketball = new Workout("Basketball", "cardio");

const Workouts = [benchPress, chestFly, dips, tricepExtension, skullCrusher, tricepDips, 
tricepPullDown, rows, latPulldowns, bentOverRow, pullUps, twentyOnes, hammerCurls, inclineDumbbellCurl, shrugs, shoulderPress,
squat, deadlift, splitSquat, legCurlMachine, legPressMachine, gobletSquat, running, basketball];

let curWorkout = bentOverRow; //modify this to be whatever workout is currently selected
for(let i = 0; i < Workouts.size(); i++){
    if(curWorkout.type() == Workouts[i].type()){
        //let curWorkout pop up as a suggestion
    }
}
