import  express from 'express';
const router=express.Router();
import * as voyageurcontroller from '../Controllers/voyageur_controller.js';
router.get('/',voyageurcontroller.GetAllvoyageur);
router.get('/:id',voyageurcontroller.GetvoyageurById);
router.post('/',voyageurcontroller.Createvoyageur);
router.delete('/:id',voyageurcontroller.Deletevoyageur);
router.patch('/:id',voyageurcontroller.Updatevoyageur);

export default router;
