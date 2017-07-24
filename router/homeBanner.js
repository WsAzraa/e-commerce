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
			url: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
		}, {
			url: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
		}, {
			url: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
		}, {
			url: 'http://s.amazeui.org/media/i/demos/bing-4.jpg'
		}]
	});
});


module.exports = router;