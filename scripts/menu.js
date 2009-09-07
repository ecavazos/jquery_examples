$(function() {
  new Menu('body');
});

var Menu = function(options) {
  this._title = 'jQuery, Easy As Pie';
  this._opts = $.extend(this._defaults, options);
  this._init();
};

Menu.prototype = {
  _init: function() {
    $(this._opts.prependTo).prepend('<div id="menu-bar"></div>');
    var link = '<a href="'+this._indexUrl()+'">'+this._title+'</a>';
    $('#menu-bar').append('<h1>'+link+'</h1>');
  },
  
  _indexUrl: function() {
    var url = 'index.html';
    for(var i=0; i < this._getFolderDepth(); i++) {
      url = '../' + url;
    }
    return url;
  },
  
  _getFolderDepth: function() {
    var urlParts = this._currentUrl().split('/');
    var idx = urlParts.indexOf('jquery_examples');
    
    if(urlParts[urlParts.length-1].match('.html') || urlParts[urlParts.length-1] == '')
      urlParts.pop();
    
    return urlParts.length - (idx+1);
  },
  
  _currentUrl: function() {
    return location.href;
  },
  
  _defaults: {
    prependTo: 'body'
  }
};