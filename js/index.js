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
    console.log(cmslRunMaps);
    
    cmslRunMapPre.onclick = function(){
       
        cmslRunMaps.style.marginLeft = (cmslRunMaps.offsetLeft - 520) +"px";
        if(parseInt(cmslRunMaps.style.marginLeft)  <= -2080){
            cmslRunMaps.style.marginLeft = 0+"px";
        }
    };
    cmslRunMapNext.onclick = function(){
        cmslRunMaps.style.marginLeft = (cmslRunMaps.offsetLeft + 520) +"px";
        
        if(parseInt(cmslRunMaps.style.marginLeft)  >= 520){
            cmslRunMaps.style.marginLeft = -1560+"px";
        }
    };


    
      
        
        
    

    
    

 
    

        





};