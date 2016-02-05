var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add', data);

	var newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/01b/10d/0dcb62d.jpg"
	}

	console.log(newFriend);

	data["friends"].push(newFriend);
 }