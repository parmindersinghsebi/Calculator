let screen=document.getElementById('screen');
const buttons=document.querySelectorAll('button');
let screenvalue='';
let screenvalue2='';
let flag=0;
for(let i of buttons){
    i.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        if(buttontext=='X'){
            buttontext='*';
            if(flag==1){
                screen.value=buttontext;
                flag=0;
            }
            else{
            screen.value+=buttontext;}
            screenvalue=screen.value;
        }
       
        else if(buttontext=='C'){
            screen.value='';
            screenvalue=screen.value;
        }
       else if(buttontext=='='){
          if(flag==0) {screen.value=eval(screenvalue);
           flag=1;}
       }
       else{
        if(flag==1){
            screen.value=buttontext;
            flag=0;
        }
        else{
        screen.value+=buttontext;}
        screenvalue=screen.value;
       }}
    )
}