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

function btn(){
    document.getElementById('dis').style.display = 'block'
    document.getElementById('btn1').style.display = 'block'
}
function btn1(){
    document.getElementById('dis1').style.display = 'block'
    document.getElementById('btn2').style.display = 'block'
}
function btn2(){
    document.getElementById('dis2').style.display = 'block'
    document.getElementById('btn3').style.display = 'block'
}
function btn3(){
    document.getElementById('dis3').style.display = 'block'
    document.getElementById('btn4').style.display = 'block'
}
function btn4(){
    document.getElementById('dis4').style.display = 'block'
    document.getElementById('btn5').style.display = 'block'
}
function btn5(){
    document.getElementById('dis5').style.display = 'block'
}

function pXato(){
    let pXato = document.getElementById("pXato").value;
    let pXato1 = document.getElementById("pXato1").value;
    let pXato2 = document.getElementById("pXato2").value;
    let pTugri = document.getElementById("pTugri").value;
    let pTugri1 = document.getElementById("pTugri1").value;
    let pTugri2 = document.getElementById("pTugri2").value;
    let pXatolar = pXato + pXato1 + pXato2;
    let pTugrilar = pTugri + pTugri1 + pTugri2;
    if(pXatolar != pTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("pQayta").style.visibility = "visible";
    }
    if(pXatolar == pTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("qadam_2").style.display = "block";
    }
}
function pNone() {
    document.getElementById('smsXato').style.display = "none";
}