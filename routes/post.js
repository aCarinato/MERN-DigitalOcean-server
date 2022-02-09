import express from 'express';
import formidable from 'express-formidable';

const router = express.Router();

// middleware
import { requireSignin, canEditDeletePost } from '../middlewares';
// controllers
import {
  createPost,
  uploadImage,
  postsByUser,
  userPost,
  updatePost,
  deletePost,
  newsFeed,
  likePost,
  unlikePost,
  addComment,
  removeComment,
  totalPosts,
} from '../controllers/post';

router.post('/create-post', requireSignin, createPost);
router.post(
  '/upload-image',
  requireSignin,
  formidable({ maxFileSize: '5*1024*1024' }),
  uploadImage
);
// posts
router.get('/user-posts', requireSignin, postsByUser);
router.get('/user-post/:_id', requireSignin, userPost);
router.put('/update-post/:_id', requireSignin, canEditDeletePost, updatePost);
router.delete(
  '/delete-post/:_id',
  requireSignin,
  canEditDeletePost,
  deletePost
);

router.get('/news-feed/:page', requireSignin, newsFeed);

router.put('/like-post', requireSignin, likePost);
router.put('/unlike-post', requireSignin, unlikePost);

router.put('/add-comment', requireSignin, addComment);
router.put('/remove-comment', requireSignin, removeComment);

router.get('/total-posts', totalPosts);

module.exports = router;
