// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(items) {
	console.log('showResponse fired ');
	//let responseString = JSON.stringify(response, '', 2);
	//document.getElementById('response').innerHTML += responseString;
	//console.log(response);
	$(items).each(function(){
		var s = this.snippet;//eviter les repetitions
		var title = $('<li />');
		title.append(s.title);
		$('#response ul').append(title);
	});
}
function onClientLoad() {
	gapi.client.load('youtube', 'v3', chargeapi);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function chargeapi() {
	console.log('chargeapi fired');
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyAG8sEcOGR52Mng-muBG63QAXDijYqVEGM');
    
    // Add code here to test out showResponse():
    //showResponse({msg:"Hooray"});
    search();

}


function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.playlistItems.list(
	    {
	    	playlistId: 'PLb84-3f0TwkON1MRBUzd_QJw2m_Yzr-09',
	    	part: 'snippet',
	    	maxResults: 5
	    }
    );
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}
function onSearchResponse(response) {
	console.log(response);
	//condition pour afficher le requete dans html
	if (response.items.length > 0) {
		showResponse(response.items);
	}
}