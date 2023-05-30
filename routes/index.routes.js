const {Router} = require('express');
const router = Router()

router.get('/', (req,res) => {
    res.send('El contenedor se esta ejecutando con exito')
});
module.exports = router;