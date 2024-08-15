const User = require("../models/user.js");

module.exports.signupGet = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signupPost = async (req, res, next)=> {
    try {
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registredUser = await User.register(newUser, password);
        req.login(registredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.loginGet = (req, res)=> {
    res.render("users/login.ejs");
};

module.exports.loginPost = async (req, res) => {
    req.flash("success", "Welcome to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
};