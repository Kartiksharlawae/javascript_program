// find the largest number of three numbers
function findlargestnumber( num1, num2, num3 )
{
    if (num1>=num2 || num1>=num3)
    {
        return num1;
    } else if (num2>=num1 && num2>=num3)
    {
        return num2;
    } else  
    {
        return num3;
    }
}

var result = findlargestnumber(20, 30 ,30);

console.log(result)


/**
 * Num1 = 40
 * Num2 = 20
 * Num3 = 60
 * 
 * 
 * if(Num1 >= Num2 && Num1 >= Num3 ) ==> true && false ==>
 * 
 * logical operation
 * 
 * && - and
 * 
 * true && true = true
 * true && false = false
 * false && true = false
 * false && false = false
 * 
 * || - or
 * 
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 * 
 */