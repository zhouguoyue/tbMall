    window.onload = function(){

    //obj 父元素  objls 子元素列表
    function bind(obj,obj2){
        var Obj = document.querySelectorAll("."+obj)[0];
        var Objls = document.querySelectorAll("."+obj2)[0];
        Obj.addEventListener("mouseover",function(){
            
            Objls.style.display = "block";
        },false);
    
        Obj.addEventListener("mouseout",function(){
            Objls.style.display = "none";
        },false);

    // var countryA = document.querySelectorAll(".country")[0];
    // var countryLists = document.querySelectorAll(".country-ls")[0];

    // countryA.addEventListener("mouseover",function(){
    //     countryLists.style.display = "block";
    // },false);

    // countryA.addEventListener("mouseout",function(){
    //     countryLists.style.display = "none";
    // },false);
    }
    bind("country","country-ls");
    bind("mymark","mymarkLs");
    bind("mytb","mytb-lists");
    var countryA = document.querySelectorAll(".sit-nav")[0];
    var countryLists = document.querySelectorAll(".sit-nav-ls")[0];

    countryA.addEventListener("mouseover",function(){
        countryLists.style.display = "flex";
    },false);

    countryA.addEventListener("mouseout",function(){
        countryLists.style.display = "none";
    },false);
    
    //定义了一个hnbox方法 为列表右上角加box   
    // a组 第b个 加 hotBox 或是 newBox
    function hnbox(a,b,hn){
        
        var navLists = document.querySelectorAll(".sit-nav-ls>li:nth-child("+a+") ul> li:nth-child("+b+") ")[0];
        var box = document.createElement("div");
            box.className = hn;
            navLists.firstElementChild.style.position ="relative";
            navLists.firstElementChild.appendChild(box);
    }
    hnbox(2,3,"newBox");
    hnbox(1,10,"hotBox");


    var searchms = document.getElementsByClassName("searchms")[0];
    var searchAls = searchms.getElementsByTagName("a");
    var searchboxbtn = document.querySelectorAll(".searchbox form > button")[0];
    var searchMd = document.getElementsByClassName("searchMd")[0];
    var searchlists = searchMd.querySelector(".searchlists");
    var searchboxInput = searchMd.getElementsByTagName("input")[0]; //搜索框
    var searchIconl = searchMd.getElementsByTagName("i")[0]; //搜索框


    for (var  i = 0; i < searchAls.length; i++) {

        searchAls[i].onclick = function(){

            searchms.getElementsByClassName("clickA")[0].className = "";

            this.className = "clickA";

            // if(searchAls[1].className == "clickA"){
            //     searchboxbtn.style.backgroundColor = "red";
            // }
            if(searchAls[1].className == "clickA"){
                searchboxbtn.style.background = "red";//让 搜索按钮变红
                searchlists.style.display = "none"; //让 搜索列表消失
            }else{
                searchboxbtn.style.background = "";
                searchlists.style.display = "";//让 搜索列表消失
            }

            if(searchAls[0].className == "clickA"){
                searchboxInput.parentNode.getElementsByTagName("span")[0].style.display = "block";//让 搜索按钮变红
                searchboxInput.parentNode.getElementsByTagName("i")[1].style.display = "block";//让 搜索按钮变红
            }else{
                searchboxInput.parentNode.getElementsByTagName("span")[0].style.display = "none";//让 搜索列表消失
                searchboxInput.parentNode.getElementsByTagName("i")[1].style.display = "none";//让 搜索列表消失
            }
        };
        
    }
  
    var qrCode = document.getElementsByClassName("qr-code")[0];
    var closeX = qrCode.querySelector(".closeX");
    closeX.onclick = function(){
        qrCode.style.display = "none";
    }

        var value = searchboxInput.value;
        
        searchboxInput.oninput = function(){
            // console.log(searchboxInput.value);
            value = searchboxInput.value;
            if(/\S+/gi.test(value)){
                searchIconl.style.display = "none";
                searchboxInput.parentNode.getElementsByTagName("span")[0].style.display = "none";
            }else{
                searchIconl.style.display = "block";
                searchboxInput.parentNode.getElementsByTagName("span")[0].style.display = "block";
            }
            
        }


         //主题市场   二级菜单 显示和隐藏
    var containerCoNav = document.querySelectorAll(".container-con-nav")[0];

    var containerCoNavLis = containerCoNav.querySelectorAll(".container-con-nav .mainBox h2 ul>li");
    
    for (var  i = 0,length = containerCoNavLis.length; i < length; i++) {
        (function(){
            containerCoNavLis[i].onmouseenter = function(){
                this.querySelector("div").style.display = "flex";
            }
            containerCoNavLis[i].onmouseleave = function(){
                
                this.querySelector("div").style.display = "none";
            }
        }(i))
        
    };


    // 展示和快捷区  钻展轮播图
    var cmslRunMapPre = document.getElementById("cmsl-top-runmap-pre");
    var cmslRunMapNext = document.getElementById("cmsl-top-runmap-next");
    var cmslRunMapCircle = document.getElementById("cmsl-top-runmap-circle");
    var cmslRunMapCircleLis = cmslRunMapCircle.getElementsByTagName("li");
    var cmslRunMaps = document.getElementById("cmsl-top-runmaps");

    var cmslRunMapsImgs = cmslRunMaps.getElementsByTagName("img");
        //设置轮播 的宽度
        cmslRunMaps.style.width = 520*cmslRunMapsImgs.length +"px";
        // 让图片导航居中 
        cmslRunMapCircle.style.marginLeft = - cmslRunMapCircle.offsetWidth/2 +"px";
        //默认第一个为 红色
        var index = 0;
        cmslRunMapCircleLis[index].className = "circle-active";

        //点击 圆点超链接 跳转到对应的图片；
        for (var i=0;i< cmslRunMapCircleLis.length;i++) {
            (function(i){       //传个 形参 i

                    cmslRunMapCircleLis[i].onclick = function(){
                    cmslRunMapCircleLis[index].className = "";
                    cmslRunMaps.style.marginLeft = -520*(i+1) +"px";
                    this.className = "circle-active";
                    //把index 改成 被点击的这个圆点的下标
                    index = i;
                }
            })(i);
        }

    //向左 前进按钮
    cmslRunMapPre.onclick = function(){
        
        //下标自增1 
        index++;

        move(cmslRunMaps,"marginLeft",-520*(index+1),20,function(){
            setA();
        });

    };
    //向右  后退按钮
    cmslRunMapNext.onclick = function(){
        //下标自减
        index--;
        move(cmslRunMaps,"marginLeft",-520*(index+1),20,function(){
            setA();
        });
    };

    //设置圆点的css样式
    function setA(){
        for (var i=0;i< cmslRunMapCircleLis.length;i++) {
            cmslRunMapCircleLis[i].className = "";
        }
        //当图片为最后一张时  设置索引回到第一个位置，图片瞬间回到起始位置；
        if(index > cmslRunMapCircleLis.length-1){
            index = 0;
            cmslRunMaps.style.marginLeft = -520*(index+1)+"px";
        }else if(index < 0){
            index = (cmslRunMapCircleLis.length-1);
            cmslRunMaps.style.marginLeft = -520*(index+1)+"px";
        }


        cmslRunMapCircleLis[index].className = "circle-active";
    }

    //自动轮播
        var autoMove,MoveBegin;
        function autoMoveF (){
            MoveBegin = setTimeout(function(){
                autoMove = setInterval(function(){
                    index++;
                    move(cmslRunMaps,"marginLeft",-520*(index+1),20,function(){
                        setA();
                    });
                },3000);
            },2000)
            
        }
        autoMoveF();
        
        cmslRunMaps.parentNode.onmouseenter = function(){
            clearInterval(autoMove);
            clearTimeout(MoveBegin);
            cmslRunMapPre.style.display = "block";
            cmslRunMapNext.style.display = "block";
        }
        cmslRunMaps.parentNode.onmouseleave = function(){
            autoMoveF();
            cmslRunMapPre.style.display = "none";
            cmslRunMapNext.style.display = "none";
        }
       
     

        var cmsltbrMapShowBoxC = document.getElementById("cmsltb-rmap-showbox-contain");
        var cmsltbrMapShowBoxDiv = cmsltbrMapShowBoxC.querySelectorAll("#cmsltb-rmap-showbox-contain > div");
        var cmsltbTMHp = document.getElementById("cmsltb-TM-hp");
        var cmsltbTMHpP = cmsltbTMHp.querySelector("#cmsltb-TM-hp p");

        var cmsltbTMBoxI = document.getElementById("cmsltb-TM-boxI");
        var cmsltbTMBoxIAlla = cmsltbTMBoxI.querySelectorAll("a");
        var cmsltbTmRmapSboxPre = document.getElementById("cmsltb-TM-rmap-showbox-pre");
        var cmsltbTmRmapSboxNext = document.getElementById("cmsltb-TM-rmap-showbox-next");

        //设置容器的宽度
        cmsltbrMapShowBoxC.style.width = 520*(cmsltbrMapShowBoxDiv.length)+"px";
        var index2 = 0;
        cmsltbTMBoxIAlla[index].className = "blackA";

          //点击 index2 链接 跳转到对应的图片；
          for (var i=0;i< cmsltbTMBoxIAlla.length;i++) {
            (function(i){       //传个 形参 i
                cmsltbTMBoxIAlla[i].onclick = function(){
                    cmsltbTMBoxIAlla[index2].className = "";
                    cmsltbrMapShowBoxC.style.marginLeft = -520*(i+1) +"px";
                    this.className = "blackA";
                    //把index2 改成 被点击的这个圆点的下标
                    index2 = i;
                    setHp();
                }
            })(i);
        }
        
        //向左 前进按钮
    // var os1 = cmsltbTMBoxIAlla.length;
    cmsltbTmRmapSboxPre.onclick = function(){
        
        //下标自增1 
        
        index2++;

        move(cmsltbrMapShowBoxC,"marginLeft",-520*(index2+1),20,function(){
            setA1();
            setHp();
        });

    };
    //向右  后退按钮
    cmsltbTmRmapSboxNext.onclick = function(){
        //下标自减
        index2--;
        move(cmsltbrMapShowBoxC,"marginLeft",-520*(index2+1),20,function(){
            setA1();

            setHp();
        });
    };

    //设置圆点的css样式
    function setA1(){
        for (var i=0;i< cmsltbTMBoxIAlla.length;i++) {
            cmsltbTMBoxIAlla[i].className = "";
        }
        //当图片为最后一张时  设置索引回到第一个位置，图片瞬间回到起始位置；
        if(index2 > cmsltbTMBoxIAlla.length-1){
            index2 = 0;
            cmsltbrMapShowBoxC.style.marginLeft = -520*(index2+1)+"px";
        }else if(index2 < 0){
            index2 = (cmsltbTMBoxIAlla.length-1);
            cmsltbrMapShowBoxC.style.marginLeft = -520*(index2+1)+"px";
        }


        cmsltbTMBoxIAlla[index2].className = "blackA";
    }

    //自动轮播
        var autoMove1,MoveBegin1;
        function autoMoveF1 (){
            MoveBegin1 = setTimeout(function(){
                autoMove1 = setInterval(function(){
                    index2++;
                    move(cmsltbrMapShowBoxC,"marginLeft",-520*(index2+1),20,function(){
                        setA1();
                    
                        //设置文本
                       setHp();
                    });
                },3000);
            },2000)
            
        }
        autoMoveF1();
        
        cmsltbrMapShowBoxC.parentNode.onmouseenter = function(){
            clearInterval(autoMove1);
            clearTimeout(MoveBegin1);
            cmsltbTmRmapSboxPre.style.display = "block";
            cmsltbTmRmapSboxNext.style.display = "block";
        }
        cmsltbrMapShowBoxC.parentNode.onmouseleave = function(){
            autoMoveF1();
            cmsltbTmRmapSboxPre.style.display = "none";
            cmsltbTmRmapSboxNext.style.display = "none";

        }

        function setHp(){
            cmsltbTMHpP.innerHTML =" <i style='color:red;'>" +(index2+1)+ "</i>"+ "/" + cmsltbTMBoxIAlla.length ;
        }

    function move(obj,name,target,speed,callback){

        var curren = parseInt(getStyle(obj,name));
        
        speed = curren < target?speed:-speed;
    
        clearInterval(obj.time);
    
        obj.time = setInterval(function(){
    
            curren = parseInt(getStyle(obj,name)); //持续的更新 left 值
       
            obj.style[name] = (curren +speed)+"px";
            
            if((speed > 0  && curren >= target) ||(speed < 0 && curren <= target) ){
    
    
                obj.style[name] = target+"px";
        
                clearInterval(obj.time);
                   callback && callback();
                    
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

   

    
      
        
        
    

    
    

 
    

        





};