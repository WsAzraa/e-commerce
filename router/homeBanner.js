var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});
// // 定义网站主页的路由
router.get('/data/banner', function(req, res) {
	res.json({
		success: true,
		data: [{
			url: 'images/lunbo1.webp',
		}, {
			url: 'images/lunbo2.webp',
		}, {
			url: 'images/lunbo3.webp',
		}, {
			url: 'images/lunbo4.webp'
		}]
	});
});


module.exports = router;