import { Router } from 'express';
import { aiController } from '../controllers/ai.controller.js';

const router = Router();

import { chatSchema } from '../validators/chatValidator.js';
import { summarizeSchema } from '../validators/summarizeValidator.js';
import { sentimentSchema } from '../validators/sentimentValidator.js';
import { validateRequest } from '../middleware/expressValidation.js';



router.post('/chat', validateRequest(chatSchema), aiController.chat);


router.post('/generate', aiController.generate);


router.post('/sentiment', validateRequest(sentimentSchema), aiController.sentiment);


router.post('/summarize', validateRequest(summarizeSchema), aiController.summarize);

export default router;

