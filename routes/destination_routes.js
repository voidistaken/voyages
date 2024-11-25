import  express from 'express';
const router=express.Router();
import * as Destinationcontroller from '../Controllers/destination_controller.js';
router.get('/',Destinationcontroller.GetAlldestination);
router.get('/:id',Destinationcontroller.GetdestinationById);
router.post('/',Destinationcontroller.Createdestination);
router.delete('/:id',Destinationcontroller.Deletedestination);
router.patch('/:id',Destinationcontroller.Updatedestination);

export default router;
