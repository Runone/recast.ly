
var searchYouTube = (options, callback) => {
  // 
  var data = {part: 'snippet', q: options.query, maxResults: options.max, key: options.key, type: 'video', videoEmbeddable: 'true'};

  var videoRequest = $.get('https://www.googleapis.com/youtube/v3/search', data, function(data) {

      callback(data.items)

    })
};

export default searchYouTube;
