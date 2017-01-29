var database_path = "resources/database/rainbow.db"
var database = null

function databaseGetPattern(hash) {
	var xhr = new XMLHttpRequest();

	if (database == null) {
		xhr.open('GET', database_path, true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function() {
		    var data = new Uint8Array(this.response);
		    database = new SQL.Database(data);

		    console.log('Database loaded.')
		    getPattern(database, hash)
		};
		xhr.send();
	} else {
		getPattern(database, hash)
	}
}

function getPattern(database, hash) {
	var stmt = database.prepare('SELECT pattern FROM RainbowTable WHERE hash="'+ hash + '"')

	while (stmt.step()) {
		var result = stmt.getAsObject();

		if (result) {
			$('#success_wrapper').css('display', 'flex').hide().fadeIn(200).delay(400).fadeOut(200);
			setTimeout(function () {
				displayPattern(result.pattern);
			}, 500);
			return ;
		} 
	}
	setTimeout(function () {
		$('#error_wrapper').css('display', 'flex').hide().fadeIn(200).delay(400).fadeOut(200);
	}, 4000);
	stmt.free()
}