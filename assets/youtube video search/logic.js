// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.

/*function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
  gapi.client.setApiKey('AIzaSyAoZdGHDSgIvaoXjtcRvVxnEsR5nIU62_A');
}

// Called when the search button is clicked in the html code
function search() {
  var query = document.getElementById('query').value;
  // Use the JavaScript client library to create a search.list() API call.
  var request = gapi.client.youtube.search.list({
      part: 'snippet',
      q:query
  });
  // Send the request to the API server, call the onSearchResponse function when the data is returned
  request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
  var responseString = JSON.stringify(response, '', 2);
  document.getElementById('response').innerHTML = responseString;
}
*/

$(document).ready(function () {
  $('#search-term').click(function (event) {
      event.preventDefault();
      var searchTerm = $('#query').val();
      getRequest(searchTerm);
  });
});

function getRequest(searchTerm) {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
      part: 'snippet',
      key: 'AIzaSyAoZdGHDSgIvaoXjtcRvVxnEsR5nIU62_A',
      q: searchTerm
  };

  $.getJSON(url, params, showResults);
}

function showResults(results) {
  var html = "";
  var entries = results.items;
  console.log (entries)
  for(i=0; i<entries.length;i++){
    var currentVideo = entries[i]
    $("#search-results").append(`<div>
    <iframe
    width='560'
    height='315'
    src='https://www.youtube.com/embed/${currentVideo.id.videoId}'
    frameborder='0'
    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
  ></iframe> </div>`)
  }
 
}