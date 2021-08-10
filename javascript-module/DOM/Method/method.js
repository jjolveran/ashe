// Method is a function associated with and object

var bellBoy = {
    name:"John",
    yearOfExperience : 3,
    languages:["English", "Spanish"],
    moveSuitCase: function() {
        alert("May I taken yourself suitcase");
        pickUpsuitcase();
        moveSuitCase();
    }
}


//Call Method
bellBoy.moveSuitCase();


//Constructor Function

function BellBoyFactory (name, yearsOfExperience, languages) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
    this.moveSuitCase = function() {
        alert("May I taken yourself suitcase");
        pickUpsuitcase();
        moveSuitCase();
    }
}

var bellBoy1 = BellBoyFactory("John", 5, ["English", "Spanish"]);

