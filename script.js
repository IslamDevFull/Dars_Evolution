function xato(){
    let xatolar = document.getElementById("xato").value;
    let tugrilar = document.getElementById("tugri").value; 
    if(xatolar != tugrilar){
        document.getElementById("smsXato").style.visibility = "visible";
    }
    if(xatolar == tugrilar){
        document.getElementById("smsTugri").style.visibility = "visible";
    }
}