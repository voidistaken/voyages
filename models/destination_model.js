import mongoose from 'mongoose';

const destinationShema=new mongoose.Schema({
    nom:{type:String},
    pays:{type:String},
    prixParNuit:{type:Number},
    description:{type:String},
    reservation:[{type:mongoose.Types.ObjectId,
        ref:'reservation_model'
    }]
})

const destinationmodel=mongoose.model("destination",destinationShema);
    
export default destinationmodel;