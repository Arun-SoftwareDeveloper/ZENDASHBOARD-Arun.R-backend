// controllers/classController.js
const Class = require('../Models/Class');

exports.getClass = (req, res) => {
  Class.findOne({}, (err, classData) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(classData);
    }
  });
};

exports.updateClass = (req, res) => {
  const { selectedSession } = req.body;

  Class.findOneAndUpdate({}, { selectedSession }, { new: true, upsert: true }, (err, classData) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(classData);
    }
  });
};
