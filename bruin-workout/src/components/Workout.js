class Workout{
    constructor(name, type, url){
        this.name = name;
        this.type = type;
        this.url = url;
    }
    get theName(){
        return this.name;
    }
    get theType(){
        return this.type;
    }
    get theUrl(){
        return this.url;
    }
}


let benchPress = new Workout("BenchPress", "chest", "https://www.youtube.com/embed/SCVCLChPQFY");
let chestFly = new Workout("ChestFly", "chest", "https://www.youtube.com/embed/Z57CtFmRMxA");
let dips = new Workout("Dips", "chest", "https://www.youtube.com/embed/yN6Q1UI_xkE");

let tricepExtension = new Workout("TricepExtension", "tricep", "https://www.youtube.com/embed/X-iV-cG8cYs");
let skullCrusher = new Workout("Skullcrusher", "tricep", "https://www.youtube.com/embed/d_KZxkY_0cM");
let tricepDips = new Workout("TricepDips", "tricep", "https://www.youtube.com/embed/35PXVWP1XVs");
let tricepPullDown = new Workout("TricepPullDown", "tricep", "https://www.youtube.com/embed/2-LAMcpzODU");

let rows = new Workout("Rows", "back", "https://www.youtube.com/embed/GZbfZ033f74");
let latPulldowns = new Workout("LatPulldowns", "back", "https://www.youtube.com/embed/0oeIB6wi3es");
let bentOverRow = new Workout("BentOverRow", "back", "https://www.youtube.com/embed/kBWAon7ItDw");
let pullUps = new Workout("PullUps", "back", "https://www.youtube.com/embed/XeErfmGSwfE");

let twentyOnes = new Workout("21s", "bicep", "https://www.youtube.com/embed/qf6KO7qKFRI");
let hammerCurls = new Workout("HammerCurls", "bicep", "https://www.youtube.com/embed/zC3nLlEvin4");
let inclineDumbbellCurl = new Workout("InclineDumbbellCurl", "bicep", "https://www.youtube.com/embed/soxrZlIl35U");

let shrugs = new Workout("Shrugs", "shoulder", "https://www.youtube.com/embed/cJRVVxmytaM");
let shoulderPress = new Workout("ShoulderPress", "shoulder", "https://www.youtube.com/embed/qEwKCR5JCog");

let squat = new Workout("Squat", "legs", "https://www.youtube.com/embed/bEv6CCg2BC8");
let deadlift = new Workout("Deadlift", "legs", "https://www.youtube.com/embed/ytGaGIn3SjE");
let splitSquat = new Workout("SplitSquat", "legs", "https://www.youtube.com/embed/VncTA2oFMuo");
let legCurlMachine = new Workout("LegCurlMachine", "legs", "https://www.youtube.com/embed/ELOCsoDSmrg");
let legPressMachine = new Workout("LegPressMachine", "legs", "https://www.youtube.com/embed/IZxyjW7MPJQ");
let gobletSquat = new Workout("GobletSquat", "legs", "https://www.youtube.com/embed/MeIiIdhvXT4");

let running = new Workout("Running", "cardio", "https://www.youtube.com/embed/_kGESn8ArrU");
let basketball = new Workout("Basketball", "cardio", "https://www.youtube.com/embed/oyjYgmsM00Q");

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
      
      var d = document.createElement('d');
      var linkText4 = document.createTextNode("Dips Youtube Video");
      d.appendChild(linkText4);
      d.title = "my title text";
      d.href = "https://www.youtube.com/watch?v=X-iV-cG8cYs&ab_channel=ColossusFitness";
      document.body.appendChild(d);
      
      var e = document.createElement('e');
      var linkText5 = document.createTextNode("Skullcrusher Youtube Video");
      e.appendChild(linkText5);
      e.title = "my title text";
      e.href = "https://www.youtube.com/watch?v=d_KZxkY_0cM&ab_channel=ScottHermanFitness";
      document.body.appendChild(e);
      
      var f = document.createElement('f');
      var linkText6 = document.createTextNode("Tricep Dips Youtube Video");
      f.appendChild(linkText6);
      f.title = "my title text";
      f.href = "https://www.youtube.com/watch?v=d_KZxkY_0cM&ab_channel=ScottHermanFitness";
      document.body.appendChild(f);
      
      var g = document.createElement('g');
      var linkText6 = document.createTextNode("Tricep Pulldown Youtube Video");
      g.appendChild(linkText6);
      g.title = "my title text";
      g.href = "https://www.youtube.com/watch?v=2-LAMcpzODU&ab_channel=ScottHermanFitness";
      document.body.appendChild(g);
      
      var h = document.createElement('h');
      var linkText7 = document.createTextNode("Rows Youtube Video");
      h.appendChild(linkText7);
      h.title = "my title text";
      h.href = "https://www.youtube.com/watch?v=GZbfZ033f74&ab_channel=ScottHermanFitness";
      document.body.appendChild(h);
    </script>
  </body>
</html>
*/
