$(function() {
  appendOnDemandLinkAfter('#example h2');
});

function appendOnDemandLinkAfter (selector) {
  $(selector)
    .after('<a href="" >Click me for some on-demand a-sync high jinks</a>');
    
  $(selector + '+a')
    .bind('click', onDemandLinkClickHandler);
}

function onDemandLinkClickHandler(event) {
  
  // I could have put all the getSampleJson()
  // code here, but it's more readable in its
  // own method.
  getSampleJson();
  
  event.preventDefault();
  event.stopPropagation();
}

function getSampleJson() {
  $.ajax({
    url: 'sample.json',               // local json file with sample data
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
  $('#example a').after('<ul id="ninjas"></ul>');
  
  var ninjas = data.narutoverse;
  
  for(var i in ninjas) {
    $('#ninjas').append('<li>'+ninjas[i].name+'</li');
  }
}

function error (data) {
  alert('error handling code goes here.');
}