exports.auth = function(req, res) {

};

exports.register = function(req, res) {
    const {username, email, password, confirmPassword } = req.body;

    res.json({ username, email });
};

