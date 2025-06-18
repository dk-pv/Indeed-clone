import express from 'express';
import { 
  createJob,
  updateJob,
  deleteJob
} from '../controllers/jobController.js';
import { verifyToken, verifyEmployer } from '../middleware/authMiddleware.js';

const router = express.Router();

// Employer-only routes
router.post('/create', verifyToken, verifyEmployer, createJob);
router.put('/:id', verifyToken, verifyEmployer, updateJob);
router.delete('/:id', verifyToken, verifyEmployer, deleteJob);



export default router;