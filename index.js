import express from "express";

//declaracion instancia de express

const app = express();

// puerto

const port = 5000;

// middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// rutas

app.get("/api/v1/users", async (req, res)=>{
    res.json({
        msg: "hola mundo"
    });
});
//app.post();
//app.put();
//app.delete();

// iniciar el servidor

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}` );
});