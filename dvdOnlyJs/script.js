const dvdsContainer = document.getElementById("dvds-container")
const quinas = document.getElementById("quinas")
let dvdsArray = []
let ids = 0

class DVD {
    constructor(id, x, y) {
        this.id = id
        this.img = "./DVD.png"
        this.x = x
        this.y = y
        this.velo = 1
        this.direction = [Math.random()<.5?-1:1,Math.random()<.5?-1:1]
        dvdsContainer.insertAdjacentHTML("beforeend", this.create())
    }
    move(){
        this.verifyCollision()
        this.x += this.direction[0] * this.velo
        this.y += this.direction[1] * this.velo
    }
    create(){
        return `
            <img src="${this.img}" class="dvd" id="dvd${this.id}">
        `
    }
    verifyCollision(){
        let collided = 0
        if(this.x>=window.innerWidth-document.getElementById("dvd"+this.id).offsetWidth||this.x<0){
            this.direction[0]*=-1
            collided++
        }
        if(this.y>=window.innerHeight-document.getElementById("dvd"+this.id).offsetHeight||this.y<0){
            this.direction[1]*=-1
            collided++
        }
        if(collided){
            this.changeColor()
            if(collided==2){
                quinas.innerText = parseInt(quinas.innerText)+1
            }
        }
    }
    changeColor(){
        document.getElementById("dvd"+this.id).style.filter=`hue-rotate(${Math.floor(Math.random()*360)}deg) brightness(${Math.random()})`
    }
    update(){
        this.move()
        document.getElementById("dvd"+this.id).style.left=this.x+'px'
        document.getElementById("dvd"+this.id).style.top=this.y+'px'
    }
}

dvdsContainer.addEventListener('click', (e)=>{
    dvdsArray.push(new DVD(ids, e.offsetX, e.offsetY))
    ids+=1
})


setInterval(()=>{
    for (const element of dvdsArray) {
        element.update()
    }
}, 10)