function Helix(upThreshold, downThreshold, left){

var containerUpDiv = [];
var containerDownDiv = [];

var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

container.style.left = left + 'px';

var containerUp = document.createElement('div');
containerUp.classList.add('up');
container.appendChild(containerUp);

var containerDown = document.createElement('div');
containerDown.classList.add('down');
container.appendChild(containerDown);

for(var i=0; i< 10; i++){
containerUpDiv[i] =document.createElement('div');
containerUp.appendChild(containerUpDiv[i]);

containerDownDiv[i] =document.createElement('div');
containerDown.appendChild(containerDownDiv[i]);


    }

//var upThreshold = 0;
//var downThreshold = 100;
var upTopVal = upThreshold;
var downTopVal = downThreshold;
var flag = 'down';
var minRadius = 0;
var maxRadius = 20;
var upDivRadius = 0;
var downDivRadius = 20;
var counter = 0;
var counterLimit = 5;


setInterval(function(){
        
    if(flag === 'down'){
      upTopVal++;
      containerUp.style.top = upTopVal + 'px'; 

      counter = (counter + 1) % counterLimit;

     if(upDivRadius < maxRadius && counter == 0){
      upDivRadius++;
     }

     if(downDivRadius > minRadius && counter == 0){
      downDivRadius --; }

      for(var i =0; i < 10; i++){
      containerUpDiv[i].style.width = upDivRadius + 'px';
      containerUpDiv[i].style.height = upDivRadius + 'px';
      
      containerDownDiv[i].style.width = downDivRadius + 'px';
      containerDownDiv[i].style.height = downDivRadius + 'px';

         }

      downTopVal--;
      containerDown.style.top = downTopVal + 'px'; 

      if(upTopVal === downThreshold){
          
          flag ='up';
          counter = 0;

      }


  }

  if(flag === 'up'){
      upTopVal--;
      containerUp.style.top = upTopVal + 'px';

      counter = (counter + 1) % counterLimit;

      if(upDivRadius > minRadius && counter == 0){
      upDivRadius --; }

      if(downDivRadius < maxRadius && counter == 0){
          downDivRadius++;
         }    

      for(var i =0; i < 10; i++){
          containerUpDiv[i].style.width = upDivRadius + 'px';
          containerUpDiv[i].style.height = upDivRadius + 'px';  
           
          containerDownDiv[i].style.width = downDivRadius + 'px';
          containerDownDiv[i].style.height = downDivRadius + 'px';
  
      }
          
      downTopVal++;
      containerDown.style.top = downTopVal + 'px'; 
      
      if(upTopVal === upThreshold){
        
          flag ='down';

      }


  }
  
  




},1000/60);




}

// Helix(0,100,80);
// Helix(20,120,110);
// Helix(40,140,140);
// Helix(60,160,170);
// Helix(80,180,200);
// Helix(100,200,230);
// Helix(80,180,260);
// Helix(60,160,290);
// Helix(20,120,320);
// Helix(0,100,350);

var key = 80;
for(var i=0; i<10; i++){
    Helix(0,100,key); 
    key +=30; 
}

// var key = 80;
// var up = 0;
// var down = 100;
// for(var i=0; i<10; i++){
    
//     Helix(Math.sin(up),Math.sin(down),key); 
//     key += 30;
//     up += 20;
//     down += 20; 
// }


// Helix(0,100,80);
// Helix(0,100,110);
// Helix(0,100,140);
// Helix(0,100,170);
// Helix(0,100,200);
// Helix(0,100,230);
// Helix(0,100,260);
// Helix(0,100,290);
// Helix(0,100,320);
// Helix(0,100,350);
