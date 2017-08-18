'use strict';

const router = require('express').Router();
const {Note} = require('../db/models');

module.exports = router;

//retreive all notes for user
router.get('/:userId', function (req, res, next) {
    let userId = req.params.userId
    Note.findAll({
        where: {userId},
    })
    .then(task => res.json(task))
    .catch(next);
});

router.get('/:noteId', function (req, res, next) {
    Note.findById(req.params.notetId)
    .then(event => res.json(event))
    .catch(next);
});

//post note for user
router.post('/', function (req, res, next) {
    return Note.create({
        userId: req.body.userId,
        text: req.body.note,
        date: req.body.date
    })
    .then(newNote => res.json(newNote))
    .catch(next);
});



router.delete('/:noteId', function (req, res, next) {
    const id = req.params.noteId;

  Note.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
