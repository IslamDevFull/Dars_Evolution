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
    document.getElementById('dis').style.display = 'block';
    document.getElementById('btn1').style.display = 'block';
}
function btn1(){
    document.getElementById('dis1').style.display = 'block';
    document.getElementById('btn2').style.display = 'block';
}
function btn2(){
    document.getElementById('dis2').style.display = 'block';
    document.getElementById('btn3').style.display = 'block';
}
function btn3(){
    document.getElementById('dis3').style.display = 'block';
    document.getElementById('btn4').style.display = 'block';
}
function btn4(){
    document.getElementById('dis4').style.display = 'block';
    document.getElementById('btn5').style.display = 'block';
}
function btn5(){
    document.getElementById('dis5').style.display = 'block';
    document.getElementById('btn6').style.display = 'block';
}
function btn6(){
    document.getElementById('dis6').style.display = 'block';
    document.getElementById('btn7').style.display = 'block';
}
function btn7(){
    document.getElementById('dis7').style.display = 'block';
    document.getElementById('davom').style.display = 'block';
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
        document.getElementById("p2").style.display = "block";
    }
}
function pNone() {
    document.getElementById('smsXato').style.display = "none";
}
function bXato(){
    let bXato = document.getElementById("bXato").value;
    let bXato2 = document.getElementById("bXato2").value;
    let bTugri = document.getElementById("bTugri").value;
    let bTugri2 = document.getElementById("bTugri2").value;
    let bXatolar = bXato + bXato2;
    let bTugrilar = bTugri + bTugri2;
    if(bXatolar != bTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("bQayta").style.visibility = "visible";
    }
    if(bXatolar == bTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("b3").style.display = "block";
    }
}
function bNone() {
    document.getElementById('smsXato').style.display = "none";
}
function brXato(){
    let brXato = document.getElementById("brXato").value;
    let brXato1 = document.getElementById("brXato1").value;
    let brTugri = document.getElementById("brTugri").value;
    let brTugri1 = document.getElementById("brTugri1").value;
    let brXatolar = brXato + brXato1;
    let brTugrilar = brTugri + brTugri1;
    if(brXatolar != brTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("brQayta").style.visibility = "visible";
    }
    if(brXatolar == brTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("br4").style.display = "block";
    }
}