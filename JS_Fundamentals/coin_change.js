

function coinChange(inputCents){

    var result = {};
    var remainder = inputCents;
    while( remainder != 0){
        if ( remainder >= 100){
        result['dollars'] = Math.floor( remainder/100 );
        remainder = remainder%100;
        }
        else if (remainder >=25){
            result['quaters'] = Math.floor(remainder/25);
            remainder = remainder%25;
        }
        else if (remainder>=10){
            result['dimes'] = Math.floor(remainder/10);
            remainder = remainder%10;
        }
        else if(remainder >=5){
            result['nickles'] = Math.floor(remainder/5);
            remainder = remainder%5;
        }
        else{
            result['pennies'] = remainder;
            remainder =0;
        }
    }
    return result;
}
console.log(coinChange(312));
console.log(coinChange(1032));
console.log(coinChange(78));