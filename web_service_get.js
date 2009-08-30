$(function() {
  getDataLink();
});

function getDataLink () {
  $('#data')
    .before('<a id="get-data" href="" >Get data from Twitter</a>');
  
  $('#get-data')
    .wrap('<div></div>')
    .bind('click', getDataClickHandler);
}

function getDataClickHandler(event) {  
  getTwitterJson();
  event.preventDefault();
  event.stopPropagation();
}

function getTwitterJson() {
  $('#data').append('loading ...');
  
  $.ajax({
    url: 'http://twitter.com/statuses/public_timeline.json?callback=?',
    timeout: 10000,
    dataType: 'jsonp',
    type: 'GET',
    success: function(data) {
      success(data);
    },
    error: function(data) {
      error(data);
    }
  });
}

function success (data) {
  $('#data')
    .empty().append('<ul id="tweets"></ul>');
    
  for(var i in data) {
    $('#tweets')
      .append('<li>'+data[i].user.screen_name+'<p>'+data[i].text+'</p></li');
  }
}

function error (data) {
  $('#data')
    .empty().append('An error occurred while contacting the Twitter API.')
}