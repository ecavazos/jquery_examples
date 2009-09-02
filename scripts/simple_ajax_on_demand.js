$(function() {
  title('Simple Ajax On Demand');
  onDemandLink();
});

function title (str) {
  $('body').append('<h1>'+str+'</h1>');
}

function onDemandLink () {
  $('body').append('<a href="" >Click me for some on-demand a-sync high jinks</a>')
    .andSelf().bind('click', onDemandLinkClickHandler);
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
  $('h1').after('<ul id="ninjas"></ul>');
  
  var ninjas = data.narutoverse;
  
  for(var i in ninjas) {
    $('#ninjas').append('<li>'+ninjas[i].name+'</li');
  }
}

function error (data) {
  alert('error handling code goes here.');
}