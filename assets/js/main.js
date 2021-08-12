console.log("----Lev1_3----")

let i = 1;  
console.log(typeof(i))   

let lastName = "Johnson";
console.log(typeof(lastName)) 

let j = "2";
console.log(typeof(j)) 

let status = true;
console.log(typeof(status)) 

let hello = "hello";
console.log(typeof(hello)) 

let helloWorld = "hello";
console.log(typeof(helloWorld)) 

console.log("----Lev1_4----")
// "John"                
// 3.14                   
// NaN                    
// false                  
// [1,2,3,4]              
// {name:'John', age:34}  
// new Date()             
// function () {}         
// null
// ""
// 3+2==5 
// 3 + "3"

console.log(typeof("John")) 
console.log(typeof(3.14))
console.log(typeof(NaN))
console.log(typeof(false))
console.log(typeof([1,2,3,4]))
console.log(typeof({name:'John', age:34} ))
console.log(typeof(function () {} ))
console.log(typeof(null))
console.log(typeof(""))
console.log(typeof(3+2==5))
console.log(typeof(3 + "3"))

console.log("----Lev1_8-----")
// Deklariere die Variablen x = 20, y = 30.
// Addiere x und y und gib das Ergebnis in der Konsole aus.
// Subtrahiere y von x und zeige das Ergebnis in der Konsole. Dann subtrahiere x von y und gib das Ergebnis in der Konsole aus.
// Multipliziere x und y und gib das Ergebnis der Konsole aus.
// Teile x durch y und gib das Ergebnis mit der Konsole aus.
// Deklariere eine weitere Variable z mit dem Wert 10. Multipliziere x und y. Teile dann das Ergebnis durch z. Speichere das Ergebnis in einer neuen Variablen namens resultOne.
console.log("---Part 1---")
let x = 20
let y = 30
console.log(x + y)
console.log(x - y)
console.log(y - x)
console.log(x * y)
console.log(x / y)
let z = 10
console.log(x * y / z)
let resultOne = x * y / z
console.log(resultOne)

console.log("---Part 2---")

// Deklariere zwei Variablen a mit dem Wert 15 und b mit dem Wert 9. Zeige den Rest an, wenn a durch b geteilt wird. Nutze Remainder(%).
// Deklariere eine weitere Variable c mit dem Wert 20. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.
// Inkrementiere a. Gib das Ergebnis in der Konsole aus.
// Dekrementiert b. Gib das Ergebnis in der Konsole aus.
// Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
// Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus. 
// Nutze Remainder(%).