document.getElementById('yes').onclick = function () {
    noti()
}
function noti() {
    alert("Yes, i do love you")
}

document.getElementById('no').onmouseover = function(){
    reject()
}
function reject(){
    let width = Math.random()*window.innerWidth
    let height = Math.random()*window.innerHeight
    document.getElementById('no').style.left = width + 'px'
    document.getElementById('no').style.top = height + 'px'

}