const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/:id/materials/first', async (req, res) => {
    const material = await models.Material.findAll({
        where: {
            theme_id: req.params.id,
        },
        order: [
            ['order', 'ASC'],
            ['id', 'ASC']
        ],
        include: [models.Theme, models.Resource]
    });

    res.status(200).json(material.length ? material[0] : {});
});

router.get('/', async (req, res) => {
    const themes = await models.Theme.findAll();
    res.status(200).json(themes || []);
});

router.get('/:id', async (req, res) => {
    const theme = await models.Theme.findOne({
        where: {
            id: req.params.id,
        }
    });
    res.status(200).json(theme || {});
});

module.exports = router;