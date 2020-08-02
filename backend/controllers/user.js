const { User } = require('../models');
const { getToken } = require('../util');

const ctrl = {};

ctrl.signin = async (req, res) => {
    const signinUser = await User.findOne({
        $and: [
            {email: req.body.email},
            {password: req.body.password}
        ]
    });
    if(signinUser) {
        res.send({
            _id: signinUser.id,
            name:signinUser.name,
            email:signinUser.email,
            isAdmin:signinUser.isAdmin,
            token: getToken(signinUser)
        })
    }else{
        res.status(404).send({msg: 'Invalid Email or Password'})
    }
}

ctrl.register = async (req, res) => {
    const isExists = await User.findOne({
        $or: [
            {name: req.body.name},
            {name: req.body.email}
        ]
    });
    if(isExists){
        res.status(401).send({msg: 'user data already exist'})
    }else{
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        });
        const newUser = await user.save();
        if(newUser) {
            res.send({
                _id: newUser.id,
                name:newUser.name,
                email:newUser.email,
                isAdmin:newUser.isAdmin,
                token: getToken(newUser)
            })
        }else{
            res.send({msg: 'Invalid user data'}).status(401)
        }
    }
}


module.exports = ctrl;