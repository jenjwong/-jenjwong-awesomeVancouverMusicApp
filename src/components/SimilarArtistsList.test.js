import React from 'react';
import { shallow } from 'enzyme';
import SimilarArtistsList from './SimilarArtistsList';
import SimilarArtistsEntry from './SimilarArtistsEntry';

test('SimilarArtistsList should render an SimilarArtistsEntry card for each concert in data-set', () => {
  const component = shallow(
    <SimilarArtistsList
      artists={['Dua Lipa', 'Banks', 'Lady Gaga', 'Zara Larsson', 'JoJo']}
    />);
  expect(component.find(SimilarArtistsEntry).length).toEqual(5);
});

test('SimilarArtistsList should render no SimilarArtistsEntry card when no similar artists', () => {
  const component = shallow(
    <SimilarArtistsList
      artists={[]}
    />);
  expect(component.find(SimilarArtistsEntry).length).toEqual(0);
});
