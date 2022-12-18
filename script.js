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

let datafortopcategories=["https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Women-Desk-Category-Banner2-14Oct22.jpg","https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner2-14Oct22.jpg","https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner1-14Oct22.jpg","https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Shoes&Bags-Desk-Category-Banner1-14Oct22.jpg","https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner2-14Oct22.jpg"];


for(let i=0;i<6;i++){
    categoryname.innerText="Women";
let div=document.createElement("div");
let myimg=document.createElement("img");
myimg.setAttribute("src",datafortopcategories[0]);
let mytitle=document.createElement("h4");
mytitle.innerText="Tops & Tees";
div.append(myimg,mytitle);

categoryimage.append(div);

}

womenbtn.addEventListener("click",function(){
    categoryimage.innerHTML=null;

    for(let i=0;i<6;i++){
        categoryname.innerText="Women";
    let div=document.createElement("div");
    let myimg=document.createElement("img");
    myimg.setAttribute("src",datafortopcategories[0]);
    let mytitle=document.createElement("h4");
    mytitle.innerText="Tops & Tees";
    div.append(myimg,mytitle);

    categoryimage.append(div);

    }
    





});
menbtn.addEventListener("click",function(){
    categoryimage.innerHTML=null;

    for(let i=0;i<6;i++){
        categoryname.innerText="Men";
    let div=document.createElement("div");
    let myimg=document.createElement("img");
    myimg.setAttribute("src",datafortopcategories[1]);
    let mytitle=document.createElement("h4");
    mytitle.innerText="T-Shirts";
    div.append(myimg,mytitle);

    categoryimage.append(div);

    }
    

});
kidsbtn.addEventListener("click",function(){
    categoryimage.innerHTML=null;

    for(let i=0;i<6;i++){
        categoryname.innerText="Kids";
    let div=document.createElement("div");
    let myimg=document.createElement("img");
    myimg.setAttribute("src",datafortopcategories[2]);
    let mytitle=document.createElement("h4");
    mytitle.innerText="Boys' Tees";
    div.append(myimg,mytitle);

    categoryimage.append(div);

    }
    

});
shoesandbagsbtn.addEventListener("click",function(){
    categoryimage.innerHTML=null;

    for(let i=0;i<6;i++){
        categoryname.innerText="Shoes & Bags";
    let div=document.createElement("div");
    let myimg=document.createElement("img");
    myimg.setAttribute("src",datafortopcategories[3]);
    let mytitle=document.createElement("h4");
    mytitle.innerText="Heels";
    div.append(myimg,mytitle);

    categoryimage.append(div);

    }

});
beautybtn.addEventListener("click",function(){
    categoryimage.innerHTML=null;

    for(let i=0;i<6;i++){
        categoryname.innerText="Beauty";
    let div=document.createElement("div");
    let myimg=document.createElement("img");
    myimg.setAttribute("src",datafortopcategories[4]);
    let mytitle=document.createElement("h4");
    mytitle.innerText="Face";
    div.append(myimg,mytitle);

    categoryimage.append(div);

    }

});

let categoryimage1=document.getElementById("categoryimage1");
let dataforTopDealsIn=["https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-14Dec22.jpg","https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner1-14Dec22.jpg","https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner3-14Dec22.jpg","https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner3-16Dec22.jpg","https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner1-14Dec22.jpg"];


for(let i=0;i<4;i++){
   
let div=document.createElement("div");
let myimg=document.createElement("img");
myimg.setAttribute("src",dataforTopDealsIn[0]);

div.append(myimg);

categoryimage1.append(div);

}

womenbtn1.addEventListener("click",function(){
    categoryimage1.innerHTML=null;

    for(let i=0;i<4;i++){
   
        let div=document.createElement("div");
        let myimg=document.createElement("img");
        myimg.setAttribute("src",dataforTopDealsIn[0]);
        
        div.append(myimg);
        
        categoryimage1.append(div);
        
        }
    





});
menbtn1.addEventListener("click",function(){
    categoryimage1.innerHTML=null;

    for(let i=0;i<4;i++){
   
        let div=document.createElement("div");
        let myimg=document.createElement("img");
        myimg.setAttribute("src",dataforTopDealsIn[1]);
        
        div.append(myimg);
        
        categoryimage1.append(div);
        
        }
    


});
kidsbtn1.addEventListener("click",function(){
    categoryimage1.innerHTML=null;

    for(let i=0;i<4;i++){
   
        let div=document.createElement("div");
        let myimg=document.createElement("img");
        myimg.setAttribute("src",dataforTopDealsIn[2]);
        
        div.append(myimg);
        
        categoryimage1.append(div);
        
    }
    


});
shoesandbagsbtn1.addEventListener("click",function(){
    categoryimage1.innerHTML=null;

    for(let i=0;i<4;i++){
   
        let div=document.createElement("div");
        let myimg=document.createElement("img");
        myimg.setAttribute("src",dataforTopDealsIn[3]);
        
        div.append(myimg);
        
        categoryimage1.append(div);
        
        }
    


});
beautybtn1.addEventListener("click",function(){
    categoryimage1.innerHTML=null;

    for(let i=0;i<4;i++){
   
        let div=document.createElement("div");
        let myimg=document.createElement("img");
        myimg.setAttribute("src",dataforTopDealsIn[4]);
        
        div.append(myimg);
        
        categoryimage1.append(div);
        
        }
    


});

