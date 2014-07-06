
(function($) {
	

	$.ajax({
		dataType:"json",
		url: 'http://booklog.io/1/post'
	}).done(function (data) {

		var response = data;
		var content = $('#content');
		var posts = response.posts; //array
		var html  = '';

		//forEach是一種模式;
		//javascript 字串一定要用單引號;
		//如果自已要用不要將函數宣告在外面;
		//

		posts.forEach(function (post) {
			html += '<h2>';
			html += post.subject;
			html += '';			
		});

		content.html(html);
	});

})($);