import React from 'react';
import RandomChar from './randomChar';
import renderer from 'react-test-renderer';

describe('Testing <RandomChar/>', () => {
    it ('RandomChar have rendered correctly', () => {
        const char = renderer.create(<RandomChar/>).toJSON();
        expect(char).toMatchSnapshot();
    })
});