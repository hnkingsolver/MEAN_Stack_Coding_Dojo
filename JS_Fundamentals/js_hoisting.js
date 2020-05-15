//1) output: undefined... if you put 'console.log(hello);' after 'var hello = 'world';, it will output 'world'

console.log(hello);                                   
var hello = 'world';
//_____________________________________________________________

//2) output: magnet...

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//_____________________________________________________________

//3) output: super cool...

var hannah = 'super cool';
function print(){
	hannah = 'only okay';
	console.log(hannah);
}
console.log(hannah);
//_____________________________________________________________

//4) output: chicken AND then half-chicken

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//_____________________________________________________________

//5) output: error... TypeError: mean is not a function

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//_____________________________________________________________

//6) output: undefined, rock, r&b, disco

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//_____________________________________________________________

//7) output: san jose, seattle, burbank, san jose

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//_____________________________________________________________

//8) output: { name: 'Chicago', students: 65, hiring: true }, TypeError: Assignment to constant variable. dojo = "closed for now";

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
