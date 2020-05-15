var tigger = {
    character: "Tigger",
    greet: function(){
        console.log("Tigger says, 'The wonderful thing about Tiggers is Tiggers are wonderful things!'");
    }
};
var pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Winnie the Pooh says, 'Come on in for some honnnay, suga!!'")
    }
};
var piglet = {
    character: "Piglet",
    greet: function(){
        console.log("Piget says, 'I'm just a wittle piggy... I don't have no money :(.'")
    }
};
var bees = { 
    character: "Bees",
    greet: function(){
        console.log("Bees says, 'Hello old friend... don't piss me off again or I swear to GOD I will not hesitate to use my stinger and take both of us out alive.'")
    }
};
var robin = { 
    character: "Christopher Robin",
    greet: function(){
        console.log("Christopher Robin opens up the door and says, 'IM THE REAL CHRISTOPHER ROBIN, BITCH.' then slams the door shut.")
    }
};
var owl = { 
    character: "Owl",
    greet: function(){
        console.log("Owl says, 'Hooooooo... WHO!?!?'")
    }
};
var rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("Rabbit says, 'LETS GO IMMA BEAT YA IN A RACE!!!' and takes off hopping.")
    }
};
var gopher = { 
    character: "Gopher",
    greet: function(){
        console.log("Gopher says, 'Why hello, welcome to my humble abode.' and hands you a slice of cheese and a cracker.")
    }
};
var kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("Kanga says, 'Oh... Rabit tried to race you too, did he?? Tell that fool next time you see him that i'll out-hop that rat any day.'")
    }
};
var eeyore = { 
    character: "Eeyore",
    greet: function(){
        console.log("Eeyore says, 'Welcome to the black parade.'")
    }
};
var heffa = { 
    character: "Heffalumps",
    greet: function(){
        console.log("Heffalumps says, 'MOOOOOOVE OVER!!!!'")
    }
};

tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;

piglet.east = pooh;
piglet.north = owl;

bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
robin.north = kanga;

owl.south = piglet;
owl.east = robin;

rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffa;

heffa.west = eeyore;

//________________________________________________
            // ADDED 

var player = {
    location: tigger,
    //Add an attribute to the player to track whether the player has honey or not
    honey: false
}


function move(dir){
    if(dir == "north" || dir == "North"){
        if(player.location.north == null){
            console.log("You attempt to head North, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.north;
            console.log("You head North and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You attempt to head South, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.south;
            console.log("You head South and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You attempt to head East, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.east;
            console.log("You head East and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You attempt to head West, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.west;
            console.log("You head West and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
}

function mission(){
    charList = [tigger, pooh, piglet, robin, owl, rabbit, gopher, kanga, eeyore, heffa]
    var rand = Math.floor(Math.random()*Math.floor(charList.length));
    recipient = charList[rand];
    recipient.objective = true;
    console.log("Well hello there adventurer... " + recipient.character + " is in need of some honey! Please lend a helping hand and get some honey from the bees and take it over.");
}

function pickUp(){
    if(player.location == bees){
        player.honey = true;
        console.log("You collected some fresh honey from the bees!")
    }
    else{
        console.log("There is no honey at this location!")
    }
}

function drop(){
    if(player.location.objective == true){
        console.log("Congratulations!!! " + player.location.character + " is thrilled to have received some fresh honey!")
    }
    else{
        console.log("You can't drop the honey here, nobody requested it!")
    }
}

mission();
move("north");
move("east");
move("north");
move("west");
drop();