var validMove;
var validSwap;
var score = 0;
var highScore = 0;
var gameOver = false;
document.querySelector(".btn").addEventListener("click", function() {
  for (var x = 0; x <= 3; x++) {
    for (var y = 0; y <= 3; y++) {
      document.querySelector("#btn" + x + y + " h1").textContent = "";
    }
  }
  gameOver = false;
  document.querySelector(".score" + " h5").textContent = "Score: 0";
  var elements = document.querySelectorAll("#row");
  for (var x = 0; x < 4; x++) {
    elements[x].style.opacity = "1";
  }
  score = 0;
  document.querySelector("#hidden").textContent = "Game Over";
  document.querySelector("#hidden").className = '';
  document.querySelector("#hidden").classList.add("hidden"); 
  checkColors(); 


  startGame(); 

});

function startGame() {
  generateTwoRandoms(); 
  checkColors(); 
}

function checkColors() {
  for (var x = 0; x <= 3; x++) {
    for (var y = 0; y <= 3; y++) {
      switch (document.querySelector("#btn" + x + y + " h1").textContent) {
        case "":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox");
          break;
        case "2":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox2");
          break;
        case "4":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox4");
          break;
        case "8":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox8");
          break;
        case "16":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox16");
          break;
        case "32":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox32");
          break;
        case "64":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox64");
          break;
        case "128":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox128");
          break;
        case "256":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox256");
          break;
        case "512":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox512");
          break;
        case "1024":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox1024");
          break;
        case "2048":
          document.querySelector("#btn" + x + y).className = '';
          document.querySelector("#btn" + x + y).classList.add("gameBox2048");
          break;
      }
    }
  }
}

function generateTwoRandoms() {
  console.log("Asdadss");
  var rand1 = Math.floor(Math.random() * 4);
  var rand11 = Math.floor(Math.random() * 4);
  var rand2 = Math.floor(Math.random() * 4);
  var rand22 = Math.floor(Math.random() * 4);
  var rand3 = Math.floor(Math.random() * 2);
  var rand4 = Math.floor(Math.random() * 2);
  console.log("#btn" + rand1 + rand11 + " " + "h1");
  console.log("#btn" + rand2 + rand22 + " " + "h1");
  if (rand3 === 0) {
    document.querySelector("#btn" + rand1 + rand11 + " " + "h1").innerHTML = "2";
  } else {
    document.querySelector("#btn" + rand1 + rand11 + " " + "h1").innerHTML = "4";
  }
  if (rand4 === 0) {

    document.querySelector("#btn" + rand2 + rand22 + " " + "h1").textContent = "2";
  } else {
    document.querySelector("#btn" + rand2 + rand22 + " " + "h1").textContent = "4";
  }
}
document.addEventListener("keydown", function(event) {

  if (gameOver === false) {
    if (isGridFull()) {
      if (!possibleMoves()) {
        gameOver = true;
        var elements = document.querySelectorAll("#row");
        for (var x = 0; x < 4; x++) {
          elements[x].style.opacity = "0.2"; 
        }
        document.querySelector("#hidden").classList.remove("hidden"); 
        document.querySelector("#hidden").classList.add("GameoverText"); 




      }
    }
    if (wonGame()) {
      gameOver = true;
      var elements = document.querySelectorAll("#row");
      for (var x = 0; x < 4; x++) {
        elements[x].style.opacity = "0.2"; 
      }
      document.querySelector("#hidden").textContent = "You Won!";
      document.querySelector("#hidden").classList.remove("hidden");
      document.querySelector("#hidden").classList.add("GameoverText");
    }
    var keyPressed = event.key;
    switch (keyPressed) {
      case "a":
        processLeft();
        break;
      case "s":
        processDown();
        break;
      case "d":
        processRight();
        break;
      case "w":
        processUp();
        break;

    }
    checkColors();
    if (validSwap || validMove) { 
      if (!isGridFull()) { 
        generateRandom();
        checkColors();

      }

    }
  }

});
function generateRandom() {
  do {
    var y = Math.floor(Math.random() * 4);
    var x = Math.floor(Math.random() * 4);
  } while (document.querySelector("#btn" + x + y + " " + "h1").textContent !== "");
  console.log("#btn" + x + y + " " + "h1");
  console.log(document.querySelector("#btn" + x + y + " " + "h1").textContent);
  if (Math.random() >= 0.8) {
    document.querySelector("#btn" + x + y + " " + "h1").textContent = "4";
  } else {
    document.querySelector("#btn" + x + y + " " + "h1").textContent = "2";
  }
  validMove = false;
  validSwap = false;
}
function isGridFull() {
  for (var x = 0; x <= 3; x++) {
    for (var y = 0; y <= 3; y++) {
      if (document.querySelector("#btn" + x + y + " " + "h1").textContent === "") { 
        return false;
      }
    }
  }
  return true;
}
function processUp() {
  var currentNum; 
  validMove = false; 
  for (var j = 0; j <= 3; j++) {
    for (var i = 0; i <= 3; i++) {
      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") { 
        continue;
      }
      for (var k = i + 1; k <= 3; k++) {
        currentNum = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        if (document.querySelector("#btn" + k + j + " " + "h1").textContent === "") { 
          continue;
        } else if (document.querySelector("#btn" + k + j + " " + "h1").textContent !== currentNum) { 
          break;
        } else if (document.querySelector("#btn" + k + j + " " + "h1").textContent === currentNum) { 
          document.querySelector("#btn" + i + j + " " + "h1").textContent = Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + k + j + " " + "h1").textContent);
          score = score + Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + k + j + " " + "h1").textContent);
          document.querySelector(".score" + " h5").textContent = "Score: " + score;
          if (score > highScore) {
            highScore = score;
            document.querySelector(".highScore" + " h5").textContent = "HighScore: " + highScore;

          }

          document.querySelector("#btn" + k + j + " " + "h1").textContent = "";
          positionUp(); 
          validMove = true; 
        }
      }
    }
  }
  positionUp();
}
function positionUp() {
  var position = 0;
  for (var j = 0; j <= 3; j++) {
    for (var i = 1; i <= 3; i++) {
      var swappingRequired = false;
      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") { 
        continue;
      }
      for (var l = i; l >= 0; l--) {
        if (document.querySelector("#btn" + l + j + " " + "h1").textContent === "") { 
          position = l;
          swappingRequired = true;
        }
      }
      if (swappingRequired == true) { 
        validSwap = true; 
        document.querySelector("#btn" + position + j + " " + "h1").textContent = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        document.querySelector("#btn" + i + j + " " + "h1").textContent = "";
      }
    }
  }
}
function processLeft() {
  var currentNum;
  validMove = false;
  for (var i = 0; i <= 3; i++) {
    for (var j = 0; j < 3; j++) {

      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") {
        continue;
      }
      for (var k = j + 1; k <= 3; k++) {
        currentNum = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        if (document.querySelector("#btn" + i + k + " " + "h1").textContent === "") {
          continue; 
        } else if (document.querySelector("#btn" + i + k + " " + "h1").textContent !== currentNum) {
          break;
        } else if (document.querySelector("#btn" + i + k + " " + "h1").textContent === currentNum) {
          document.querySelector("#btn" + i + j + " " + "h1").textContent = Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + i + k + " " + "h1").textContent);
          score = score + Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + k + j + " " + "h1").textContent);
          document.querySelector(".score" + " h5").textContent = "Score: " + score;
          if (score > highScore) {
            highScore = score;
            document.querySelector(".highScore" + " h5").textContent = "HighScore: " + highScore;

          }
          document.querySelector("#btn" + i + k + " " + "h1").textContent = "";
          validMove = true;
          positionLeft();
        }


      }

    }
  }
  positionLeft();

}
function processRight() {
  var currentNum; 
  validMove = false; 
  for (var i = 0; i <= 3; i++) {
    for (var j = 3; j >= 0; j--) {
      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") { 
        continue;
      }
      for (var k = j - 1; k >= 0; k--) {
        currentNum = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        if (document.querySelector("#btn" + i + k + " " + "h1").textContent === "") {
          continue; 
        } else if (document.querySelector("#btn" + i + k + " " + "h1").textContent !== currentNum) { 
          break; 
        } else if (document.querySelector("#btn" + i + k + " " + "h1").textContent === currentNum) { 
          document.querySelector("#btn" + i + j + " " + "h1").textContent = Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + i + k + " " + "h1").textContent);
          score = score + Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + k + j + " " + "h1").textContent);
          document.querySelector(".score" + " h5").textContent = "Score: " + score;
          if (score > highScore) {
            highScore = score;
            document.querySelector(".highScore" + " h5").textContent = "HighScore: " + highScore;

          }
          document.querySelector("#btn" + i + k + " " + "h1").textContent = "";
          positionRight(); 
          validMove = true; 
        }
      }
    }
  }
  positionRight();
}
function processDown() {
  var currentNum;
  validMove = false;
  for (var j = 0; j <= 3; j++) {
    for (var i = 3; i > 0; i--) {
      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") {
        continue;
      }
      for (var k = i - 1; k >= 0; k--) {
        currentNum = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        if (document.querySelector("#btn" + k + j + " " + "h1").textContent === "") {
          continue; 
        } else if (document.querySelector("#btn" + k + j + " " + "h1").textContent !== currentNum) {
          break;
        } else if (document.querySelector("#btn" + k + j + " " + "h1").textContent === currentNum) {
          document.querySelector("#btn" + i + j + " " + "h1").textContent = Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + k + j + " " + "h1").textContent);
          score = score + Number(document.querySelector("#btn" + i + j + " " + "h1").textContent) +
            Number(document.querySelector("#btn" + k + j + " " + "h1").textContent);
          document.querySelector(".score" + " h5").textContent = "Score: " + score;
          if (score > highScore) {
            highScore = score;
            document.querySelector(".highScore" + " h5").textContent = "HighScore: " + highScore;

          }
          document.querySelector("#btn" + k + j + " " + "h1").textContent = "";
          positionBottom();
          validMove = true;
        }
      }
    }
  }
  positionBottom();
}
function positionBottom() {
  var position = 0;
  for (var j = 0; j <= 3; j++) {
    for (var i = 2; i >= 0; i--) {
      var swappingRequired = false;
      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") { 
        continue;
      }
      for (var l = i; l <= 3; l++) {
        if (document.querySelector("#btn" + l + j + " " + "h1").textContent === "") { 
          position = l;
          swappingRequired = true;
        }
      }
      if (swappingRequired == true) { 
        validSwap = true; 
        document.querySelector("#btn" + position + j + " " + "h1").textContent = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        document.querySelector("#btn" + i + j + " " + "h1").textContent = "";
      }

    }
  }
}

function positionLeft() {
  var position = 0;
  for (var i = 0; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
      var swappingRequired = false;
      console.log("#btn" + i + j + " " + "h1");
      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") { 
        console.log("uo");
        continue;
      }
      for (var l = j; l >= 0; l--) {
        if (document.querySelector("#btn" + i + l + " " + "h1").textContent === "") {
          position = l;
          swappingRequired = true;
        }
      }
      if (swappingRequired == true) { 
        validSwap = true; 
        document.querySelector("#btn" + i + position + " " + "h1").textContent = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        document.querySelector("#btn" + i + j + " " + "h1").textContent = "";
      }
    }
  }
}
function positionRight() {
  var position = 0;
  for (var i = 0; i <= 3; i++) {
    for (var j = 2; j >= 0; j--) {
      var swappingRequired = false;
      if (document.querySelector("#btn" + i + j + " " + "h1").textContent === "") { 
        continue;
      }
      for (var l = j; l <= 3; l++) {
        if (document.querySelector("#btn" + i + l + " " + "h1").textContent === "") { 
          position = l;
          swappingRequired = true;
        }
      }
      if (swappingRequired == true) {
        validSwap = true; 
        document.querySelector("#btn" + i + position + " " + "h1").textContent = document.querySelector("#btn" + i + j + " " + "h1").textContent;
        document.querySelector("#btn" + i + j + " " + "h1").textContent = "";
      }
    }
  }
}
function possibleMoves() {
  for (var x = 0; x <= 3; x++) {
    for (var y = 0; y <= 3; y++) {
      try {
        if ((document.querySelector("#btn" + x + y + " " + "h1").textContent === document.querySelector("#btn" + (Number(x) - 1) + y + " " + "h1").textContent) ||
          (document.querySelector("#btn" + x + y + " " + "h1").textContent === document.querySelector("#btn" + x + (Number(y) - 1) + " " + "h1").textContent) ||
          (document.querySelector("#btn" + x + y + " " + "h1").textContent === document.querySelector("#btn" + (Number(x) + 1) + y + " " + "h1").textContent) ||
          (document.querySelector("#btn" + x + y + " " + "h1").textContent === document.querySelector("#btn" + x + (Number(y) + 1) + " " + "h1").textContent)) { 
          return true;
        }
      } catch (err) {

      }
    }
  }
  return false;
}


function wonGame() {
  for (var x = 0; x <= 3; x++) {
    for (var y = 0; y <= 3; y++) {
      if (document.querySelector("#btn" + x + y + " " + "h1").textContent === "2048") { 
        return true;
      }
    }
  }
  return false;
}
