const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

let theBoys = [];
let theGirls = [];
function divideSex(){
    theBoys.push(students[0], students[1], students[4]);
    theGirls.push(students[2], students[3],students[5]);     
    return;
}

divideSex();

let couple = [];

function groups() {
    for (let i = 0; i < theBoys.length; i++) {
        couple.push([theBoys[i] + ' i ' + theGirls[i]]);
    }
    return;
}

groups();
console.log(couple);

let themesSex = [];

function getThemes(){
    for(let i = 0; i < couple.length; i++) {
        themesSex.push([couple[i], themes[i]]);
    }
    return;
}

getThemes();
console.log(themesSex);

let studentsMarks = [];

function journal(){
    for(let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], marks[i]]);
    }
    return;
}

journal();
console.log(studentsMarks);

let resultThemes = [];

function getResultThemes(){
    for(let i = 0; i < themesSex.length; i++){
        resultThemes.push([themesSex[i], Math.floor(Math.random() * (6 - 1) + 1)]);
    }
    return;
}

getResultThemes();
console.log(resultThemes);