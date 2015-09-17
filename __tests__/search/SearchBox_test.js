jest.dontMock('../../src/components/search/SearchBox.jsx');
var React = require('react/addons');
var SearchBox = require('../../src/components/search/SearchBox');

describe('SearchBox', function() {
  
  var TestUtils = React.addons.TestUtils;

  it('should exists', function() {
    var searchBox = TestUtils.renderIntoDocument( <SearchBox /> );
    expect(TestUtils.isCompositeComponent(searchBox)).toBeTruthy();
  });

  it('should search for Pink Floyd', function() {
    var callback = function(what){ 
      expect(what).toEqual('Pink Floyd'); 
    };
    var searchBox = TestUtils.renderIntoDocument( <SearchBox onSearchCallback={callback}/> );
    var input = TestUtils.findRenderedDOMComponentWithTag(searchBox, 'input').getDOMNode();
    var button = TestUtils.findRenderedDOMComponentWithTag(searchBox, 'button').getDOMNode();
        
    input.value = 'Pink Floyd';
    TestUtils.Simulate.click(button);
  });
});