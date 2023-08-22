var randomNumber1 = Math.floor(Math.random() * 6);
var randomDiceImage = "dice" + randomNumber1 + ".png";
console.log(randomDiceImage);
var randomImagesSource = randomDiceImage;
var image1  = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random() * 6);
var randomImagesSource2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesSource2);

if(randomImagesSource === randomImagesSource2){
    document.querySelector(".select").innerHTML = "tie"
}
else if(randomImagesSource > randomImagesSource2){
    document.querySelector(".select").innerHTML = "player 1 is win"
}
else if(randomImagesSource < randomImagesSource2){
    document.querySelector(".select").innerHTML = "player 2 is win"
}




