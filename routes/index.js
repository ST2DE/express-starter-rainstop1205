const taskController = require('../controllers/taskController.js');
var router = express.Router();

module.exports = function (app) {

  app.get('/tasks', taskController.index);
  app.get('/api/tasks', taskController.indexApi);

};

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/tasks', function (req, res, next) {
    res.render('tasks');
});

router.post('/tasks/create', function (req, res, next) {
    let tasksName = req.body.tasksName;
    db.Task.create({ name: tasksName })
        .then(function () {
            return res.redirect('/tasks');
        })
});

module.exports = router;