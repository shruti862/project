let buttons=document.querySelector('.button');
let btn=buttons.querySelectorAll('span');
let result=document.getElementById('value');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(e){
        if(e.target.innerHTML=='='){
            result.innerHTML=eval(e.target.innerHTML);
        }
        else{
            if(e.target.innerHTML=='Clear'){
                result.innerHTML='';
            }
            else{
                result.innerHTML+=e.target.innerHTML;
            }
        }
    })
}