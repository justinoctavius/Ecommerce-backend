const { User } = require('../models');

const ctrl = {};

ctrl.createAdmin = async (req, res) => {
    try {
        const user = new User({
            name: 'Octavius',
            email: 'justinoctavio2001@gmail.com',
            password: '8092310justin',
            isAdmin: true
        });
        const newUser = await user.save()
        res.send(user);
    }catch (error) {
        res.send({ msg: error.message });
    }
}


module.exports = ctrl;