window.onload = function(){
    var countryA = document.querySelectorAll(".country")[0];
    var countryLists = document.querySelectorAll(".country-ls")[0];

    
    countryA.addEventListener("mouseover",function(){
        countryLists.style.display = "block";
    },false);

    countryA.addEventListener("mouseout",function(){
        countryLists.style.display = "none";
    },false);
    
    var mytb = document.querySelectorAll(".mytb")[0];
    var mytbLs = document.querySelectorAll(".mytb-lists")[0];
    mytb.addEventListener("mouseover",function(){
        mytbLs.style.display = "block";
    },false);

    mytb.addEventListener("mouseout",function(){
        mytbLs.style.display = "none";
    },false);







}