import {DateTime} from "luxon";

const requestLogger = async (req, res, next) => {
  console.info(`origin (${DateTime.now().toISO()}): ${req.get("origin")}`);

  console.info(
      `request (${DateTime.now().toISO()}): ${req.protocol}://${req.hostname}${
        req.originalUrl
      } (${req.method})`
  );
  return next();
};

export default requestLogger;
