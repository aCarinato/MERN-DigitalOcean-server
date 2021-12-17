import express from 'express';

const router = express.Router();

// Import middleware
import { requireSignin } from '../middlewares';

// Import callbacks from controllers
import {
  register,
  login,
  currentUser,
  forgotPassword,
  profileUpdate,
  findPeople,
} from '../controllers/auth';

router.post('/register', register);
router.post('/login', login);
router.get('/current-user', requireSignin, currentUser);
router.post('/forgot-password', forgotPassword);

router.put('/profile-update', requireSignin, profileUpdate);
router.get('/find-people', requireSignin, findPeople);

// router.put("/user-follow", requireSignin, addFollower, userFollow);
// router.put("/user-unfollow", requireSignin, removeFollower, userUnfollow);
// router.get("/user-following", requireSignin, userFollowing);

module.exports = router;
