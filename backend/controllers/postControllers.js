// POST /posts
const createPost = (req, res) => {
  const { title, description } = req.body;

  res.status(201).json({
    message: 'Post created (mock)',
    post: { title, description }
  });
};

// GET /posts
const getPosts = (req, res) => {
  res.json([
    {
      id: '1',
      title: 'Need help with groceries',
      description: 'Once per week'
    }
  ]);
};

module.exports = {
  createPost,
  getPosts
};