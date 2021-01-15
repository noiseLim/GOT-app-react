import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
require('jest-extended');

configure({adapter: new Adapter()});

const config = {
    "jest": {
        "setupFilesAfterEnv": ["jest-extended"]
      }
}

export default config;