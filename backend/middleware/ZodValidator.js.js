
const { z } = require("zod");      /// code like a pro , using fun etc everything...

const signupSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long.").max(100, "Name must not exceed 100 characters."),
    email: z.string().email("Invalid email format."),
    password: z.string().min(4, "Password must be at least 4 characters long.").max(100, "Password must not exceed 100 characters."),
});

const loginSchema = z.object({
    email: z.string().email("Invalid email format."),
    password: z.string().min(4, "Password must be at least 4 characters long.").max(100, "Password must not exceed 100 characters."),
});


const validateRequest = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        const firstError = result.error.errors[0]; // Get the first error only
        return res.status(400).json({
            message: "Validation failed",
            field: firstError.path.join('.'),
            error: firstError.message,
        });
    }
    next();
};


module.exports = {
    signupValidation: validateRequest(signupSchema),
    loginValidation: validateRequest(loginSchema),
};

