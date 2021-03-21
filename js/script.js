//Question 1

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock")
}
else {
    console.log("In stock");
}


//Question 2

var hour = 20;

for (var i = 15; i <= 25; i++) {
	console.log(i);
}
if (hour >= 17 && hour <= 20) {
    console.log ("Equal");
}
else 
    console.log("not equal")

//Question 3

var gameItem1 = {
    title: "Team Fortress",
    raiting: "null",
};

var gameItem2 = {
    titile: "The Witcher",
    raiting: "3.0",
};

var gameItem3 = {
    title: "The Elder Scrolls",
    raiting: "2.9",
};
var gameItem4 = {
    title: "Grand Theft Auto",
    raiting: "4.48",
};
var gameItem5 = {
    title: "Portal 2",
    raiting: "3.5",
};
var games = [gameItem1, gameItem2, gameItem3, gameItem4, gameItem5];

console.log(games);

var gameList = document.querySelector (".games");

for (var i = 0; i <games.length; i++) {
    var item = games[i];

    if (games[i].raiting <= 3.5 ) {
        console.log ("Low Raiting")
    }
    else console.log ("High Raiting");
  
    console.log(item.title);

    console.log(item.raiting);


gameList.innerHTML = gameList.innerHTML + "<li>" + item.title + ":" + item.raiting; + "</li>"; 
}


//Question 4

function whatIDontLike(weather){
    console.log("I don't like "+ weather +"")
}

whatIDontLike("rain")


 
//Question 5

function subtraction(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        return "Invalid argument(s).";
    } else {
        answer = ( Number(num1) - Number(num2) );
        return answer;
    }
  }


//Question 6

document.addEventListener("DOMContentLoaded", function(event) {

    var comment = document.getElementsByClassName("page");

    for (var i in comment) {

    comment[i].onclick = function() {
    document.title = "Updated title";
    document.body.style.backgroundColor = "yellow";

    var h1s = document.getElementsByTagName("h1");
    for (var i = 0; i < h1s.length; i++) {

        h1s[i].style.color = "green";
        h1s[i].style.fontFamily  = "impact";

        var a = document.createElement('a');
        var link = document.createTextNode(h1s[i].outerText); 

        h1s[i].innerHTML = "";
        a.appendChild(link);
        a.href = "#";
        h1s[i].appendChild(a);
    }
    var uls = document.getElementsByTagName("ul");
    for (var i = 0; i < uls.length; i++) {
        uls[i].style = '';
        uls[i].style.padding = '';
    }
  };
}
});


//Question 7

document.addEventListener("DOMContentLoaded", function(event) {

    var comment = document.getElementsByClassName("price");

    var toys = [

        { name: "Lego", price: 15.6 }, 

        { name: "Master of Universe", price: 28.3 }, 

        { name: "Barbie", price: null }, 

        { name: "Mr Potato Head", price: 89.99 }];

        for (var i in comment) {

            comment[i].onclick = function() {

                var total = 0;

                for (var i = 0; i < toys.length; i++) {

                    total = total + toys[i].price;
      }

      document.getElementById("total").innerHTML = total;
  };
}
});