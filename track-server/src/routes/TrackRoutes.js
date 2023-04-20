const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
const Track = mongoose.model('Track');
const router = express.Router();
router.use(requireAuth);
router.get('/tracks', async (req, res) => {
    console.log("Tracks");
    //The findOne() returns first document if query matches otherwise returns null.
    //The find() method does not return null, (It returns a cursor.It is used for filtering)
    const tracks = await Track.find({ userId: req.user._id });
    res.send(tracks);
});
router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;
    if (!name || !locations) {
        return res
            .status(422)
            .send({ error: 'You must provide a name and locations' })
    };

    try {
        const track = new Track({ name, locations, userId: req.user._id });
        await track.save();
        res.send(track);
    } catch (err) {
        res.status(422).send({ error: err.message })
    }
    //Do not forget the Content-Type : application/json 
})
module.exports = router;