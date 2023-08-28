// INSTALAR NPM PRIMER PASO 

// Para crear usamos = post 
// Leer un usuario = get 
// Leer todos los usuarios = get
// Actulizar todos los usuarios = put 
// Eliminar los  usuarios = delete


//concectar esto con node 

// gitignore.io para no crearlo manualmente 

const express = requiere( "express")
const app = express
//conexion el puerto 3000
const port = 3000 

//use json middleware
app.use(express.json());
app.use(express.urlencoded({extenden:true}));

let users = []

// arreglo de usuarios 
users.push({
    name: "Juan",
    lastname: "Ramirez",
    age:20,
    id: "1",
    email: "juan@gmail"

})
 


app.get("/", (req, res) => {
res.send("Bienvenidos a la API de usuarios")
})

//Leer en el arreglo mediante params 
app.get("/user/:id",(req,res)=>{
   
   console.log("params:", req.params)
   console.log("query:", req.query)

   const {requesID} = req.params.id

   let requiredUser = null;
    
   for (let index = 0; index < array.length; index++) {
    
    if(users [index].id === requesID ){
        
        requiredUser= requesID[index];
    
    }
   }
   console.log(requesID)
   res.send(requiredUser)

    res.send("X, lo estamos intentando")

    
})
//Leer el array de los usuarios + un filtrado mediante querys 
app.get("/users", (req,res)=>{
    if(req.query.age){
        users= users.filter 

    }
})

//crear el perfil en express
app.post("/user", (req,res)=>{
    console.log(req.body.name)
    let newUser = {
        name:req.body.name,
        lastname:req.body.lastname,
        age:req.body.age,
        id:req.body.id,
        email:req.body.email,

    }

    users.push(newUser)
    res.send("Creacion de Usuario Perfecta")
})

app.delete("/users/:id", (req,res)=>{
    const idToDelete = req.params.id;
    let indexToDelete = users.findIndex(user=>user.id==idToDelete)
    let UserDeleted = users.splice(indexToDelete, 1)
        //console.log("user delete:" )
    res.send("Se Elimino Perfectamente" + UserDeleted[0].id)
})

app.put("/users/:id", (req,res)=>{
  let index =   users.findIndex(user => user.id == req.params.id)

  let newUser = {
    name:req.body.name,
    lastname:req.body.lastname,
    age:req.body.age,
    id:req.body.id,
    email:req.body.email,

}
users[index]=newUser
res.send("Usuario Remplazado"+ newUser)
})

app.patch("/user/:id", (req,res)=>{
    let index = users.findIndex(user => user.id == req.params.id)
    users[index].name = req.body.name || users[index].name
    users[index].lastname = req.body.lastname || users[index].lastname
    users[index].age = req.body.age || users[index].age
    users[index].id = req.body.id || users[index].id
    users[index].email = req.body.email || users[index].email




    res.send("usuario actulizado" )
})
//confirmar que el app esta conectada a ese puerto 
app.listen(port, () => {
    
    console.log("example app")
})






