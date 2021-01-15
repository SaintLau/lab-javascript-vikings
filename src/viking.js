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
       super(name, health);
        this.strength = strength;
    } 
}

    


/*

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        
    }
    receiveDamage { //IS diferrent from Soldier but should extend Soldier
    }
    attack() {      //SHOULD be inherited from Soldier

    }
}


// War
class War {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
}
*/
