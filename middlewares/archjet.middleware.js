import aj from "../config/arcjet.js";

export const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied) {
      if (decision.reason.isRateLimit())
        return res.status(429).json({ error: "Rate limit exceed" });
      if (decision.reason.isBot())
        return res.status(403).json({ error: "Bot detected" });

      return res.status(403).json({ error: "Access denied" });
    }
    next();
  } catch (error) {
    console.log(`Archjet Middleware Error ${error}`);
    next(error);
  }
};
