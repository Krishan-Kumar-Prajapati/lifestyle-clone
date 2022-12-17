let slideshow=document.getElementById("slideshow");


let arrslideshow=["https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner6-14Dec2022.gif","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner3-desktop-ShoeandBags-14Dec2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner2-desktop-ShoeandBags-14Dec2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Common_Desktop-1-14Dec2022.gif","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-ShoeandBags-14Dec2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner4-desktop-ShoeandBags-14Dec2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner5-14Dec2022.jpg"];
let i=0;
setInterval(function(){
    slideshow.innerHTML=null;
    i++;
    if(i==arrslideshow.length){
        i=0;
    }
let myimg=document.createElement("img");
myimg.setAttribute("src",arrslideshow[i]);
slideshow.append(myimg);

},5000);

let categoryname=document.getElementById("categoryname");
let categoryimage=document.getElementById("categoryimage");
let womenbtn=document.getElementById("womenbtn");
let menbtn=document.getElementById("menbtn");
let kidsbtn=document.getElementById("kidsbtn");
let shoesandbagsbtn=document.getElementById("shoesandbagsbtn");
let beautybtn=document.getElementById("beautybtn");

let dataforTopCategories=["https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner2-14Oct22.jpg","https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner2-14Oct22.jpg","https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner1-14Oct22.jpg",""];

womenbtn.addEventListener("click",function(){
    categoryname.innerText="Women";


});
menbtn.addEventListener("click",function(){

});
kidsbtn.addEventListener("click",function(){

});
shoesandbagsbtn.addEventListener("click",function(){

});
beautybtn.addEventListener("click",function(){

});

