const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/itemController');
const { verificarApiKey } = require('../middlewares/authMiddleware');

router.get('/', ctrl.listar);
router.get('/:id', ctrl.obtenerPorId);

router.post('/', verificarApiKey, ctrl.crear);
router.put('/:id', verificarApiKey, ctrl.actualizar);
router.delete('/:id', verificarApiKey, ctrl.eliminar);

module.exports = router;