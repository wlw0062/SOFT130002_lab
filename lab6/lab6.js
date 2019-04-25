window.onload = function changeImage(){
    let smallImages = document.getElementById("thumbnails").getElementsByTagName("img");
    let bigImages = document.getElementById("featured").getElementsByTagName("img");
    let imageName = document.getElementById("featured").getElementsByTagName("figcaption");
    for (let i=0;i<smallImages.length;i++){
        smallImages[i].onclick = function () {
            bigImages[0].src = this.src.replace("small","medium");
            bigImages[0].title = this.title;
            imageName[0].innerText = this.title;
        }
    }
    document.getElementById("featured").onmouseover = function () {
        startMove(0,80);
    };
    document.getElementById("featured").onmouseout = function () {
        startMove(80,0);
    }
};

function startMove(alpha,target){
    let timer = null;
    let speed = 1;
    let nameDiv = document.getElementById("featured").getElementsByTagName("figcaption");
    clearInterval(timer);
    timer = setInterval(
        function () {
            if (alpha<target){
                speed = 2;
            }
            else{
                speed = -2;
            }
            if (alpha===target){
                clearInterval(timer);
            }
            else {
                alpha = alpha + speed;
                nameDiv[0].style.opacity = alpha/100;
                nameDiv[0].style.filter = 'alpha(opacity='+alpha+')';
            }
        }, 10);
}