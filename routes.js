var express = require('express');
var router = express.Router();
var execFile = require('child_process').execFile;
/* Map URLs to handlers in this file */

router.get('/', function (req, res) {
    res.status(200).json({message: "ok"});
});

router.get('/:remote/:key', function (req, res) {
    res.status(200).json({remote: req.params.remote, key: req.params.key});
    var child = execFile('./bin/sendKey',[req.params.remote, req.params.key],(error, stdout, stderr) => {
	if (error){
		throw error;
	}
	console.log(stdout);
    });
    
});

router.get('/tv',function (req, res) {
    res.status(200).sendFile('tv_layout.html', {root: 'views/'});
});

module.exports = router;
