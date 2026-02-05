const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createPost, getPosts} = require('../controllers/postControllers');

router.use(auth);

// POST /posts
router.post('/', createPost);

// GET /posts
router.get('/', getPosts);

module.exports = router;