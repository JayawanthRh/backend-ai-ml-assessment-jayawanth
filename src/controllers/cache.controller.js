import { cacheService } from '../services/cache.service.js';

export const cacheController = {
  stats(req, res, next) {
    try {
      const stats = cacheService.getStats();
      return res.json({
        success: true,
        data: stats,
        message: "Cache stats fetched successfully",
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      next(error);
    }
  }
};
