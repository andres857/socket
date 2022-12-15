const { emit } = require("nodemon")

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

socket.on("welcome",(data)=>{
    const text = document.querySelector("#text")
    text.textContent = data
})

const emitToServer = document.querySelector("#emit-to-server")
emitToServer.addEventListener("click", ()=>{
    socket.emit("server", "Hola, servidor")
})