var number = document.getElementById("quantity");



var canvas;

var ctx1;


var width = Math.floor(window.innerWidth);
var height = Math.floor(window.innerHeight);


var Time = 0

var C = []
var D = []

var n
var m



	canvas = document.getElementById("canvas");
	ctx1 = canvas.getContext("2d");
	canvas.width = width-20;
    canvas.height = height-20;
	

	
	
	ctx1.clearRect(0, 0, width, height);
	ctx1.font='10px Arial';
	ctx1.textAlign = "center";
	
	w = .5*width
	h = .6*height
	
	xpos = 0
	ypos = 0
	rad = 700
	
	C[0] = {x:xpos,y:ypos,r:rad};	

		
//	PlotCircle(C[0])
		
//	C[1] = {r:getRad(C[0].r,C[0].r,C[0].r)}
	
	C[4] = {x:0,y:0,r:getRad(C[0].r,C[0].r,C[0].r)}
//	ctx1.fillText(4, w+C[4].x, h+C[4].y+5);
	D[4] = [1,2,3,1]
	
	PlotCircle(C[4])
	
	n = 1
	
quantity.oninput = function() {
	
	ctx1.clearRect(0, 0, width, height);
	PlotCircle(C[4])
	
	for (let k = 0; k<3; k++)
	{
		xpos = (C[0].r+C[4].r)*Math.sin(k*2*Math.PI/3)
		ypos = (C[0].r+C[4].r)*Math.cos(k*2*Math.PI/3)

		C[n] = {x:xpos,y:ypos,r:rad}
		
		//PlotCircle(C[n])
		//ctx1.fillText(n, w+C[n].x, h+C[n].y+5);
		
		n = n+1
	}
	
	n=5
	m=4
		
	var num = quantity.value
	
	for (let i = 0; i < num; i++)
	{
		for (let p = 0; p < Math.pow(3,i); p++)
		{		
			//c1 = i*p+1+(4*i)
			c1=m
			
			for (let q = 0; q < 3; q++)
			{
				c2 = D[c1][q]
				c3 = D[c1][q+1]
				console.log(n,c1,c2,c3)
				
				Cir = CalcCircle(C[c1], C[c2], C[c3])

				C[n] = {x:((C[c1].x)+(Cir.x)),y:((C[c1].y)+(Cir.y)),r:Cir.r}
				D[n] = [c1,c2,c3,c1]
				
				
				PlotCircle(C[n])
//				ctx1.fillText(n, w+C[n].x, h+C[n].y+4);
				
				n = n + 1
			}
			m = m +1
		}
	}
}
function getRad(r1,r2,r3)
{
	r4 = (r1 * r2 * r3) / (r1 * r2 + r2 *
		r3 + r1 * r3 + 2.0 * Math.sqrt(
		r1 * r2 * r3 * (r1 + r2 + r3)));
	return r4
}

function PlotCircle(circle)
{
	w = .5*width
	h = .6*height
	
	ctx1.beginPath();
	ctx1.arc(w+circle.x, h+circle.y, circle.r, 0, 2*Math.PI);
	ctx1.stroke();	
}

function CalcCircle(C1,C2,C3)
{	
	rad = getRad(C1.r,C2.r,C3.r)
	
	p = Math.pi
	
//	console.log(C1,C2,C3,rad)
	
	angle1 = Math.acos((Math.pow(C1.r+C2.r,2) + Math.pow(C1.r+rad,2)- Math.pow(C2.r+rad,2))/(2*(C1.r+C2.r) * (C1.r+rad)))
		

		
	cx = C2.x-C1.x
	sx = Math.abs(cx)/(cx)
	
	
	
	a= Math.abs(C2.y-C1.y)/(C2.y-C1.y)
	
	cy = a*(C2.y-C1.y)
	sy = Math.abs(cy)/(cy)
	
	angle = Math.atan(cx/cy)
	

	
	
	dx = 1*(C1.r+rad)*Math.sin(angle+a*sy*angle1)
	dy = a*sy*(C1.r+rad)*Math.cos(angle+a*sy*angle1)
	
	Cir = {x:dx,y:dy,r:rad}
	
	return Cir
}


	