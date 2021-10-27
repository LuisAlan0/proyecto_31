var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particles2 = [];
var particles3 = [];
var particles4 = [];
var particles5 = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var ball;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  //crea la tercera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  //crea la cuarta fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
}
  //crea los objetos partícula
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  if(frameCount%120===0){
    particles2.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  if(frameCount%180===0){
    particles3.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  if(frameCount%240===0){
    particles4.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  if(frameCount%300===0){
    particles5.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

 }


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var j = 0; j < particles2.length; j++) {
    particles2[j].display();
  }
  
  for (var j = 0; j < particles3.length; j++) {
    particles3[j].display();
  }
  
  for (var j = 0; j < particles4.length; j++) {
    particles4[j].display();
  }
  
  for (var j = 0; j < particles5.length; j++) {
    particles5[j].display();
  }
}
