const {z} = require('zod')

const registerValidator = z.object({
    username:z
        .string({required_error: "username is required"})
        .trim()
        .min(4 , {message:'min 4 char required in username'})
        .max(25),
    email:z
        .string({required_error:"email is required"})
        .trim()
        .email({message:'input must be a email'}),
    password:z
        .string({required_error: "password is required"})
        .trim()
        .min(6,{ message:'min 6 char required in password'})
        .max(25),
    phone:z
        .string({required_error: "phone is required"})
        .trim()
        .length(10 ,{ message:' phone must have 10 char'})

        // if something fail,then there inside things will run (message, errors)
})
  
//             *****             you can't use same schema to validade login & register, bcoz both have diff
//                              no of parameters    *-*-*-*-*-

const loginValidator = z.object({
    email:z
        .string({required_error:"email is required"})
        .trim()
        .email({message:'input must be a email'}),
    password:z
        .string({required_error: "password is required"})
        .trim()
        .min(6,{ message:'min 6 char required in password'})
        .max(25)
})

module.exports = {loginValidator , registerValidator}