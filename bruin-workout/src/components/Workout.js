class Workout{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    get theName(){
        return this.name;
    }
    get theType(){
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

export const Workouts = [benchPress, chestFly, dips, tricepExtension, skullCrusher, tricepDips, 
tricepPullDown, rows, latPulldowns, bentOverRow, pullUps, twentyOnes, hammerCurls, inclineDumbbellCurl, shrugs, shoulderPress,
squat, deadlift, splitSquat, legCurlMachine, legPressMachine, gobletSquat, running, basketball];
/*
let curWorkout = bentOverRow; //modify this to be whatever workout is currently selected
<script type="text/javascript"> 
document.onclick=check; 
function check(e){ 
var target = (e && e.target) || (event && event.srcElement); 
var obj = document.getElementById('div-id'); 
if(target!=obj){obj.style.display='none'} 

</script>
for(let i = 0; i < Workouts.size(); i++){
    if(curWorkout.type() == Workouts[i].type()){
        document.write(curWorkout);//let curWorkout pop up as a suggestion
    }
}
var a = document.createElement('a');
a.setAttribute('href',desiredLink);
a.innerHTML = desiredText;
// apend the anchor to the body
// of course you can append it almost to any other dom element
document.getElementsByTagName('body')[0].appendChild(a);
//TODO: set hyperlinks for all the workouts
 <html>
  <head></head>
  <body>
    <script>
      var a = document.createElement('a');
      var linkText = document.createTextNode("Bench Press Youtube Video");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = "https://www.youtube.com/watch?v=SCVCLChPQFY&ab_channel=CrossFit%C2%AE";
      document.body.appendChild(a);
    
      var b = document.createElement('b');
      var linkText2 = document.createTextNode("Chest Fly Youtube Video");
      b.appendChild(linkText2);
      b.title = "my title text";
      b.href = "https://www.youtube.com/watch?v=Z57CtFmRMxA&ab_channel=LIVESTRONG.COM";
      document.body.appendChild(b);
      
      var c = document.createElement('c');
      var linkText3 = document.createTextNode("Dips Youtube Video");
      c.appendChild(linkText3);
      c.title = "my title text";
      c.href = "https://www.youtube.com/watch?v=yN6Q1UI_xkE&ab_channel=JeffNippard";
      document.body.appendChild(c);
      
      var d = document.createElement('c');
      var linkText4 = document.createTextNode("Dips Youtube Video");
      d.appendChild(linkText4);
      d.title = "my title text";
      d.href = "https://www.youtube.com/watch?v=X-iV-cG8cYs&ab_channel=ColossusFitness";
      document.body.appendChild(d);
      
      var e = document.createElement('c');
      var linkText5 = document.createTextNode("Skullcrusher Youtube Video");
      e.appendChild(linkText5);
      e.title = "my title text";
      e.href = "https://www.youtube.com/watch?v=d_KZxkY_0cM&ab_channel=ScottHermanFitness";
      document.body.appendChild(e);
    </script>
  </body>
</html>
*/
