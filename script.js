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

