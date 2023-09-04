const express = require('express')
const app = express()
const port = 3000

// Use Json middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let Salas = []
let User = []
let Booking = []

Salas.push({
    name: "",
    build:"",
    id: "",
})

User.push({
    Name: "",
    id:"",

})

Booking.push({
    Hour:"",
    Sala: "",
    location:"",
    user:"",
})

app.get('/Salas/:id', (req, res)=>{
    console.log("params:", req.params)
    const requestID = req.params.id
    let requireSalas = null;
    for (let index = 0; index < Salas.length; index++) {
        console.log(Salas[index].id === requestID, Salas[index].id, requestID)
        if(Salas[index].id === requestID){
            requireSalas = Salas[index];
        }
    }
    console.log(requiredSalas)
    res.json(requiredSalas)
})


app.get('/User/:id', (req, res)=>{
    console.log("params:", req.params)
    const requestID = req.params.id
    let requiredUser = null;
    for (let index = 0; index < User.length; index++) {
        console.log(User[index].id === requestID, User[index].id, requestID)
        if(User[index].id === requestID){
            requiredUser = User[index];
        }
    }
    console.log(requiredUser)
    res.json(requiredUser)
})


app.get('/User', (req, res)=>{
    if(req.query.id){
        User = User.filter(
            (User)=>{return User.id == req.query.id}
        )
    }
    res.send({"User":User})
})

app.post('/user', (req, res) => {
    let newUser = {
        name:req.body.name,
        id:req.body.id,
    }
    User.push(newUser)
    res.send("¡Creación de usuario exitosa!")
})

app.post('/Salas', (req, res) => {
    let newSalas = {
        name:req.body.name,
        build:req.body.build,
        id:req.body.id,
    }
    Salas.push(newSalas)
    res.send("¡Creación de Sala exitosa!")
})

app.get('/', (req, res)=>{
    res.send("Bienvenidos a la API de usuarios")
})

app.delete('/users/:id', (req, res)=>{
    const idToDelete = req.params.id;
    let indexToDelete = User.findIndex(user=>user.id==idToDelete)
    let userDeleted = User.splice(indexToDelete, 1)

    //console.log("user delete: ", userDeleted)
    res.send("Se eliminó correctamente el usuario con id: " + userDeleted[0].id)
})

app.put('/User/:id',(req, res)=>{
    let index = User.findIndex(user => user.id == req.params.id)
    let newUser = {
        name:req.body.name,
        id:req.body.id,
    }
    User[index]=newUser
    res.send("usuario reemplazado " + newUser )
})

app.patch('/User/:id', (req, res)=>{
    let index = User.findIndex(user => user.id == req.params.id)

    User[index].name = req.body.name || User[index].name
    User[index].id = req.body.id || User[index].id

    res.send("usuario modificado ")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })