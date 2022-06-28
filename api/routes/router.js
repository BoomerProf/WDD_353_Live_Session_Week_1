const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  res.json({
    message: 'Post',
    metadata: {
      firstName: firstName,
      lastName: lastName,
      hostname: req.hostname,
      method: req.method,
    },
  });
});
// http://localhost:3000/users/67
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: 'Delete - By Id',
    metadata: {
      hostname: req.hostname,
      method: req.method,
      id: id,
    },
  });
});
module.exports = router;
