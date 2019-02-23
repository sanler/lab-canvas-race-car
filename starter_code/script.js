window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {


    myGameArea.start();
    //player = new component(30, 30, "red", 0, 110);
//coche.update();

  }
};  

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    var inicioY=0;
    var finalY=40;
      this.canvas.width = 500;
      this.canvas.height = 600;
      this.context = this.canvas.getContext("2d");
      this.context.fillStyle = '#008100';
      this.context.fillRect(0, 0, 500, 600);
      this.context.fillStyle = '#808080';
      this.context.fillRect(40, 0, 420, 600);
      this.context.fillStyle = '#FFFFFF';
      this.context.fillRect(60, 0, 380, 600);
      this.context.fillStyle = '#808080';
      this.context.fillRect(70, 0, 360, 600);
      this.context.strokeStyle = '#FFFFFF';
      this.context.lineWidth = 10;
      this.context.moveTo(250, inicioY);
      this.context.lineTo(250, finalY);
  
  for(i=0;i<10;i++){
    

     inicioY=inicioY+40+30;
     finalY=finalY+40+30;

      this.context.moveTo(250, inicioY);
      this.context.lineTo(250, finalY);

      this.context.stroke();


  }
      this.child=document.getElementById("game-board");
      document.body.insertBefore(this.canvas, this.child.nextSibling);
      this.interval = setInterval(updateGameArea, 20);
  },
  frames: 0,
  clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
       /* var inicioY=0;
        var finalY=40;
          this.context.fillStyle = '#008100';
          this.context.fillRect(0, 0, 500, 600);
          this.context.fillStyle = '#808080';
          this.context.fillRect(40, 0, 420, 600);
          this.context.fillStyle = '#FFFFFF';
          this.context.fillRect(60, 0, 380, 600);
          this.context.fillStyle = '#808080';
          this.context.fillRect(70, 0, 360, 600);
          this.context.strokeStyle = '#FFFFFF';
          this.context.lineWidth = 10;
          this.context.moveTo(250, inicioY);
          this.context.lineTo(250, finalY);
      
      for(i=0;i<10;i++){
        
    
         inicioY=inicioY+40+30;
         finalY=finalY+40+30;
    
          this.context.moveTo(250, inicioY);
          this.context.lineTo(250, finalY);
    
          this.context.stroke();
    
      }*/
      },
score: function() {
  points = (Math.floor(this.frames/5))
  this.context.font = '18px serif';
  this.context.fillStyle = 'black';
  this.context.fillText('Score: '+points, 350, 50);
}
//stop : function() {
   //   clearInterval(this.interval);
 // }
}


var coche = {
  x: 200,
  y: 450,
  moveLeft:  function() { coche.x -= 1 },
  moveRight: function() { coche.x += 1 },
  width: 100,
  height: 150,
  speedX: 0,
  speedY: 0,
  update: function(){
    var img = new Image();
  img.onload = function() { 
     myGameArea.context.drawImage(img, coche.x, coche.y,100, 150); 
  }
  img.src = "images/car.png";
  },
  newPos: function() {
   
    coche.x += coche.speedX;
    coche.y += coche.speedY;
  }
}

/*function draw(coche) {
  var img = new Image();
  img.onload = function() { 
     myGameArea.context.drawImage(img, coche.x, coche.y,100, 150); 
  }
  img.src = "images/car.png";
}*/



function updateGameArea() {
  myGameArea.clear();
  //coche.update();
  coche.newPos();
  coche.update();

}


function moveLeft() {
  coche.speedX -= 1;
}

function moveRight() {
  coche.speedX += 1;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
  //updateGameArea(); 

}
document.onkeyup = function(e) {
  stopMove();
}

function stopMove() {
    coche.speedX = 0;
    coche.speedY = 0;
}