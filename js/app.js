$(document).ready(function () {

    var dataBaseURL = 'https://github.com/wotv-resource/wotv-resource.github.io/tree/master/data'



    $.ajax({

        url: dataBaseURL + '/Units.json',
        method: 'GET',
        success: function(data) {
            console.log(data);
        },
        error: function(error) {

        }



    });

/*    readJSON('data/Units.json')

function readJSON(path) {
var xhr = new XMLHttpRequest();
xhr.open('GET', path, true);
xhr.responseType = 'blob';
xhr.onload = function(e) {
  if (this.status == 200) {
      var file = new File([this.response], 'temp');
      var fileReader = new FileReader();
      fileReader.addEventListener('load', function(){
           //do stuff with fileReader.result
           console.log(fileReader.result);
      });
      fileReader.readAsText(file);
  }
}
xhr.send();
}

*/
/*
fetch(url, {mode: 'no-cors'}) // Call the fetch function passing the url of the API as a parameter
.then(function(data) {
    console.log(data.response);
})
.catch(function() {
// This is where you run code if the server returns any errors
});
*/
})
