function MathError(expr){
    if (expr>100000000 || expr <-10000000000){
        return true
    }
    else{
        return false
    }
}
function Eval(expr){
    if (expr != ""){
        try{
            var a = eval(expr)
            var b = MathError(a)
            if (b == true){
                return "MathError"
            }
            else{
                return a.toFixed(8) // Rounds off the number to 8 decimal places
            }
        }
        catch(err){
            console.log()
            return "Error in Input"
        }
    }
    else{
        console.log()
    }
}

function Del1Char(expr){
    var a = expr.toString().slice(0,-1)
    return a
}