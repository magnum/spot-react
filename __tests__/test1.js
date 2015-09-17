jest.dontMock('../src/components/search/SearchBox.jsx');
var React = require('react/addons');
var SearchBox = require('../src/components/search/SearchBox');

describe('SearchBox', function() {
  
  var TestUtils = React.addons.TestUtils;

  beforeEach(function() {
    console.log('REQUIRED SearchBox');
  });

  it('should exists', function() {
    console.log('START SearchBox');
    var searchBox = TestUtils.renderIntoDocument( <SearchBox /> );
    console.log('CREATED SearchBox');
    expect(TestUtils.isCompositeComponent(searchBox)).toBeTruthy();
  });
});