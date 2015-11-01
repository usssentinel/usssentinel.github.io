$(document).ready(function() {
	loadContent('about.html');

	$(document).on('click', '#main-nav li', function() {
		if ($(this).hasClass('active')) {
			// Prevent loading the same page
			return;
		}

		var reqContent = this.firstChild.innerHTML.toLowerCase().replace(/ /g, '-') + '.html';
		loadContent(reqContent);

		$('#main-nav li').removeClass('active');
		$(this).addClass('active');
	});
});

var loadContent = function(fileName) {
	var cArea = $('#content-area');
	cArea.html('Loading content. Please wait... <img src="img/ajax-loader.gif">');
	cArea.load("content/" + fileName, function(responseText, textStatus, jqXHR) {
		if (textStatus !== 'success') {
			cArea.html('An error occured while trying to load content!');
			return;
		}
	})
};