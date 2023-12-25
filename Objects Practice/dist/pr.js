"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function studentInfo(name, age) {
    console.log(`Student Name is ${name} and Student Age is ${age} `);
}
studentInfo("Hamid", 22);
let studentinfo = {
    name: "Hamid",
    age: 22,
    addmission: true,
};
console.log(`Student Name is ${studentinfo.name} Student Age is ${studentinfo.age} And Admission is ${studentinfo.addmission}`);
let worldCupSemiFinalTeams = {
    team1: "Australia",
    team2: "England",
    team3: "NewZealand",
    favTeam: {
        favteam: "Pakistan"
    },
    totalTeams: 4
};
console.log(`Team1 is ${worldCupSemiFinalTeams.team1} Team2 is ${worldCupSemiFinalTeams.team2} Team3 is ${worldCupSemiFinalTeams.team3} My Team is ${worldCupSemiFinalTeams.favTeam.favteam} And Total Teams is ${worldCupSemiFinalTeams.totalTeams} `);
