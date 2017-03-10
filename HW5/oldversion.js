
      //Mouth 
      var grow = 10*time <= 500;
      if(grow){

            var faceSize=15*time;
            //face
            c.beginPath();
            c.lineWidth=10;
            c.ellipse(mouseX,mouseY,100+faceSize,100+faceSize,0,2*Math.PI,0,1);
            c.fillStyle ='rgb(' + 0 + ','+0 +','+ 255+')';
            c.fill();
            c.closePath();

            //Eye 1
            c.beginPath();
            c.lineWidth=5;
            c.ellipse(mouseX-30,mouseY-50,10,10,0,2*Math.PI,0,1);
            c.stroke();
            c.fillStyle ='rgb(' + 0 +','+0 +','+ 0+')';
            c.fill();
            c.stroke(); 
            c.closePath();

            //Eye 2
            c.beginPath();
            c.ellipse(mouseX+30,mouseY-50,10,10,0,2*Math.PI,0,1);
            c.stroke();
            c.fillStyle ='rgb(' + 0 + ','+0 +','+ 0+')';
            c.fill();
            c.closePath();

            var mouthSize=10*time;
            var mouthPlace=20-time;
            c.beginPath();
            c.ellipse(mouseX,mouseY+mouthPlace,mouthSize,mouthSize,0,2*Math.PI,0,1);
            c.stroke();
            c.fillStyle ='rgb(' + 0 + ','+0 +','+ 0+')';
            c.fill();
            c.closePath();
      }
      else {
            size=500;
            place=20;
            c.beginPath();
            c.ellipse(mouseX,mouseY+place,size,size,0,2*Math.PI,0,1);
            c.stroke();
            c.fillStyle ='rgb(' + 0 + ','+0 +','+ 0+')';
            c.fill();
            c.closePath(); 
      }