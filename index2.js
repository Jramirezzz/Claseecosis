//registro 
//puede atender varias mascotas 
// se le puede asigna mascotas
veterinarios = []
Mascotas = []
//puede tener varias mascotas 
Usuario = []

// crear para todos los arreglos 
// Leer para todos los arreglos
// editar para todos los arreglos

//conectar con express 

const express = requiere( "express")
const app = express
//conexion el puerto 3000
const port = 3000 

app.use(express.json());
app.use(express.urlencoded({extenden:true}));

const cors = require('cors')
app.use(cors())


// post para crear 
// get para leer 
// patch para editar por partes 
// put edicion completa 
// delete eliminar 


//crear arreglos para asignar objetos

veterinarios = {
    Name: "",
    Last: "",
    id:"",
}

Mascotas = {
    id:"",
    name:"",
    age:"",
    type:"",
    Veterinario:"${id.vet}",
    Acudiente:"{id.usuario}",
}

Usuario = {
    name:"",
    Last:"",
    id:"",
}

app.patch("/Mascotas/:id", (req,res)=>{
    let index = Veterianrios.findIndex(user => user.id == req.params.id)
    Veterianrios[index].name = req.body.name || Veterianrios[index].name
    Veterianrios[index].last = req.body.lastname || Veterianrios[index].lastname
    Veterianrios[index].id = req.body.id || Veterianrios[index].id

    res.send("usuario actulizado" )
})


app.delete("/Usuarios/:id", (req,res)=>{
    const idToDelete = req.params.id;
    let indexToDelete = users.findIndex(user=>user.id==idToDelete)
    let UserDeleted = users.splice(indexToDelete, 1)
       
    res.send("Se Elimino Perfectamente" + UserDeleted[0].id)
})

app.delete("/Veterianrios/:id", (req,res)=>{
    const idToDelete = req.params.id;
    let indexToDelete = users.findIndex(user=>user.id==idToDelete)
    let UserDeleted = users.splice(indexToDelete, 1)
      
    res.send("Se Elimino Perfectamente" + UserDeleted[0].id)
})

app.delete("/Mascotas/:id", (req,res)=>{
    const idToDelete = req.params.id;
    let indexToDelete = users.findIndex(user=>user.id==idToDelete)
    let UserDeleted = users.splice(indexToDelete, 1)
      
    res.send("Se Elimino Perfectamente" + UserDeleted[0].id)
})
app.get("/Usuarios", (req,res)=>{
    res.send({"Usuarios":usuarios}) 

    })

    app.get("/Veteranrios", (req,res)=>{
        res.send({"Veterinarios":Veterianrios}) 
    
        })

app.get("/Mascotas", (req,res)=>{
    res.send({"Mascotas":Mascotas}) 

    })

app.post("/Usuario", (req,res)=>{
    let newUser = {
        name:req.body.name,
        last:req.body.last,
        id:req.body.id,
    }

    Usuario.push(newUser)
    res.send("Creación satisfactoria")
})

app.post("/Veterinarios", (req,res)=>{
    let newVeterinarios = {
        name:req.body.name,
        last:req.body.last,
        id:req.body.id,
    }

    Usuario.push(newVeterinarios)
    res.send("Creación satisfactoria")
})

app.post("/Mascotas", (req,res)=>{
    let newMascotas = {
        name:req.body.name,
        last:req.body.age,
        type:req.body.type,
        vet:'',
        id:req.body.id,
        Acudiente:''
    }

    Usuario.push(newMascotas)
    res.send("Creación satisfactoria")
})

app.get('/', (req,res)=>{
    res.send('server start')
})

app.listen(port, () =>{
    console.log('Listening ${port}')
})


