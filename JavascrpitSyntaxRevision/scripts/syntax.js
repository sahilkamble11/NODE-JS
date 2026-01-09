function game(){
    
var heroName = "Sahil";
let heroLevel = 5;
const heroHealth = 100;
console.log(heroName, heroLevel, heroHealth);

let mana=100;
const MAX_HEALTH=100;

//loop for reducing mana's health by 10 after he gets 5 hits time he gets hit
for(i=1;i<=5;i++){
    mana -= 10;
    console.log("Manas Health = "+mana);
}
//const value cannot be changed further..
//MAX_HEALTH=80;
}
//game();

function checkType(){

    let level = 10;           // Number
    let spell = "Fireball";    // String
    let isAlive = true;       // Boolean
    let inventory = ["potion","scroll"]; // Array
    let hero = { name: "Aria", class: "Mage" }; // Object

    console.log(typeof(level));
    console.log(typeof(spell));
    console.log(typeof(isAlive));
    console.log(typeof(inventory));
    console.log(typeof(hero));
}
//checkType();
var winner;
function fight(){
    var hero={ name: "Super-Man", health:"100", superPower: "Flying",isAlive:true, attack: {
        attack1:{weapon:"SuperPunch", damage: 30},
        attack2:{weapon:"SuperBeam", damage: 40},
        attack3:{weapon:"SuperLaser", damage: 40}   
    }};

    let villain={ name: "Vecna", health:"100", superPower: "Mind-Control", isAlive:true, attack: {
        attack1:{weapon:"Telepathy", damage: 30},
        attack2:{weapon:"Psychological Manipulation", damage: 40},
        attack3:{weapon:"Hive Mind Control", damage: 40}   
    }};

    let totalDamagetoVillain=hero.attack.attack1.damage+hero.attack.attack2.damage+hero.attack.attack3.damage;
    console.log("Total Damage done by Hero to Villain : ", totalDamagetoVillain);

    let totalDamagetoHero=villain.attack.attack1.damage+villain.attack.attack2.damage;
    console.log("Total Damage done by Villain to Hero : ", totalDamagetoHero);

    var winner;
    if(totalDamagetoHero>totalDamagetoVillain && villain.isAlive){
        winner="Villain Won the Fight and he's still Alive..!!";
    }
    if(totalDamagetoVillain>totalDamagetoHero && hero.isAlive)
    {
       winner="Hero won the Fight and he's still Alive..!!";
    }
    console.log(winner); 
}
 fight();
 