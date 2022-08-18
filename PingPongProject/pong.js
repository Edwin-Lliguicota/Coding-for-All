let myXpos = 0;
let myYpos = 250;
let myTop, myBottom;
let state = 0
let xDirection = 1.1;
let yDirection = 1.1;
let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let score = 0;
let random5
let random7
let random10
//Creating a variable that keeps track of if/when we update variables !
//This will stop any multiple score updates and any ball getting stuck
let scoreUpdated = false;
function setup() {
    xPos = 250;
    yPos = 250;
    yDirection = 1.1
    xDirection = 1.1
    random5 = random(-5, 5)
    random7 = random(-7, 7)
    random10 = random(-10, 10)
    state = 0
    createCanvas(500, 500);
    background(0);
    noStroke();
    fill(255);
    textAlign(CENTER)
    textSize(75);
    text("PONG", 250, 125)
    rectMode(CENTER)
    fill(0, 255, 0)
    rect(250, 200, 200, 50)
    fill(255, 255, 0)
    rect(250, 250, 200, 50)
    fill(255, 0, 0)
    rect(250, 300, 200, 50)
    fill(255)
    textSize(25);
    text("EASY", 250, 210)
    text("NORMAL", 250, 260)
    text("HARD", 250, 310)
    score = 0
}
function displayScore() {
    fill(255, 255, 255);
    textSize(32);
    text("Score: " + score, 200, 50);
}
function updateScore() {
    score += 1
}
function displaydifficulty() {
    fill(255, 0, 0)
    fill(0, 255, 0)
    fill(0, 0, 255)
}
function displayRectangle() {
    if (state == 1) {
        fill(0, 255, 0)
        rect(myXpos, myYpos, 25, 150)
    }
    if (state == 2) {
        fill(255, 204, 0)
        rect(myXpos, myYpos, 25, 100)
    }
    if (state == 3) {
        fill(255, 0, 0)
        rect(myXpos, myYpos, 25, 50)
    }
}
function displayCircle() {
    fill(0, 255, 0);
    ellipse(xPos, yPos, 50, 50);
}
function updateBallPosition() {
    xPos += (xSpeed * xDirection);
    yPos += (ySpeed * yDirection);
    console.log("xPOS " + xPos)
    console.log("yPOS "+ yPos)
}
function draw() {
    if (state == 0) {
        displaydifficulty()
    } else {
        background(0)
        displayScore()
        displayRectangle()
        displayCircle()
        updateBallPosition()
        if (xPos > 475) {
            xDirection *= -1;
        }
        if (yPos < 25 || yPos > 475) {
            yDirection *= -1
        }
        if (myYpos < 450 && keyIsDown(DOWN_ARROW)) {
            myYpos += 10
        }
        if (myYpos > 50 && keyIsDown(UP_ARROW)) {
            myYpos -= 10
        }
        //Defining Player Left Hitbox
        //Defining Ball Hitbox
        ballLeft = xPos - 25
        ballRight = xPos + 25
        ballTop = yPos - 25
        ballBottom = yPos + 25
    //recctangle Hitbox
        myLeft = myXpos -15
        myRight = myXpos+15
        myTop = myYpos - 75
        myBottom = myYpos + 75
    rectangleHitBox = [myLeft,myRight, myTop,myBottom]
    ballHitBox = [ballLeft,ballRight,ballTop,ballBottom]
    //Collision between ball & player
    if (myRight>ballLeft && myTop<ballBottom && myBottom>ballTop) {
        //Checking to see if the ball's left side is off the screen
        if(ballLeft < 0){
            //Setting the ball's center so that it's touching the rect
            xPos = myRight + 25
            xDirection *= 1
        }
        else
            xDirection *= -1
    }
        //scoring system
        if (myRight > ballLeft && myTop < yPos && myBottom > yPos) {
            //Checking to see if there's a duplicate score update
            if(scoreUpdated){
                //Setting the ball's center so that it's touching the rect
                xPos = myRight+25
            }
            else{
                //Updating scoreUpdated variable to show that the score has been updated
                scoreUpdated = true;
                updateScore()
            }
        }
        else{
            //Resetting scoreUpdated variable
            scoreUpdated = false;
        }
        //Finish stage if ball does not hit the box
        if (ballLeft <= -40) {
            state = 4
        }
        //winning screen
        if (state == 4) {
            background(0)
            fill(255, 0, 0);
            textSize(60);
            text("YOU LOSE", 250, 150)
            textSize(150);
            text("LOL", 250, 300)
            rect(250, 400, 200, 50)
            fill(0, 255, 255)
            textAlign(CENTER)
            textSize(25);
            fill(0)
            text("Play again?", 250, 400)
        }
    }}
function mouseClicked() {
    if (mouseX > 150 && mouseX < 350 && mouseY > 175 && mouseY < 225) {
        state = 1
        ySpeed = random5
        xSpeed = 5
    }
    if (mouseX > 150 && mouseX < 350 && mouseY > 225 && mouseY < 275) {
        state = 2
        ySpeed = random7
        xSpeed = 7
    }
    if (mouseX > 150 && mouseX < 350 && mouseY > 275 && mouseY < 325) {
        state = 3
        ySpeed = random10
        xSpeed = 10
    }
    if (state == 4) {
        if (mouseX > 150 && mouseX < 350 && mouseY > 375 && mouseY < 425) {
            setup()
        }
    }
}
//win conditition 10 points
//fix bug
//add sound effects
//score on the end screen