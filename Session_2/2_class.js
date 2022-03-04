// Create a LOL character

// Speed
// HP 
// Armor
// Skill
// Skin

// move
// Bring master class
// attack

class LOLCharacter {
    name = ""
    speed = "350";
    HP = "400"
    MP = "400"
    skill = "4"
    skin;
    armor

    constructor(name, speed, HP, MP, skill, skin, armor) {
        this.name = name
        this.speed = speed
        this.HP = HP
        this.MP = MP
        this.skill = skill
        this.skin = skin
        this.armor = armor
    }

    // Method
    move() {
        console.log(this.name + "Move");
    }

    bringMasterClass() {
        console.log("Bring master class");
    }

    attack() {
        console.log("Attack");
    }
}

const yasuo = new LOLCharacter("yasuo", 500, 600, 0, 4, 8, 60)
yasuo.move()
const darius = new LOLCharacter("darius", 500, 600, 0, 4, 8, 60)
darius.move()

class Person {
    name = "Adam"
    age = 1

    constructor() {

    }

    move() {
        console.log("Move");
    }
}

const person = new Person()
person.move()
