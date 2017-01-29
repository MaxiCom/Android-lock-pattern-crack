document.getElementById('file_importer').addEventListener('click', function(e) {
	document.getElementById('input_file_importer').click()
});

document.getElementById('input_file_importer').addEventListener('change', function (e) {
	pattern = decodePattern(e.target.files[0])
	
	document.getElementById('input_file_importer').value = ''
});