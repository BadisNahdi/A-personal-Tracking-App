const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const router = express.Router();
router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { email, password } = await req.body;
    let responseSent = false;
    const user = new User({ email, password });
    try {
        if (await user.save()) {
            const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
            res.send({ token })
        };
    } catch (err) {
        res.status(422).send(err.message);
    }
});
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(442).send({ error: 'Must provide email and password' });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send({ error: 'Invalid user' });
    }
    try {
        console.log(user._id);
        await user.comparePassword(password);
        console.log("yes");
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token });
    } catch (err) {
        return res.status(404).send({ error: 'Invalid password or email' })
    }

});

module.exports = router;