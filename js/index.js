window.onload=function(){
    var data=[
        {translateX:'-750px',translateZ:'-350px',zIndex:1},
        {translateX:'-350px',translateZ:'-200px',zIndex:3},
        {translateX:'0',translateZ:'0',zIndex:5},
        {translateX:'350px',translateZ:'-200px',zIndex:3},
        {translateX:'750px',translateZ:'-350px',zIndex:1}
    ];
    var els=document.getElementsByClassName('mian');
    var donghua=function(){
        for(var i=0;i<els.length;i++){
            els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
            els[i].style.zIndex=data[i].zIndex;
        }
        data.unshift(data.pop());
    }
    setInterval(donghua,1500);
};