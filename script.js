function xato(){
    let xato = document.getElementById("xato").value;
    let xato1 = document.getElementById("xato1").value;
    let xato2 = document.getElementById("xato2").value;
    let tugri = document.getElementById("tugri").value;
    let tugri1 = document.getElementById("tugri1").value;
    let tugri2 = document.getElementById("tugri2").value;
    let xatolar = xato + xato1 + xato2;
    let tugrilar = tugri + tugri1 + tugri2;
    if(xatolar != tugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("qayta").style.visibility = "visible";
    }
    if(xatolar == tugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("qadam_2").style.display = "block";
    }
}

function none() {
    document.getElementById('smsXato').style.display = "none";
}