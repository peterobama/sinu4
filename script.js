$("#container").mousemove(function(e) {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

$(window).mousemove(function(e) {
    var change;
    var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
    var  xpos=xpos*2;ypos=ypos*2;
    $('.man').css('top',((0+(ypos/50))+"px"));
    $('.man').css('right',(( 0+(xpos/80))+"px"));
                   
  });
