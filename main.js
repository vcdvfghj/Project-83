canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_position_of_x,last_position_of_y
canvas.addEventListener("touchstart", mousedown_event)
function mousedown_event(e)
{
   
}
var width=screen.width
var newwidth=width-90
var newheight=screen.height-300
 
if(width<992){
  document.getElementById("myCanvas").width=newwidth
  document.getElementById("myCanvas").height=newheight
  document.body.style.overflow="hidden"
}

canvas.addEventListener("touchmove", touchmove_event)
function touchmove_event(e)
{
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop
   
      ctx.beginPath()
      ctx.strokeStyle="red";
      ctx.lineWidth=1
      ctx.arc(current_position_of_x,current_position_of_y,40,0,2*Math.PI)
      ctx.stroke()

    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
}
canvas.addEventListener("mousedown",mousedown_event)
function mousedown_event()
{mouseevent="mousedown"}
canvas.addEventListener("mouseup",mouseup_event)
function mouseup_event(){
  mouseevent="mouseup"
}
canvas.addEventListener("mousemove", mousemove_event)
function mousemove_event(e)
{
    current_position_of_x=e.clientX-canvas.offsetLeft
    current_position_of_y=e.clientY-canvas.offsetTop
   if(mouseevent=="mousedown")
   {
      ctx.beginPath()
      ctx.strokeStyle="red";
      ctx.lineWidth=1
      ctx.arc(current_position_of_x,current_position_of_y,40,0,2*Math.PI)
      ctx.stroke()
   }
    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
}