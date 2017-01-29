function decodePattern(file) {
	if (initFileApi()) {
		file_content = readFile(file)
	} else {
		alert("some APIs are not supported by your browser")
	}
}

function initFileApi() {
	if (!(window.File || window.FileReader || window.FileList || window.Blob))
		return false;
	return true;
}

function readFile(file) {
	var reader = new FileReader()

	reader.onload = (function(file) {
		var u = new Uint8Array(this.result)
		var hash = new Array(u.length)
		var i = u.length

		while (i--) {
			hash[i] = (u[i] < 16 ? '0' : '') + u[i].toString(16)
		}
		u = null
		databaseGetPattern(hash.join(''))
	});
	reader.readAsArrayBuffer(file)
}