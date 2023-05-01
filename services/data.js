const base = require("./base")

// User = {
//     1000: { id: 123456, user_name: "amal", password: "ab123" },
//     1001: { id: 78963, user_name: "amal", password: "ab1234" }
// }


register = (id, user_name, password) => {
   return base.User.findOne({ id }).then(user => {
        if (user) {
            return {
                status: true,
                message: "user already present",
                statusCode: 404
            }
        }
        else {
            newUser = new base.User({
                id,
                user_name,
                password

            })
            newUser.save()
            return {
                status: true,
                message: "user registered",
                statusCode: 200
            }
        }
    })
}

login = (id, password) => {
    return base.User.findOne({ id }).then(user => {
        if (user) {
            if (password == user["password"]) {
                return {
                    status: true,
                    message: "login sucess",
                    statusCode: 200,
                }
            }
            else {
                return {
                    status: false,
                    message: "psw incorrect",
                    statusCode: 404
                }
            }
        }
        else {
            return {
                status: false,
                message: "user not exist",
                statusCode: 404
            }
        }
    })
}
module.exports = {
    register, login
}