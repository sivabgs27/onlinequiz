module.exports = {
    domain_name : "http://104.237.131.101:8080/",
    email : require('./api/send_email'),
    user_reg : require('./database/user_reg'),
    pass_reg : require('./database/pass_reg'),
    setpassword : require('./api/set_userpass')
 };
