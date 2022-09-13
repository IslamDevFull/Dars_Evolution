/********************************* Mavzu_1 ******************************************************/
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
function imgOn_1(){
    document.getElementById("images_1").style.display = "block";
    document.getElementById("bodi").style.backgroundColor = "rgba(0,0,0,0.5)";
}
function imgOn_2(){
    document.getElementById("images_2").style.display = "block";
    document.getElementById("bodi").style.backgroundColor = "rgba(0,0,0,0.5)";
}
function imgOn_3(){
    document.getElementById("images_3").style.display = "block";
    document.getElementById("bodi").style.backgroundColor = "rgba(0,0,0,0.5)";
}
function imgOn_4(){
    document.getElementById("images_4").style.display = "block";
    document.getElementById("bodi").style.backgroundColor = "rgba(0,0,0,0.5)";
}
function imgOn_5(){
    document.getElementById("images_5").style.display = "block";
    document.getElementById("bodi").style.backgroundColor = "rgba(0,0,0,0.5)";
}
function imgOn_6(){
    document.getElementById("images_6").style.display = "block";
    document.getElementById("bodi").style.backgroundColor = "rgba(0,0,0,0.5)";
}
function imgOff(){
    document.getElementById("images").style.display = "none";
    document.getElementById("images_1").style.display = "none";
    document.getElementById("images_2").style.display = "none";
    document.getElementById("images_3").style.display = "none";
    document.getElementById("images_4").style.display = "none";
    document.getElementById("images_5").style.display = "none";
    document.getElementById("images_6").style.display = "none";
    document.getElementById("bodi").style.backgroundColor = "#e9e9e9";
}
/********************************* Mavzu_2 ******************************************************/
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
        document.getElementById("izoh").style.display = "block";
    }
}
function izohXato(){
    let izohXato = document.getElementById("izohXato").value;
    let izohXato1 = document.getElementById("izohXato1").value;
    let izohTugri = document.getElementById("izohTugri").value;
    let izohTugri1 = document.getElementById("izohTugri1").value;
    let izohXatolar = izohXato + izohXato1;
    let izohTugrilar = izohTugri + izohTugri1;
    if(izohXatolar != izohTugrilar){
        document.getElementById("smsIzohXato").style.display = "block";
        document.getElementById("izohQayta").style.visibility = "visible";
    }
    if(izohXatolar == izohTugrilar){
        document.getElementById("smsIzohTugri").style.display = "block";
        document.getElementById("p_vazifa").style.display = "block";
    }
}
function izohNone() {
    document.getElementById('smsIzohXato').style.display = "none";
}
/******************************************* Mavzu_3 ******************************************************/
function docXato(){
    let docXato = document.getElementById("docXato").value;
    let docTugri = document.getElementById("docTugri").value;
    if(docXato != docTugri){
        document.getElementById("smsDocXato").style.display = "block";
        document.getElementById("docQayta").style.visibility = "visible";
    }
    if(docXato == docTugri){
        document.getElementById("smsDocTugri").style.display = "block";
        document.getElementById("html").style.display = "block";
    }
}
function docNone() {
    document.getElementById('smsDocXato').style.display = "none";
}
function htmlXato(){
    let htmlXato = document.getElementById("htmlXato").value;
    let htmlXato1 = document.getElementById("htmlXato1").value;
    let htmlTugri = document.getElementById("htmlTugri").value;
    let htmlTugri1 = document.getElementById("htmlTugri1").value;
    let htmlXatolar = htmlXato + htmlXato1;
    let htmlTugrilar = htmlTugri + htmlTugri1;
    if(htmlXatolar != htmlTugrilar){
        document.getElementById("smsHtmlXato").style.display = "block";
        document.getElementById("htmlQayta").style.visibility = "visible";
    }
    if(htmlXatolar == htmlTugrilar){
        document.getElementById("smsHtmlTugri").style.display = "block";
        document.getElementById("head").style.display = "block";
    }
}
function htmlNone() {
    document.getElementById('smsHtmlXato').style.display = "none";
}
function headXato(){
    let headXato = document.getElementById("headXato").value;
    let headXato1 = document.getElementById("headXato1").value;
    let headTugri = document.getElementById("headTugri").value;
    let headTugri1 = document.getElementById("headTugri1").value;
    let headXatolar = headXato + headXato1;
    let headTugrilar = headTugri + headTugri1;
    if(headXatolar != headTugrilar){
        document.getElementById("smsHeadXato").style.display = "block";
        document.getElementById("headQayta").style.visibility = "visible";
    }
    if(headXatolar == headTugrilar){
        document.getElementById("smsHeadTugri").style.display = "block";
        document.getElementById("title").style.display = "block";
    }
}
function headNone() {
    document.getElementById('smsHeadXato').style.display = "none";
}
function titleXato(){
    let titleXato = document.getElementById("titleXato").value;
    let titleXato1 = document.getElementById("titleXato1").value;
    let titleTugri = document.getElementById("titleTugri").value;
    let titleTugri1 = document.getElementById("titleTugri1").value;
    let titleXatolar = titleXato + titleXato1;
    let titleTugrilar = titleTugri + titleTugri1;
    if(titleXatolar != titleTugrilar){
        document.getElementById("smsTitleXato").style.display = "block";
        document.getElementById("titleQayta").style.visibility = "visible";
    }
    if(titleXatolar == titleTugrilar){
        document.getElementById("smsTitleTugri").style.display = "block";
        document.getElementById("body").style.display = "block";
    }
}
function titleNone() {
    document.getElementById('smsTitleXato').style.display = "none";
}
function bodyXato(){
    let bodyXato = document.getElementById("bodyXato").value;
    let bodyXato1 = document.getElementById("bodyXato1").value;
    let bodyTugri = document.getElementById("bodyTugri").value;
    let bodyTugri1 = document.getElementById("bodyTugri1").value;
    let bodyXatolar = bodyXato + bodyXato1;
    let bodyTugrilar = bodyTugri + bodyTugri1;
    if(bodyXatolar != bodyTugrilar){
        document.getElementById("smsBodyXato").style.display = "block";
        document.getElementById("bodyQayta").style.visibility = "visible";
    }
    if(bodyXatolar == bodyTugrilar){
        document.getElementById("smsBodyTugri").style.display = "block";
        document.getElementById("mashq").style.display = "block";
    }
}
function bodyNone() {
    document.getElementById('smsBodyXato').style.display = "none";
}
function vazifaXato(){
    let docVazifaXato = document.getElementById("docVazifaXato").value;
    let htmlVazifaXato = document.getElementById("htmlVazifaXato").value;
    let headVazifaXato = document.getElementById("headVazifaXato").value;
    let titleVazifaXato = document.getElementById("titleVazifaXato").value;
    let titleVazifaXato1 = document.getElementById("titleVazifaXato1").value;
    let headVazifaXato1 = document.getElementById("headVazifaXato1").value;
    let bodyVazifaXato = document.getElementById("bodyVazifaXato").value;
    let bodyVazifaXato1 = document.getElementById("bodyVazifaXato1").value;
    let htmlVazifaXato1 = document.getElementById("htmlVazifaXato1").value;
    let docVazifaTugri = document.getElementById("docVazifaTugri").value;
    let htmlVazifaTugri = document.getElementById("htmlVazifaTugri").value;
    let headVazifaTugri = document.getElementById("headVazifaTugri").value;
    let titleVazifaTugri = document.getElementById("titleVazifaTugri").value;
    let titleVazifaTugri1 = document.getElementById("titleVazifaTugri1").value;
    let headVazifaTugri1 = document.getElementById("headVazifaTugri1").value;
    let bodyVazifaTugri = document.getElementById("bodyVazifaTugri").value;
    let bodyVazifaTugri1 = document.getElementById("bodyVazifaTugri1").value;
    let htmlVazifaTugri1 = document.getElementById("htmlVazifaTugri1").value;
    let vazifaXatolar = docVazifaXato + htmlVazifaXato + headVazifaXato + titleVazifaXato + titleVazifaXato1 + headVazifaXato1 + bodyVazifaXato + bodyVazifaXato1 + htmlVazifaXato1;
    let vazifaTugrilar = docVazifaTugri + htmlVazifaTugri + headVazifaTugri + titleVazifaTugri + titleVazifaTugri1 + headVazifaTugri1 + bodyVazifaTugri + bodyVazifaTugri1 + htmlVazifaTugri1;
    if(vazifaXatolar != vazifaTugrilar){
        document.getElementById("smsVazifaXato").style.display = "block";
        document.getElementById("vazifaQayta").style.visibility = "visible";
    }
    if(vazifaXatolar == vazifaTugrilar){
        document.getElementById("smsVazifaTugri").style.display = "block";
        document.getElementById("next").style.display = "block";
    }
}
function vazifaNone() {
    document.getElementById('smsVazifaXato').style.display = "none";
}
/********************************* Mavzu_4 ******************************************************/
function brXato(){
    let brXato = document.getElementById("brXato").value;
    let brTugri = document.getElementById("brTugri").value;
    if(brXato != brTugri){
        document.getElementById("smsBrXato").style.display = "block";
        document.getElementById("brQayta").style.visibility = "visible";
    }
    if(brXato == brTugri){
        document.getElementById("smsBrTugri").style.display = "block";
        document.getElementById("hr").style.display = "block";
    }
}
function brNone() {
    document.getElementById('smsBrXato').style.display = "none";
}
function hrXato(){
    let hrXato = document.getElementById("hrXato").value;
    let hrTugri = document.getElementById("hrTugri").value;
    if(hrXato != hrTugri){
        document.getElementById("smsHrXato").style.display = "block";
        document.getElementById("hrQayta").style.visibility = "visible";
    }
    if(hrXato == hrTugri){
        document.getElementById("smsHrTugri").style.display = "block";
        document.getElementById("br4").style.display = "block";
    }
}
function hrNone() {
    document.getElementById('smsHrXato').style.display = "none";
}
/******************************************* Mavzu_5 ******************************************************/
function bXato(){
    let bXato = document.getElementById("bXato").value;
    let bXato1 = document.getElementById("bXato1").value;
    let bTugri = document.getElementById("bTugri").value;
    let bTugri1 = document.getElementById("bTugri1").value;
    let bXatolar = bXato + bXato1;
    let bTugrilar = bTugri + bTugri1;
    if(bXatolar != bTugrilar){
        document.getElementById("smsBXato").style.display = "block";
        document.getElementById("bQayta").style.visibility = "visible";
    }
    if(bXatolar == bTugrilar){
        document.getElementById("smsBTugri").style.display = "block";
        document.getElementById("strong").style.display = "block";
    }
}
function bNone() {
    document.getElementById('smsBXato').style.display = "none";
}
function strongXato(){
    let strongXato = document.getElementById("strongXato").value;
    let strongXato1 = document.getElementById("strongXato1").value;
    let strongTugri = document.getElementById("strongTugri").value;
    let strongTugri1 = document.getElementById("strongTugri1").value;
    let strongXatolar = strongXato + strongXato1;
    let strongTugrilar = strongTugri + strongTugri1;
    if(strongXatolar != strongTugrilar){
        document.getElementById("smsStrongXato").style.display = "block";
        document.getElementById("strongQayta").style.visibility = "visible";
    }
    if(strongXatolar == strongTugrilar){
        document.getElementById("smsStrongTugri").style.display = "block";
        document.getElementById("ich").style.display = "block";
    }
}
function strongNone() {
    document.getElementById('smsStrongXato').style.display = "none";
}
function ichXato(){
    let ichXato = document.getElementById("ichXato").value;
    let ichXato1 = document.getElementById("ichXato1").value;
    let ichXato2 = document.getElementById("ichXato2").value;
    let ichXato3 = document.getElementById("ichXato3").value;
    let ichTugri = document.getElementById("ichTugri").value;
    let ichTugri1 = document.getElementById("ichTugri1").value;
    let ichTugri2 = document.getElementById("ichTugri2").value;
    let ichTugri3 = document.getElementById("ichTugri3").value;
    let ichXatolar = ichXato + ichXato1 + ichXato2 + ichXato3;
    let ichTugrilar = ichTugri + ichTugri1 + ichTugri2 + ichTugri3;
    if(ichXatolar != ichTugrilar){
        document.getElementById("smsIchXato").style.display = "block";
        document.getElementById("ichQayta").style.visibility = "visible";
    }
    if(ichXatolar == ichTugrilar){
        document.getElementById("smsIchTugri").style.display = "block";
        document.getElementById("bVazifa").style.display = "block";
    }
}
function ichNone() {
    document.getElementById('smsIchXato').style.display = "none";
}
/********************************* Mavzu_6 ******************************************************/
function iXato(){
    let iXato = document.getElementById("iXato").value;
    let iXato1 = document.getElementById("iXato1").value;
    let iTugri = document.getElementById("iTugri").value;
    let iTugri1 = document.getElementById("iTugri1").value;
    let iXatolar = iXato + iXato1;
    let iTugrilar = iTugri + iTugri1;
    if(iXatolar != iTugrilar){
        document.getElementById("smsIXato").style.display = "block";
        document.getElementById("iQayta").style.visibility = "visible";
    }
    if(iXatolar == iTugrilar){
        document.getElementById("smsITugri").style.display = "block";
    }
}
function inone() {
    document.getElementById("smsIXato").style.display = "none";
}
function emXato(){
    let emXato = document.getElementById("emXato").value;
    let emXato1 = document.getElementById("emXato1").value;
    let emTugri = document.getElementById("emTugri").value;
    let emTugri1 = document.getElementById("emTugri1").value;
    let emXatolar = emXato + emXato1;
    let emTugrilar = emTugri + emTugri1;
    if(emXatolar != emTugrilar){
        document.getElementById("smsEmXato").style.display = "block";
        document.getElementById("emQayta").style.visibility = "visible";
    }
    if(emXatolar == emTugrilar){
        document.getElementById("smsEmTugri").style.display = "block";
    }
}
function emNone() {
    document.getElementById('smsEmXato').style.display = "none";
}
/********************************* Mavzu_6 ******************************************************/
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
/********************************* Mavzu_7 ******************************************************/
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
/********************************* Mavzu_8 ******************************************************/
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
/********************************* Mavzu_9 ******************************************************/
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
/********************************* Mavzu_10 ******************************************************/
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
/********************************* Mavzu_11 ******************************************************/
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
/********************************* Mavzu_12 ******************************************************/
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
/********************************* Mavzu_13 ******************************************************/
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