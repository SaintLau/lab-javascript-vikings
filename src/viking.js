// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
         return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
 }
 

// Viking  
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    } 
    receiveDamage(damage){
        super.receiveDamage(damage)
            if(this.health <= 0){ 
                return `${this.name} has died in act of combat`;
            }else{
                return `${this.name} has received ${damage} points of damage`;
             }
        }
    battleCry(){
        return 'Odin Owns You All!';
    }    
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health <= 0){ 
            return `A Saxon has died in combat`;
        }else{
            return `A Saxon has received ${damage} points of damage`;
         }
    }
        
}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let someSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let someViking =this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        someSaxon.receiveDamage(someViking.attack());  //If viking attacks, saxon gets damage
        if(someSaxon.health <= 0){
            this.saxonArmy = [];
            return `A Saxon has died in combat`;
        }
        return `${someViking.name} has received ${someSaxon.strength} points of damage`;
    }
    saxonAttack(){
        let someSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let someViking =this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        someViking.receiveDamage(someSaxon.attack());
            if(someViking.health <= 0){
                this.vikingArmy = [];
                return `A Viking has died in act of combat`;
        }
        return `${someViking.name} has received ${someSaxon.strength} points of damage`;
                //`${someSaxon} has received ${someViking.strength} points of damage`;

    }
    showStatus(){
            if(this.saxonArmy === undefined || this.saxonArmy.length === 0) { //saxonArmy array empty or not 
                return `Vikings have won the war of the century!`;
                //else if used here to be able to write the conditional statement
            } else if (this.saxonArmy.length > 0 && this.vikingArmy.length != 0) { //saxons still alive and vikings also alive 
                return `Vikings and Saxons are still in the thick of battle.`;
            }
            return `Saxons have fought for their lives and survived another day...`;

    }
}

