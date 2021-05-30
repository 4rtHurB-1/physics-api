const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/:id', async (req, res) => {
    const material = await models.Material.findOne({
        where: {
            id: req.params.id,
        },
        include: [models.Theme, models.Resource]
    })
    res.status(200).json(material || {});
});

module.exports = router;