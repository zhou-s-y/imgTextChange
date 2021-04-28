/* rubbish
var smallImg = document.getElementById("smallImg");
smallImg.onclick = function () {
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
}

var close = document.getElementsByClassName("close");
close[0].onclick = function () {
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
}
*/
var smallImg = document.getElementsByClassName("smallImg");
for(let i=0;i<smallImg.length;i++){
    smallImg[i].onclick = function () {
        document.getElementsByClassName('innerBox')[i].style.display = 'block';
        document.getElementById('outerBox').style.display = 'block';
    }
}

var close = document.getElementsByClassName("close");
for(let i=0;i<smallImg.length;i++){
    close[i].onclick = function () {
        document.getElementsByClassName('innerBox')[i].style.display = 'none';
        document.getElementById('outerBox').style.display = 'none';
    }
}
var page = document.getElementsByClassName('news');
var button1 = document.querySelectorAll("#right div:first-child li");
page[0].style.display = 'block';
for(let i=0;i<button1.length;i++){
    button1[i].onclick=function(){
        page[0].style.display = 'none';
        page[1].style.display = 'none';
        page[2].style.display = 'none';
        page[i].style.display = 'block';
    }
}


