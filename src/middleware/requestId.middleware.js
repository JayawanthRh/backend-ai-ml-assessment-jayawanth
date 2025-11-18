
import { randomUUID } from 'crypto';

export function requestIdMiddleware(req, res, next) {

  const existingId =
    req.headers['x-request-id'] ||
    req.headers['x-correlation-id'];

  const requestId = existingId || randomUUID();


  req.requestId = requestId;


  res.setHeader('X-Request-Id', requestId);

  next();
}
