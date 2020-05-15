//ways to declare a variable
// var number = 0
// var name = "Bob"
// var arr = []
// var obj = {}//key:value} //anything thats stored with key valued pairs is an object

//we can take a sring and add a number to instanceof, it will cast that number to a string and add it.. 

// var whatis = number + name
// name += 'the great'
// console.log(whatis)

var bob = {
    'name':'bob',
    'age': 45,
    'saying': saying('bob'),
    'favNums': [5,13,78]
}

var han = {
    'name':'hannah',
    'age': 23,
    'saying': saying('hannah'),
    'favNums': [420,69]
}
var nick = {
    'name':'nick',
    'age': 27,
    'saying': saying('nick'),
    'favNums': [5000,130,7778]
}

var students = [bob,han, nick]

function saying(name){
    return ("i am "+ name)
}

// console.log(students[0])
// console.log(students[1])
// console.log(students.name)
for (var i=0; i < students.length; i++){
    console.log(students[i]['name'])
    console.log(students[i].saying)
    console.log(students[i].favNums)
}

//so you cant store objects inside of objects, array inside of objects, strings inside of objects, functions
//inside of objects, and maybe more... idk