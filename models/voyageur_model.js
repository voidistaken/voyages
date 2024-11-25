import mongoose from 'mongoose';

const voyageurShema=new mongoose.Schema({
    nom:{type:String},
    email:{type:String,unique:true},
    telephone:{type:String},
    reservation:[{type:mongoose.Types.ObjectId,
        ref:'reservation_model'
    }]
})

const voyageurmodel=mongoose.model("voyageur",voyageurShema);
    
export default voyageurmodel;