class School {
    constructor(name, level, numberOfStudents) {
      this._name = name
      this._level = level
      this._numberOfStudents = numberOfStudents
    }
    
    get name() {
      return this._name
    }
    
    get level() {
      return this._level
    }
    
    get numberOfStudents() {
      return this._numberOfStudents
    }
    
    set numberOfStudents(value) {
      if(value.isNaN()) {
        console.log('Invalid input: numberOfStudents must be set to a Number')
      } else {
        this._numberOfStudents = value
      }
    }
    
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students  
      at the ${this.level} school level`)
    }
    
    static pickSubtituteTeacher(subtituteTeachers) {
      const randInt = Math.floor(Math.random() * subtituteTeachers.length)
      return subtituteTeachers[randInt]
    }
   }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents)
      this._pickupPolicy = pickupPolicy
    }
    
    get pickupPolicy() {
      return this._pickupPolicy
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams
    }
    
    get sportTeams() {
      return this._sportsTeams
    }
  }
  
  const lorraineHansburry = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansburry.quickFacts()
  
  const sub = School.pickSubtituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terrry', 'Manu Ginobbli'])
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'BasketBall', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportTeams)