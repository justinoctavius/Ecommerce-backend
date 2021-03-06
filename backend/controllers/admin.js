const { User } = require("../models");
const ctrl = {};

ctrl.createAdmin = async (req, res) => {
    try {
        const oldUser = await User.findOne({name: 'Octavius'});
        if(oldUser){
            res.send({msg: 'admin already created'})
        }else{
            const user = new User({
                name: 'Octavius',
                email: 'justinoctavio2001@gmail.com',
                password: '8092310justin',
                isAdmin: true
            });
            const newUser = await user.save()
            res.send(user);
        }
    }catch (error) {
        res.send({ msg: error.message });
    }
}

ctrl.getAdmins = async (req, res) => {
    const admins = await User.find({isAdmin: true});
    if(admins.length > 0){
        res.send({admins})
    }else{
        res.send({msg: 'There isn\'t admin'}).status(404)
    }
}

ctrl.deleteAdmins = async (req, res) => {
    const id = req.params.id;
    const oldAdmin = await User.findOne({_id: id});
    if(oldAdmin){
        oldAdmin.remove();
        res.send({admins: oldAdmin});
    }else{
        res.status(500).send({msg: 'Admin not found'})
    }
}

module.exports = ctrl;