
export default function validateRequest(schema) {
    return async (req, res, next) => {
        try {
            const validated = await schema.validateAsync(req.body, { abortEarly: false });
            req.body = validated;
            next();
        } catch (err) {
        res.status(422).json({
            message: "Validation error",
            details: err.details?.map(e => e.message) || ["Invalid input"]
        });
        }
    };
}