const fifaData = require ('./fifa.js');
/*console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final X
(b) Away Team name for 2014 world cup final X
(c) Home Team goals for 2014 world cup final X
(d) Away Team goals for 2014 world cup final X
(e) Winner of 2014 world cup final */

let filterHomeTeam = fifaData.filter((names) => {
    return names.Year===2014 && names.Stage==="Final";
});
console.log (filterHomeTeam[0]['Home Team Name']);

let filterAwayTeam = fifaData.filter((names) => {
    return names.Year===2014 && names.Stage==="Final";
});
console.log (filterAwayTeam[0]['Away Team Name']);

let filterHomeTeamGoals = fifaData.filter((goals) => {
    return goals.Year ===2014 && goals.Stage==="Final";
});
console.log (filterHomeTeamGoals[0]['Home Team Goals']);

let filterAwayTeamGoals = fifaData.filter((goals) => {
    return goals.Year ===2014 && goals.Stage==="Final";
});
console.log (filterHomeTeamGoals[0]['Away Team Goals']);

let filterWinners = fifaData.filter((winner) => {
    return winner.Year ===2014 && winner.Stage==="Final";
});
console.log (filterWinners[0]['Win conditions']);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals (data) {
    return data.filter((match) => match.Stage === "Final");
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears (cb) {
    return cb(fifaData).map((match) => match.Year);
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {

    return cb(fifaData).map((match) => {
        if(match['Home Team Goals'] > match['Away Team Goals']) {
            return match ['Home Team Name'];
        } else {
            return match ['Away Team Name'];
        }
    });
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
function getWinnersByYear(cb1, cb2) {
    const years = cb2(getFinals);
    return cb1(getFinals).map((teamName, index) => `In ${years[index]}, ${teamName} won the world cup!`);
};

console.log(getWinnersByYear(getWinners,getYears));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    /* code here */

};

getCountryWins();

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
