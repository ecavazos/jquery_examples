Screw.Unit(function() {
  describe('Menu', function() {
    var menu;
    
    before(function() {
      menu = new Menu({prependTo: '#dom_test'});
    });
    
    it('should add menu bar to view', function() {
      expect($('#menu-bar')).to(match_selector, '#menu-bar');
    });
    
    it('should append header to menu bar', function() {
      expect($('#menu-bar h1')).to(match_selector, '#menu-bar h1');
    });
    
    it('should set header', function() {
      expect($('#menu-bar h1').text()).to(equal, 'jQuery, Easy As Pie');
    });
    
    it('should make header link back to index', function() {
      expect($('#menu-bar h1 a').attr('href')).to(equal, '../index.html');
    });
    
    describe('_indexUrl()', function() {
      
      it('should return "index.html" when path is root', function() {
        stub(menu, '_getFolderDepth').and_return(0);
        expect(menu._indexUrl()).to(equal, 'index.html')
      });
      
      it('should return "../../../index.html" when path 3 levels deep', function() {
        stub(menu, '_getFolderDepth').and_return(3);
        expect(menu._indexUrl()).to(equal, '../../../index.html')
      });
      
    });
    
    describe('_getFolderDepth()', function() {
      
      it('should return 0 when path is root', function() {
        stub(menu, '_currentUrl').and_return('/dir/jquery_examples/');
        expect(menu._getFolderDepth()).to(equal, 0)
      });
      
      it('should return 1 when nested one folder deep', function() {
        stub(menu, '_currentUrl').and_return('/dir/jquery_examples/spec/');
        expect(menu._getFolderDepth()).to(equal, 1);
      });
      
      it('should return 3 when nested three folders deep', function() {
        stub(menu, '_currentUrl').and_return('/dir/jquery_examples/1/3/3'); // intentionally left off trailing slash
        expect(menu._getFolderDepth()).to(equal, 3);
      });
      
      it('should not count html files as a folder', function() {
        stub(menu, '_currentUrl').and_return('/dir/jquery_examples/test.html');
        expect(menu._getFolderDepth()).to(equal, 0);
      });
      
    });
    
  });
  
});