import  express  from "express";
import cors from 'cors';

const app = express();

// core middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// server is building
const port = 7777;

app.listen(port,()=>{
    console.log("server running 7777");
})