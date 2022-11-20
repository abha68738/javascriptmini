const calculator=document.querySelector('.calculator')
const keys=calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e=>{
    if(e.target.matches('button')){
        //do someting
        const key=e.target
        const action=key.dataset.action
        const keyContent=key.textContent
        const displayedNum=key.textContent
        if(!action){
            if(displayedNum==='0'){
                displayedNum.textContent=keyContent
            }else{
                displayedNum.textContent=displayedNum+keyContent
            }
        }
        

if(!action){
    console.log('number key!')
}
if(
    action==='add'||action==='subtract'||action==='multipy'||action==='divide'
){
    console.log('operator keys!')
}
if(action==='decimal'){
    console.log('decimal key!')
}
if(action==='clear'){
    console.log('clear key!')
}
if(action==='calculate'){
    console.log('equal key!')
}
    }
})
