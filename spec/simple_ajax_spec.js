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
    
    describe('getSampleJson()', function() {
      
      it('should notify the user that data is loading', function() {
        // hack-ish
        var clicked;
        loading = function() {clicked = true;};
        getSampleJson();
        expect(clicked).to(be_true);
      });
      
      it('should send ajax request for "sample.json"', function() {
        mock($).should_receive('ajax').with_arguments(ajaxOptions).exactly('once');
        getSampleJson();
      });
      
    });
    
    describe('success(data)', function() {
      var data;
      
      before(function() {
        data = {
          narutoverse: [
            {name: 'naruto'},{name: 'kakashi'}
          ]
        };
      });
      
      it('should create an unordered list', function() {
        success(data);
        expect($('#ninjas')).to(match_selector, '#ninjas');
      });      
      
      it('should output naruto first', function() {
        success(data);
        expect($('#ninjas li:first').text()).to(equal, 'naruto');
      });
      
      it('should output kakashi last', function() {
        success(data);
        expect($('#ninjas li:last').text()).to(equal, 'kakashi');
      });
      
    });
  });
  
});