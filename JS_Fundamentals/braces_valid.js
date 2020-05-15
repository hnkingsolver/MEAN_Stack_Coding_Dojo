// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

// HINT: Keep in mind that you may use arrays and objects to keep your information organized!

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function validBraces(braces){
    let tracer = []
    for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        tracer.push(braces[i])
        } else{
        if(tracer.length === 0) return false
        let lastValue = tracer[tracer.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
        {
            tracer.pop()
        } else {
            break;
        }
        }
    }
    return tracer.length === 0
}

  console.log(validBraces( "()" )) // true
  console.log(validBraces( "[]" )) // true
  console.log(validBraces( "{}" )) // true
  console.log(validBraces( "(){}[]" )) // true
  console.log(validBraces( "([{}])" )) // true
  console.log(validBraces( "(}" )) // false
  console.log(validBraces( "[(])" )) // false