import {Router} from 'express';
import {methods as methods} from '../methods/methods';

const router = Router();

router.get("/",methods.getData);
router.get("/:document_number",methods.getUnique);
router.post("/",methods.addData);
router.delete("/",methods.deleteData);
router.put("/",methods.updateData)

export default router;