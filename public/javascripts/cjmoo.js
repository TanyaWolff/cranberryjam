window.addEvent('domready', function(){
  
 	//document.getElementById("menus").getElementsByClassName("myMenu");
	//var myMenuArray = $('menus').getElementsByClassName("myMenu"); 
	var myMenuArray = document.getElementById("menus").getElementsByClassName("mainmenu");
	var n=myMenuArray.length;
	//var hts=new Array(n);
	//var tweens=new Array(n);
	
	
	for (var i = 0; i < myMenuArray.length; i++) {
		//var color = myMenuArray[i].getStyle('backgroundColor');
		/* tweens[i] = new Fx.Tween(myMenuArray[i],{
		transition: 'bounce:out',
		duration: 1000
		}); */
	   
	myMenuArray[i].addEvents({
  
	mouseenter: function(){  
	 this.set('tween', {
        duration: 300,
        transition: Fx.Transitions.Circ.easeOut
	 });
	 h=(this.getElements("li").length) * 20 + 20;
	 this.tween('height', h); 
	 //this.fireEvent('mouseleave', "", 5000);
    },
	mouseleave: function(){
	this.set('tween', {
        duration: 300,
        transition: Fx.Transitions.Circ.easeOut
	 });
		this.tween('height', 20);
	}
	
  });
  }
});

// this.morph({
 //       opacity: 1,
 //       backgroundColor: color
 //     });
 /*
 ,
			focus: function(){
		tweens[i].start('height', h);
	},
	blur: function(){
		tweens[i].start('height', 50);
	},
    mouseenter: function(){  
      tweens[i].start('height', h);
	  myMenuArray[i].tween('height', 20, h);
    },
    mouseleave: function(){
          this.set('tween', {}).tween('height', '20px');
    }
	*/
