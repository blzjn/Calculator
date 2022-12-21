function clickButton(val){

    document.getElementById('screen').value+=val

}

function clearValue(){
    document.getElementById('screen').value=''
}
function equals(){
    text=document.getElementById('screen').value
    result=eval(text)
    document.getElementById('screen').value=result
}