// Create a test suite
// Smoke test
// Snapshot test

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './list';

// Testing suite for Card.js
describe('<List />', () => {
  // Smoke Test
    it('renders without crashing', () => {
      // Create a DOM element to render the component into
      const div = document.createElement('div');

      ReactDOM.render(<List 
        list={{header: 'Header', cardIds: ['a', 'b']}} 
        allCards={{'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' }}}/>, div);

      ReactDOM.unmountComponentAtNode(div);
    });

  // Snapshot Test
  it('renders this UI as expected', () => {
    const tree = renderer.create(<List 
      list={{header: 'Header', cardIds: ['a', 'b']}} 
      allCards={{'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' }}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

});