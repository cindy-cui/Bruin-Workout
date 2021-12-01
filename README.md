# Bruin-Workout

## Members
Cindy Cui, Seonggeun Park, Benson Har, Daniel Shim, Dennis Li

## Usage 

Firstly, the project must be cloned. Run the following command in terminal to clone the project locally: 
```
$ git clone https://github.com/cindy-cui/Bruin-Workout 
```
Next, go into the project directory by running the command, 
```
cd Bruin-Workout/bruin-workout
```

To install Node.js using Homebrew, run the command: 
```
brew install node
```

To install npm to run the project, run the following command on the command line: 
```
npm install -g npm
```
To get the react script working, run the following command on the command line:
```
npm install
```

Next, install the following using npm, 
- react router dom 
  - command: ``` $ npm install react-router-dom@6 ```
- Firebase 
  - command: ``` $ npm install firebase ```
- MUI (react component library) 
  - command: ```npm install @mui/material```


Finally, to run the project on your local host, use the command: 
```
npm start
```

You can access the web app through http://localhost:3000 


## Description


Our project is an implementation of a workout planner that allows users to construct a weekly routine workout schedule to plan their workouts and find exercises to add into their workouts. We used a React frontend, as well as a Node backend that communicates with Google Firebase and Firestore. We implemented the login with Firebase and user data storage with Firestore. 
