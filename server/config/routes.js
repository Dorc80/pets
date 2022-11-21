const { Router } = require('express');
const controller = require('../controllers/pets');

const router = Router();

router.post('/pets', controller.petPost);
router.get('/pets', controller.petsGet);
router.get('/pets/:id', controller.petGet);
router.put('/pets/:id', controller.petPut);
router.delete('/pets/:id', controller.petsDelete);

module.exports = router;