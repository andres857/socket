const socket = io()

// function statusConection(){
//     console.log("estado del socket: ", socket.connected);
// }

// socket.on("connect", ()=>{
//     console.log("el socker se ha conectado: ", socket.id);
//     statusConection()
// })

// socket.on("disconnect", ()=>{
//     console.log("el socker se ha desconectado: ");
//     statusConection()
// })

// socket.on("welcome",(data)=>{
//     const text = document.querySelector("#text")
//     text.textContent = data
// })

// const emitToServer = document.querySelector("#emit-to-server")
// emitToServer.addEventListener("click", ()=>{
//     socket.emit("server", "Hola, servidor")
// })

socket.on("move circle", position=>{
    circle.style.top = position.top
    circle.style.left = position.left
})


const drag = e =>{
    const clientX = e.clientX
    const clientY = e.clientY

    socket.emit("circle position",{
        top: clientY + "px",
        left: clientX + "px"
    })
}

let circle = document.getElementById("circle")
circle.addEventListener("mousedown", e => {
    console.log("event downmouse");
    circle.addEventListener("mousemove", drag)
})

circle.addEventListener("mouseup", e=>{
    console.log("anything");
    circle.removeEventListener("mousemove",drag)
})