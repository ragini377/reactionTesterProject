

var start   =  new Date().getTime(); //get start time when user click
  
function getRandomColor() { // fuction genrating random color
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }

function move()
{
    var left;
    var top;
    var wh;
    left = Math.random()*300; // this line generates a random number between 0 and 300, and stores it in the variable left.
    top = Math.random()*300; //this line generates a random number between 0 and 300, and stores it in the variable top.

    wh = ((Math.random()*400)+100);//It generates a random number between 100 and 500, and stores it in the variable wh
    document.getElementById("movingBox").style.left = left + "px";
    document.getElementById("movingBox").style.top = top + "px";
    document.getElementById("movingBox").style.width = + "px";
    document.getElementById("movingBox").style.height = wh + "px";
    document.getElementById("movingBox").style.display ="block";
  
    document.getElementById("movingBox").style.backgroundColor =getRandomColor(); //genrate random color
       start   =  new Date().getTime();

}
move();


document.getElementById("movingBox").onclick = function () {
    document.getElementById("movingBox").style.display = "none" //display property "none" disapperal div
    
       var end = new Date().getTime();
       var timeTaken = ( end - start ) /1000; // calulate  clicking time of user and assign to variable timeTaken
       alert(timeTaken);
       move(); //calling function   for moving div
       document.getElementById("timeDetails").innerHTML= "<strong>your Reaction time is : </strong> " + timeTaken;
        
}
