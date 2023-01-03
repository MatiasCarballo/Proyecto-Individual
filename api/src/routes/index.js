const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countrie = require('./countries.js');
const activities = require('./activities');
const router = Router(); 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countrie);
router.use('/activities', activities);


module.exports = router;  