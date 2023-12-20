function press(val){
    document.getElementById("a").value +=val;

}
function clr(){
    document.getElementById("a").value= "  ";

}
function result(){
    var x=document.getElementById("a").value;
    var y=eval(x)
    document.getElementById("a").value=y;

}
function backspace() {
    var display = document.getElementById("a");
    display.value = display.value.slice(0, -1);
}