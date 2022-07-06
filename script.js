function xato(){
    let xato = document.getElementById("xato").value;
    let xato1 = document.getElementById("xato1").value;
    let tugri = document.getElementById("tugri").value;
    let tugri1 = document.getElementById("tugri1").value;
    let xatolar = xato + xato1;
    let tugrilar = tugri + tugri1;
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
function imgOn(){
    document.getElementById("images").style.display = "block";
    document.getElementById("bodi").style.backgroundColor = "rgba(0,0,0,0.5)";
}
function imgOff(){
    document.getElementById("images").style.display = "none";
    document.getElementById("bodi").style.backgroundColor = "#e9e9e9";
    document.getElementById("bodi").style.cursor = "zoom-out";

}
function pXato(){
    let pXato = document.getElementById("pXato").value;
    let pXato1 = document.getElementById("pXato1").value;
    let pTugri = document.getElementById("pTugri").value;
    let pTugri1 = document.getElementById("pTugri1").value;
    let pXatolar = pXato + pXato1;
    let pTugrilar = pTugri + pTugri1;
    if(pXatolar != pTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("pQayta").style.visibility = "visible";
    }
    if(pXatolar == pTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("p2").style.display = "block";
    }
}
function bXato(){
    let bXato = document.getElementById("bXato").value;
    let bXato1 = document.getElementById("bXato1").value;
    let bTugri = document.getElementById("bTugri").value;
    let bTugri1 = document.getElementById("bTugri1").value;
    let bXatolar = bXato + bXato1;
    let bTugrilar = bTugri + bTugri1;
    if(bXatolar != bTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("bQayta").style.visibility = "visible";
    }
    if(bXatolar == bTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("b3").style.display = "block";
        document.getElementById("b3_1").style.display = "block";
    }
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
function iXato(){
    let iXato = document.getElementById("iXato").value;
    let iXato1 = document.getElementById("iXato1").value;
    let iTugri = document.getElementById("iTugri").value;
    let iTugri1 = document.getElementById("iTugri1").value;
    let iXatolar = iXato + iXato1;
    let iTugrilar = iTugri + iTugri1;
    if(iXatolar != iTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("iQayta").style.visibility = "visible";
    }
    if(iXatolar == iTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("i5").style.display = "block";
    }
}
function markXato(){
    let markXato = document.getElementById("markXato").value;
    let markXato1 = document.getElementById("markXato1").value;
    let markTugri = document.getElementById("markTugri").value;
    let markTugri1 = document.getElementById("markTugri1").value;
    let markXatolar = markXato + markXato1;
    let markTugrilar = markTugri + markTugri1;
    if(markXatolar != markTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("markQayta").style.visibility = "visible";
    }
    if(markXatolar == markTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("mark6").style.display = "block";
    }
}
function sXato(){
    let sXato = document.getElementById("sXato").value;
    let sXato1 = document.getElementById("sXato1").value;
    let sTugri = document.getElementById("sTugri").value;
    let sTugri1 = document.getElementById("sTugri1").value;
    let sXatolar = sXato + sXato1;
    let sTugrilar = sTugri + sTugri1;
    if(sXatolar != sTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("sQayta").style.visibility = "visible";
    }
    if(sXatolar == sTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("s7").style.display = "block";
    }
}
function uXato(){
    let uXato = document.getElementById("uXato").value;
    let uXato1 = document.getElementById("uXato1").value;
    let uTugri = document.getElementById("uTugri").value;
    let uTugri1 = document.getElementById("uTugri1").value;
    let uXatolar = uXato + uXato1;
    let uTugrilar = uTugri + uTugri1;
    if(uXatolar != uTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("uQayta").style.visibility = "visible";
    }
    if(uXatolar == uTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("u8").style.display = "block";
    }
}
function smallXato(){
    let smallXato = document.getElementById("smallXato").value;
    let smallXato1 = document.getElementById("smallXato1").value;
    let smallTugri = document.getElementById("smallTugri").value;
    let smallTugri1 = document.getElementById("smallTugri1").value;
    let smallXatolar = smallXato + smallXato1;
    let smallTugrilar = smallTugri + smallTugri1;
    if(smallXatolar != smallTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("smallQayta").style.visibility = "visible";
    }
    if(smallXatolar == smallTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("small9").style.display = "block";
        document.getElementById("vaz_2").style.display = "block";
    }
}
function smallCol_2(){
    document.getElementById("small9_1").style.display = "block";
}