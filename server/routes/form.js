var express = require('express');
var router = express.Router();

var Form = require('../models/form');


router.get('/', function (req, res, next) {
  Form.find({}, function (err, docs) {
    console.log(docs);
    return res.json(docs);
  });
});


router.delete('/:_id', function (req, res, next) {
    var id = req.params._id;
    Form.findOneAndRemove({_id: id}, function (err, doc) {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    });
});

router.post('/save', function (req, res, next) {
    var request = req.body;

    console.log(request);

    var form = new Form({
        key: request.key,
        label: request.label,
        name: request.name,
        type: request.type,
        required: request.required,
        placeholder: request.placeholder,
        order: request.order
    });

    form.save(function (err, doc) {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })

});



module.exports = router;
