import  voyageurmodel  from '../models/voyageur_model.js';

export async function GetAllvoyageur(req,res){
    const voyageurs=await voyageurmodel.find();
    res.json(voyageurs);
}
export async function GetvoyageurById(req,res){
    const voyageurs=await voyageurmodel.findById(req.params.id);
    res.json(voyageurs);

}
export async function Createvoyageur(req,res){
    const voyageurs=await voyageurmodel.create(req.body);
    res.json(voyageurs);

}
export async function Deletevoyageur(req,res){
    const voyageurs=await voyageurmodel.findByIdAndDelete(req.params.id);
    res.json(voyageurs);

}
export async function Updatevoyageur(req,res){
    const voyageurs=await voyageurmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(voyageurs);

}
