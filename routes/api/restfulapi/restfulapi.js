var models = require('../../../models');
var sequelize = require("sequelize");

exports.listUsers = function (req, res) {
    models.User.findAll({
    }).then(function (users) {
        if (!users) {
            res.send({ success: false, error: 'users not found' });
        } else {
            res.send({ success: true, results: users });
        }
    }).catch(function (error) {
        res.send({ success: false, error: error.message });
    });
}

exports.listUsers = function (req, res) {
    if (!req.params.id) {
        res.send({ success: false, message: "Parameter missing" });
    }
    models.User.find({
        include: [
            { model: models.Post },
        ],
        where : {id : req.params.id }
    }).then(function (userPosts) {
        if (!usersPost) {
            res.send({ success: false, error: 'user post not found' });
        } else {
            res.send({ success: true, results: userPosts });
        }
    }).catch(function (error) {
        res.send({ success: false, error: error.message });
    });
}

exports.updateUser = function (req, res) {
    if (!req.params.id && req.params.id < 0) {
		res.send({ success: false, error: 'fields left empty' });
		return;
    } 
	models.User.find({ 
		where: { id: req.params.id } 
	}).then(user => {
		if (!user) {
			res.send({ success: false, error: 'user not found' });
			return;
        } 
            var address = {
                "street": req.body.street,
                "suite": req.body.suite,
                "city": req.body.city,
                "zipcode": req.body.zipcode,
                "geo": {
                  "lat": req.body.lat,
                  "lng": req.body.lng
                }
            }
            var company = {
                "name": req.body.companyName,
                "catchPhrase": req.body.catchPhrase,
                "bs": req.body.bs
            }

			user.name = req.body.name; 
			user.username = req.body.username;
			user.username = req.body.email;
			user.address = address;
			user.phone = req.body.phone;
			user.website = req.body.website;
			user.company = company;
			user.save().then(user => {
				res.send({ success: true, user: user });
			}).catch(err => {
				res.send({ success: false, error: "Could not update user.", message: err.message });
			});
		});  
}
