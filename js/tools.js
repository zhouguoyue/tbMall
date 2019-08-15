function move(obj,name,target,speed){

    var curren = parseInt(getStyle(obj,name));
    
    speed = curren < target?speed:-speed;

    clearInterval(obj.time);

     obj.time = setInterval(function(){

        curren = parseInt(getStyle(obj,name)); //持续的更新 left 值
   
        obj.style[name] = (curren +speed)+"px";
        
        if((speed > 0  && curren >= target) ||(speed < 0 && curren <= target) ){


        obj.style[name] = target+"px";

        clearInterval(obj.time);
        }
    },20);
    
};
// 初始需要指定 left top  在css 样式表中的值  如  left：0  ；   top：0 ；
function getStyle(obj,name){
    if(window.getComputedStyle){
        //正常浏览器的方式，具有getComputedStyle 方法
        return getComputedStyle(obj,null)[name];
    }else {
        //IE8 没有getComputedStyle方法
        return obj.currentStyle[name];
    }
}