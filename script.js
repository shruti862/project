let buttons=document.querySelector('.button');
let btn=buttons.querySelectorAll('span');
let result=document.getElementById('value');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        if(this.innerHTML=='='){
            result.innerHTML=eval(result.innerHTML);
        }
        else{
            if(this.innerHTML=='Clear'){
                result.innerHTML=" ";
            }
            else{
                result.innerHTML+=this.innerHTML;
            }
        }
    })
}

/*Pointer Visual Effect*/
let curs=document.querySelector('.cursor');
curs.addEventListener('mousemove',function(e){
          let x=e.clientX;
          let y=e.clientY;
          curs.style.top=`${y}px`;
          curs.style.left=`${x}px`;
          curs.style.display="block";
          function mouseStopped(){
            curs.style.display="none";
          }
          setTimeout(mouseStopped,1000);
})
document.addEventListener('mouseout',()=>{
    curs.style.display="none";
})