Screw.Unit(function() {
  describe('Simple Ajax', function() {
    
    before(function() {
      $('#dom_test').append('<div id="data"></div>');
    });
    
    it('should add loading message', function() {
      loading();
      expect($('#data').text()).to(equal, 'Loading ...');
    });
    
    it('should display an error message when ajax call fails', function() {
      error();
      expect($('#data').text()).to(equal, 'Error handling code goes here.');
    });
    
    describe('init()', function() {
      
      before(function() {
        init('#dom_test');
      });
      
      it('should add header to page with "Simple Ajax Example" as the value', function() {        
        expect($('h1:first').text()).to(equal, 'Simple Ajax Example');
      });
    
      it('should add data placeholder to the page', function() {
        expect($('#data')).to(match_selector, '#data');
      });
    });
    
  });
  
});