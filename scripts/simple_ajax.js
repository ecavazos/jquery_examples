$(function() {
  init('#example');
  getSampleJson();
});

var ajaxOptions = {
  url: 'sample.json',               // local json file with sample data
  timeout: 2000,                    // 2 seconds
  dataType: 'json',
  type: 'GET',                      // default
  success: function(data) {         // success callback
    success(data);
  },
  error: function(data) {           // error callback
    error();
  }
};

function init (selector) {
  $(selector)
    .append('<h2>Simple Ajax Example</h2>')
    .append('<div id="data"></div>');
}

function getSampleJson() {
  loading();
  $.ajax(ajaxOptions);
}

function loading() {
  $('#data').append('Loading ...');
}

function success (data) {
  $('#data')
    .empty()
    .append('<ul id="ninjas"></ul>');
  
  var ninjas = data.narutoverse;
  
  for(var i in ninjas) {
    $('#ninjas').append('<li>'+ninjas[i].name+'</li');
  }
}

function error () {
  $('#data')
    .empty()
    .append('Error handling code goes here.');
}