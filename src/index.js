const express = require("express")
const path = require("path")
const { createServer} = require("http")
const {Server} = require("socket.io")

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer)


app.use(express.static(path.join(__dirname, "views")))

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

io.on("connection", socket=>{
    console.log("clientes conectados", io.engine.clientsCount, "+",socket.id);
    // console.log(socket.id);

    // socket.on("disconnect", ()=>{
    //     console.log(`el socket ${socket.id} se ha desconectado`);
    // })
    socket.emit("welcome", "Ahora estas conectado")
    socket.on("server", data=>{
        console.log(data);
    })
    socket.on("circle position", position => {
        io.emit("move circle", position)
    })
})

httpServer.listen(3000,()=>{
    console.log("server running on port 3000");
})