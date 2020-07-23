alert("Here we begin with ch# 1-20");
alert("Error! Please enter a valid password");
alert("Welcome to JS land...\n Happy Coding!");
alert("Welcome to JS land...");

 alert("Happy Coding! \n Prevent this page from creating additional dialog")

  var c = "Hello... I can run JS through my web browser's console.";
  alert(c);
  console.log(c);


var username = "Muhammad Mohsin ";
var myName = "Sheikh";
var fullName = username + myName;
alert(fullName);

var message = "Hello World";
alert(message);

var Sname = "Muhammad Mohsin"
var age = "20 Years old"
var edu = "Certified Mobile Application Developtment"
alert("student's name is " + Sname);
alert("student's age is " + age);
alert("student's Education is " + edu);


  var pizza = "pizza\n pizz\n piz\n pi\n p";
  alert(pizza)
  
 var Email = "mohsinsheikh0700@gmail.com";
 var msg = "My email address is ";
 alert(msg + Email);

var book = "A smarter way to learn JavaScript."
var xtra = "I'm trying to learn from the Book "
var sum = xtra + book;
alert(sum);


var ht = "Yah! I can write HTML content through javascript"
var vt = ht
document.write(vt);


  var deg = " “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”  "
  alert(deg);

var age = ("20 years old.")
alert("I am " + age)

var birthYear = "2000"
document.write("my birth year is " + birthYear + " <br> Data type of my declared variable is number")


var a = prompt("Welcome to XYZ store!", "Enter your name" + "");
var b = prompt("What type of product do you want", "Enter product name");
var c = prompt("how much quantity of product do you want", "Enter product quantity");
var d = a + " ordered " + c + " " + b + " on XYZ clothing store."
document.write(d);
console.log(d);
break

var a = "first"
    b = "second"
    c = "third"

var x = "<h1>Rules for naming JS variables</h1>"
document.write(x)

var variable1 = "a"
    variable2 = "b"
    variable3 = "c"
    variable4 = "d"
    variable5 = "e"
  
document.write("variable name can only contain " + variable1 + "," +  variable2 + "," + variable3 + " and " + variable4 + "." + "For example: $my_1stVariable" + "<br>")    
var $ = "numbers"
    $2 = "signs"
    $3 = "&"
    $4 = "%"
    $5 = "{"
  
document.write("Variables must begin with a letter, $ or _. " + "for example: $name, _name or name" + "<br>") 
document.write("VAriable name case are sensitive." + "<br>");
document.write("Variable names should not be JS keywords.")   
 

var c = +prompt("Addition +","enter value");
var d = +prompt("enter value");
var e = c+d;
document.write("The sum of " + c + " and " + d + " is " + e  + "<br")


var c = +prompt("Subtraction -","enter value");
var d = +prompt("enter value");
var e = c-d;
document.write("The product of " + c + " minus " + d + " is " + e )


var c = +prompt("Multiplication X", "Enter value");
var d = +prompt("enter value");
var e = c*d;
document.write("The product of " + c + " X " + d + " is " + e )


var c = +prompt("Modulus %", "Enter marks obtained");
var d = +prompt("Enter total marks");
var r = 100
var e = c*r/d;
document.write("The modulus of " + c + " and " + d + " is " + e )


var mth = "";
document.write("Value after variable declaration is undefined <br>")
var mth = "5"
document.write("initial value: " + mth + "<br>");
var mth2 = ++mth;
console.log("Value after increment " + mth2 )
document.write("value after increment is: " + mth2 + "<br>")
var mth3 = 7+mth2

document.write("Value after additon of 7 is: " + mth3 + "<br>");
console.log("Value after additon of 7 is: " + mth3);
var mth4 = --mth3
document.write("Value after decrement is: " + mth4 + "<br>")
var mth5 = mth4/3
document.write("Remainder 12 / 3 is: 0")


var ticket = 600
var input = prompt("How many tickets do want?","Enter quantity")
var proc = ticket*input;
document.write("Total cost to buy " + input + " tickets to a movie is " + proc + "Pkr");


var num = prompt("enter value")
for(var i=num; i<=10; ++i){
  var out = document.write(num)
  out += (num*i) + "<br>"
}


var celsius = prompt("Enter Celsius temp to convert into Fahrenheit");
var Fahrenheit = prompt("Enter Fahrenheit temp to convert into Celsius");
var C = celsius;
var F = Fahrenheit;
var Cel = (C * 5/9)+32;
var far = (F-32)* 5/9;

document.write(celsius + " celsius is equal to " + Cel + " F" + "<br>");
document.write(Fahrenheit + " Fahrenheit is equal to " + far + "C" + "<br>")



var item1 = 800;
var item2 = 470;
var ship = 300;
var a = prompt("How many shirts do you want?");
var b = prompt("How many trousers do you want?");
var count1 = item1*a;
var count2 = item2*b;
var heading = "<h1>SHOPPING CART</h1>"
document.write(heading);
document.write("Price of a Shirt is: 800 " + "<br>");
document.write("Quantity of shirts is: " + a + "<br>");
document.write("Price of a Trouser is: 470 " + "<br>");
document.write("Quantity of Trousers is: " + b + "<br>");
document.write("Shipping charges: 300" + "<br>");
var final = (item1*a) + (item2*b) + ship;
document.write("Total cost of your order is " + final);




var per = +prompt("Enter marks obtained", "Enter marks obtained");
var per2 = +prompt("Enter total marks");
var sign = 100
var e = per*sign/per2;
document.write("Total marks: " + per2 + "<br>");
document.write("Marks obtained: " + per + "<br>");
document.write("Pertcentage: " + e + "% <br>" )


var dollar = 160;
var riyal = 35;
var g = prompt("How many dollars do u have?");
var t = dollar*g
document.write("You have an amount of: " + t + " Pkr <br>" );
var ri = prompt("How many saudi Riyals do yaa have?");
var ca = riyal*ri;
document.write("You have an amount of: " + ca + " Pkr <br>");
var tot = t+ca;
document.write("You have a total amount of: " + tot + " Pkr <br>")

var arith = +prompt("Enter some value for Arithmetic calculations","WE will add 5*10/2");
var arcal = (arith+5)*10/2
document.write("Your Arithmetical value is " + arcal + "<br>")
   


var bir = +prompt("Enter your Birth year ", "We will calculate your age");
var curr = 2020;
var cala = curr-bir
document.write("Current year: 2020 <br>" );
document.write("Your Birth year: " +  bir + "<br>");
document.write("Your Age is= " + cala + "<br>");

var rad = +prompt("Enter a Circle's radius", "we'll calculate its circumference")
var calc = 2*3.142*rad
document.write("Circumference of circle is: " + calc + "<br>")
var calc2 = 3.142*rad*2
document.write("Area is: " + calc2 + "<br>")

var fvsn = prompt("enter your favourite snack")
var currage = prompt("Enter your current age!")
var maxage = prompt("Enter your estimated max age")
var casu = prompt("Enter Your snacks intake per day")

var cbm = casu*365
document.write("Your favortite snack is: " + fvsn + "<br>");
document.write("Your current age is: " + currage + "<br>");
document.write("Your estimated max age is: " + maxage + "<br>");
document.write("Your average intake per day is: " + casu)
document.write("You will need " + cbm + " " + fvsn + " per year to ripe up your age till " + maxage + "<br>"); 

var first = prompt("enter a value for increment and decrement");
var statement = "<h1>Result</h1> <br> Value of a is " + first
document.write(statement + "<br>")
var a = first++
document.write("the value of a++ is " + a + "<br>")
var a = first
document.write("Now the value after a++ is " + a + "<br>")
var a = ++first
document.write("Value after ++a is " + a + "<br>")
var a = --first
document.write("Value after --a is " + a + "<br>")
var a = first--
document.write("Value after a-- is " + a + "<br>")
var a = first
document.write("now the value of a is  " + a + "<br>")


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(a,b)
document.write(result)




for (let mth = 0; mth <=5; mth++) {
     console.log(mth)
     
  
}
document.write("initial value: 5");
var mth2 = mth++
 document.write(mth2)




var firstname = prompt("Enter your First name ");
var lastname = prompt("Enter your last name");
var fullname = firstname   +   lastname;
alert("your full name is  "  + fullname);
console.log("your full name is  "  + fullname);
document.write("your full name is  "  + fullname + "<br>");



var phone = prompt("what is your favourite phone?" ,  "My favourite phone is");
alert("My favourite phone is: " + phone);
document.write("My favourite phone is: " + phone);






var firstname = ("Pakistani");
var secname = firstname.indexOf("n");
document.write(secname + "<br>");
alert("The index of letter 'n' in Pakistani is " + secname);


var secondname = ("Hello World");
var triname = secondname.lastIndexOf("l", 10);
document.write(triname);
alert( "The last index of l in Hello World is " + triname );

var a = ("Pakistani");
var b = a.charAt(3);
alert("Charcter at 3rd index of word 'Pakistani' is: " + b);


var fn = "Muhammad "
var ln = "Mohsin"
var cn = (fn.concat(ln));
alert(cn);
console.log(cn);


var text = 'I live in the beautiful city of Hyderabad'
var newText = text.replace("Hyder", "Islam");
alert(newText);
console.log(newText);



var message = 'Ali and Sami are best friends they play cricket and football together.';
var reptext = message.replace(/and/g , '&'); 
alert(reptext);
console.log(reptext);



var value = "472"
var num = Number(value);
alert("value:  " + value + "  Type: " + " String " +  " Value:  "  +  num + 
"  Type: " + " Number " );
console.log("value:  " + value + "  Type: " + " String " +  " Value:  "  +  num + 
"  Type: " + " Number ");

var ui = prompt("Write Something" , "write in small letters");
var ux = ui.toUpperCase();
alert(ux);
console.log(ux);






var str = prompt("Enter your value, We'll convert it to titlecase" , "in small letters");
var res = str[0].toUpperCase() + str.slice(1);
alert(res);
console.log("TitleCase: " + res);



var a = "35.36"
var b = a.replace("." , "");
alert( "string converted to number " + b);
console.log("string converted to number " + b);


var na = prompt("Enter Username");
function spchar(){
    if((na.keycode >=33) && (na.keycode >=44) (na.keycode >=46)
       (na = '@'))  
     alert("Please enter valid username ")
    else(alert("your username is  " + na))

alert("your name is " + na)
}
