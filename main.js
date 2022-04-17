var canvas=new fabric.Canvas("myMinecraft");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";

function newplayer_load()
{
fabric.Image.fromURL("player.png",function(Img){
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set(
{
    top:player_y,
    left:player_x
}
);
canvas.add(player_object);
});



}
function block_load(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
block_object = Img;

block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set(
{
    top:player_y,
    left:player_x
}
);
canvas.add(block_object);
});



}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode ;
if(e.shiftKey && keyPressed=="80"){
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey && keyPressed=="77"){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    }

    if(keyPressed == '38')
    {
      up();
      
    }  
    if(keyPressed == '40')
    {
      down();
      
    }  
    if(keyPressed == '37')
    {
     left();
      
    }  
    if(keyPressed == '39')
    {
      right();
      
    }  
    if(keyPressed == '87')
    {
      block_load("wall.jpg");
      
    }  
    if(keyPressed == '71')
    {
      block_load("ground.png");
      
    }  
    if(keyPressed == '76')
    {
      block_load("light_green.png");
      
    }  
    if(keyPressed == '84')
    {
      block_load("trunk.jpg");
      
    }  
    if(keyPressed == '82')
    {
      block_load("roof.jpg");
      
    }  
    if(keyPressed == '89')
    {
      block_load("yellow_wall.png");
      
    }
    if(keyPressed == '68')
    {
      block_load("dark_green.png");
      
    }    
    if(keyPressed == '67')
    {
      block_load("cloud.jpg");
      
    } 
    if(keyPressed == '85')
    {
      block_load("unique.png");
      
    }   
}

function up()
{
if(player_y >=0)
{
player_y = player_y -block_height;
canvas.remove(player_object);
newplayer_load();

}

}
function down()
{
if(player_y <=500)
{
player_y = player_y +block_height;
canvas.remove(player_object);
newplayer_load();

}

}
function left()
{
if(player_x >0)
{
player_x = player_x -block_width;
canvas.remove(player_object);
newplayer_load();

}

}
function right()
{
if(player_x =850)
{
player_x = player_x -block_width;
canvas.remove(player_object);
newplayer_load();

}

}