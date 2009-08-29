$(function() {
  title('Simple Ajax');
  getJson();
});

function title (str) {
  $('body').append('<h1>'+str+'</h1>');
}

function getJson() {
  $.ajax({
    url: 'sample.json',               // local file
    timeout: 2000,                    // 2 seconds
    dataType: 'json',
    type: 'GET',                      // default
    success: function(data) {         // success callback
      success(data);
    },
    error: function(data) {           // error callback
      error(data);
    }
  });
}

function success (data) {
  $('h1').after('<ul id="ninjas"></ul>');
  
  var ninjas = data.narutoverse;
  
  for(var i in ninjas) {
    $('#ninjas').append('<li>'+ninjas[i].name+'</li');
  }
}

function error (data) {
  alert('error handling code goes here.');
}