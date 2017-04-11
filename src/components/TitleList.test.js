import React from 'react';
import { shallow } from 'enzyme';
import VideoList from './VideoList';
import VideoEntry from './VideoEntry';

test('VideoList should render an VideoEntry card for each concert in data-set', () => {
  const component = shallow(
    <VideoList
      photo={'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,b_rgb:090909,q_60,fl_lossy,w_1200,h_450/v1478108370/event-6855342.jpg'}
      youTube={['9-JhfFo7pMo', '1Zfmvc4CGbQ']}
      isRendered={true}
      id={99}
    />);
  expect(component.find(VideoEntry).length).toEqual(2);
});

test('VideoList should render no videos when isRendered is false', () => {
  const component = shallow(
    <VideoList
      photo={'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,b_rgb:090909,q_60,fl_lossy,w_1200,h_450/v1478108370/event-6855342.jpg'}
      youTube={['9-JhfFo7pMo', '1Zfmvc4CGbQ']}
      isRendered={false}
      id={99}
    />);
  expect(component.find(VideoEntry).length).toEqual(2);
});
