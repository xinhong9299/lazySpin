
class LoadingScreen{
    constructor(){
        this.properties = {
            overlay:'light',
            color:'red',
            speed:'normal'
        }
    }
}

LoadingScreen.prototype.addTo = function(element, id){
    let loadingScreen = createLoadingScreen(this,id)

    element.append(loadingScreen)
}

LoadingScreen.prototype.showLoading = function(id){
    document.getElementById(id).style.display = 'block'
    document.getElementById(id).animate({
        opacity:[0,1]
    }, {duration: 500, fill:"forwards"})
}

LoadingScreen.prototype.stopLoading = function(id){
    document.getElementById(id).animate({
        opacity:[1,0],
    }, {duration: 500, fill:"forwards"})
    setTimeout(() => {
        document.getElementById(id).style.display = 'none'
    }, 500);
}

function createLoadingScreen(obj, id){
    var box = document.createElement('div')
    var s1 = document.createElement('div')
    var s2 = document.createElement('div')
    var s3 = document.createElement('div')

    box.className = 'overlay'
    box.id = id
    s1.className = 'shadow-1'
    s2.className = 'shadow-2'
    s3.className = 'spinner'

    box.append(s1)
    box.append(s2)
    box.append(s3)

    switch (obj.properties.overlay) {
        case 'light':
            box.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            break;
        case 'dark':
            box.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
            break;
        case 'white':
            box.style.backgroundColor = 'rgba(255, 255, 255, 1)'
            break;
        default:
            box.style.backgroundColor = obj.properties.overlay
            break;
    }

    s3.style.borderTopColor = obj.properties.color

    switch(obj.properties.speed){
        case 'normal':
            speed = 1000;
            break;
        case 'fast':
            speed = 500;
            break;
        case 'slow':
            speed = 3000;
            break;
        default:
            speed = obj.properties.speed
            break;
    }

    s3.animate(
    {
        transform:['translate(-50%,-50%) rotate(0deg)','translate(-50%,-50%) rotate(100deg)','translate(-50%,-50%) rotate(360deg)']
    }, {iterations: Infinity, duration: speed, easing: 'linear'})

    return box
}