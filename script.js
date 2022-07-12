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
function preXato(){
    let preXato = document.getElementById("preXato").value;
    let preXato1 = document.getElementById("preXato1").value;
    let preTugri = document.getElementById("preTugri").value;
    let preTugri1 = document.getElementById("preTugri1").value;
    let preXatolar = preXato + preXato1;
    let preTugrilar = preTugri + preTugri1;
    if(preXatolar != preTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("preQayta").style.visibility = "visible";
    }
    if(preXatolar == preTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("pre9").style.display = "block";
        document.getElementById("vaz_2").style.display = "block";
    }
}
function aXato(){
    let aXato = document.getElementById("aXato").value;
    let aXato1 = document.getElementById("aXato1").value;
    let aXato2 = document.getElementById("aXato2").value;
    let aXato3 = document.getElementById("aXato3").value;
    let aTugri = document.getElementById("aTugri").value;
    let aTugri1 = document.getElementById("aTugri1").value;
    let aTugri2 = document.getElementById("aTugri2").value;
    let aTugri3 = document.getElementById("aTugri3").value;
    let aXatolar = aXato + aXato1 + aXato2 + aXato3;
    let aTugrilar = aTugri + aTugri1 + aTugri2 + aTugri3;
    if(aXatolar != aTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("aQayta").style.visibility = "visible";
    }
    if(aXatolar == aTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("a11").style.display = "block";
        document.getElementById("vaz_2").style.display = "block";
    }
}
function imgXato(){
    let imgXato = document.getElementById("imgXato").value;
    let imgXato1 = document.getElementById("imgXato1").value;
    let imgXato2 = document.getElementById("imgXato2").value;
    let imgTugri = document.getElementById("imgTugri").value;
    let imgTugri1 = document.getElementById("imgTugri1").value;
    let imgTugri2 = document.getElementById("imgTugri2").value;
    let imgXatolar = imgXato + imgXato1 + imgXato2;
    let imgTugrilar = imgTugri + imgTugri1 + imgTugri2;
    if(imgXatolar != imgTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("imgQayta").style.visibility = "visible";
    }
    if(imgXatolar == imgTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("img12").style.display = "block";
        document.getElementById("vaz_2").style.display = "block";
    }
}
function ulXato(){
    let ulXato = document.getElementById("ulXato").value;
    let ulXato1 = document.getElementById("ulXato1").value;
    let ulXato2 = document.getElementById("ulXato2").value;
    let ulXato3 = document.getElementById("ulXato3").value;
    let ulXato4 = document.getElementById("ulXato4").value;
    let ulXato5 = document.getElementById("ulXato5").value;
    let ulXato6 = document.getElementById("ulXato6").value;
    let ulXato7 = document.getElementById("ulXato7").value;
    let ulTugri = document.getElementById("ulTugri").value;
    let ulTugri1 = document.getElementById("ulTugri1").value;
    let ulTugri2 = document.getElementById("ulTugri2").value;
    let ulTugri3 = document.getElementById("ulTugri3").value;
    let ulTugri4 = document.getElementById("ulTugri4").value;
    let ulTugri5 = document.getElementById("ulTugri5").value;
    let ulTugri6 = document.getElementById("ulTugri6").value;
    let ulTugri7 = document.getElementById("ulTugri7").value;
    let ulXatolar = ulXato + ulXato1 + ulXato2 + ulXato3 + ulXato4 + ulXato5 + ulXato6 + ulXato7;
    let ulTugrilar = ulTugri + ulTugri1 + ulTugri2 + ulTugri3 + ulTugri4 + ulTugri5 + ulTugri6 + ulTugri7;
    if(ulXatolar != ulTugrilar){
        document.getElementById("smsXato").style.display = "block";
        document.getElementById("ulQayta").style.visibility = "visible";
    }
    if(ulXatolar == ulTugrilar){
        document.getElementById("smsTugri").style.display = "block";
        document.getElementById("ul14").style.display = "block";
        document.getElementById("vaz_2").style.display = "block";
    }
}