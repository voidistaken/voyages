import  destinationmodel  from '../models/destination_model.js';

export async function GetAlldestination(req,res){
    const destinations=await destinationmodel.find();
    res.json(destinations);
}
export async function GetdestinationById(req,res){
    const destinations=await destinationmodel.findById(req.params.id);
    res.json(destinations);

}
export async function Createdestination(req,res){
    const destinations=await destinationmodel.create(req.body);
    res.json(destinations);

}
export async function Deletedestination(req,res){
    const destinations=await destinationmodel.findByIdAndDelete(req.params.id);
    res.json(destinations);

}
export async function Updatedestination(req,res){
    const destinations=await destinationmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(destinations);

}
