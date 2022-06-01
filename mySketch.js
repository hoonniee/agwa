var inputElement
var txts=[]
var ay
var colors = "26547c-ef476f-ffd166-06d6a0-fffcf9".split("-").map(a=>"#"+a)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	inputElement =createInput("")
  inputElement.position(50,50)
//	inputElement.style("font-size",'20px')
	inputElement.input(userInput)

	
}
function userInput(){
	txts.push({
	  text:this.value(),
		x:width/2,
		y:height/2,
		vx:random(-5,5),
		vy:1,
		color:random(colors)
	})
	this.value('')
}

function draw() {
	background(0);
	fill(255)
	textSize(50)
	for(var i=0;i<txts.length;i++){
		let txt = txts[i]
		fill(txt.color)
		text(txt.text,txt.x,txt.y)
		txt.x=txt.x+txt.vx
		txt.y=txt.y+txt.vy
		txt.vy=txt.vy+0.1//往下速率vy再加0.1
		txt.vx=txt.vx*0.995
		txt.vy=txt.vy*0.995
		if(txt.y>height){
			txt.vy=-abs(txt.vy)//abs取絕對值
		}
	}
	
}