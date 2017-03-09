   var startTime = Date.now() / 1000, time = startTime;
   

   function trackCursor(canvas) {
      canvas.cursor = {x:0, y:0, z:0};
      canvas.setCursor = function(x, y, z) {
         var r = this.getBoundingClientRect();
	 this.cursor.x = x - r.left;
	 this.cursor.y = y - r.top;
	 if (z !== undefined)
	    this.cursor.z = z;
      }
      canvas.onmousedown = function(e) { this.setCursor(e.clientX, e.clientY, 1); }
      canvas.onmousemove = function(e) { this.setCursor(e.clientX, e.clientY   ); }
      canvas.onmouseup   = function(e) { this.setCursor(e.clientX, e.clientY, 0); }
   }
