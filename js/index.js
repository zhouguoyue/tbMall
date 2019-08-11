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
    console.log(searchlists);
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
        };
        
    }
  
    var qrCode = document.getElementsByClassName("qr-code")[0];
    var closeX = qrCode.querySelector(".closeX");
    closeX.onclick = function(){
        qrCode.style.display = "none";
    }


    

        





};