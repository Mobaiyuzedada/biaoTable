
window.myBtn={
    boot,
}
// document.write("<script language=javascript src='C:/Users/28933/Desktop/biao-class/project/0001-dynamicLoadCss/dynamicLoadCss.js'></script>");

function boot(selec){
    let url="./css/btn.css";
    changeBtnStyle();
    dynamicLoadCss(url);
}

function changeBtnStyle(selec=document){
    let btn=selec.querySelectorAll('button');
    btn.forEach(it=>{
        it.classList.add('my-btn');
    })
}
// dynamicLoadCss(url);
function dynamicLoadCss(url){
    var head=document.getElementsByTagName('head')[0];
    let link=document.createElement('link');

    
    link.type='text/css';
    link.rel='stylesheet';
    link.href=url;
    head.appendChild(link);
}