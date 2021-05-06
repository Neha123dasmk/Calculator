function bclick(val)
{
    
    document.getElementById("screen").value+=val;
    if(action==='decimal')
    {   
        
        console.log('decimal key!')
        
    }
    
}
function cleardisplay()
{
    document.getElementById("screen").value="";
}
function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function percentage()
{
    var a=Number(document.getElementById("screen").value)
    var b=Number(document.getElementById("screen").value)/100
    document.getElementById("screen").value=b
    
}
function backspace()
{
    var value=document.getElementById("screen").value
    document.getElementById("screen").value=value.substr(0, value.length - 1)
    
    
}