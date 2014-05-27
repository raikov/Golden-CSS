/*****************************************

       Golden Ratio Framework v0.01b

*****************************************/

Golden = {
  rectangle:function(){
    var all = document.querySelectorAll('.golden-rectangle'), l = all.length, i = 0;
    for( ; i<l ;i++){
      var width = all[i].offsetWidth;
      all[i].style.height = (width / 1.61803398875) + 'px';
    }
  },
  rectangleVertical:function(){
    var all = document.querySelectorAll('.golden-rectangle-vertical'), l = all.length, i = 0;
    for( ; i<l ;i++){
      var width = all[i].offsetWidth;
      all[i].style.height = (width * 1.61803398875) + 'px';
    }
  },
  rectangles:function(){
    var all = document.querySelectorAll('.golden-rectangle, .golden-rectangle-vertical'), l = all.length, i = 0;
    for( ; i<l ;i++){
      var width = all[i].offsetWidth;
      var w =  all[i].className.indexOf('golden-rectangle-vertical') === -1 ? (width / 1.61803398875) : (width * 1.61803398875);
      all[i].style.height = w + 'px';
    }
  },
  init:function(){
    Golden.rectangles();
  }
}

window.addEventListener("DOMContentLoaded",function(event){
  Golden.init();
});
window.addEventListener("load",function(event){
  Golden.init();
});
window.addEventListener("resize",function(event) {
  Golden.rectangles();
});