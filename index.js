import express from 'express';
const app = express();
import  mongoose from 'mongoose';
import  destinationrouter from './routes/destination_routes.js'; 
import  reservationrouter from './routes/reservation_routes.js';
import  voyageurrouter from './routes/voyageur_routes.js';
import  dotenv from "dotenv";
dotenv.config();


app.use(express.json());
app.use("/api/destination",destinationrouter)
app.use("/api/reservation",reservationrouter)
app.use("/api/voyageur",voyageurrouter)


mongoose.connect(process.env.MONGODB_DATABASE)
    .then((result)=>{
        app.listen(process.env.DATABASE_PORT,()=>{
        console.log('server is listening on');
    });
});
