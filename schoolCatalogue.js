class School {
    constructor(name, level, numOfStudents){
        this._name = name;
        this._level = level;
        this._numOfStudents = numOfStudents;      
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numOfStudents(){
        return this._numOfStudents;
    }
    set numOfStudents(newNum){
        if (typeof newNum === 'Number'){
            this._numOfStudents = newNum;
        } else {
            console.log('Invalid input: numOfStudents must be set to a Number');
        }
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numOfStudents} at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher (substituteTeachers) {
        let randomNum = Math.floor(Math.random()* substituteTeachers.lengh);
        return substituteTeachers[randomNum];
    }
}

class PrimarySchool extends School {
    constructor(name, numOfStudents, pickupPolicy){
        super(name, 'primary', numOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numOfStudents, sportsTeams){
        super(name, 'high', numOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);