import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { jest } from '@jest/globals';
import fetchMock from 'jest-fetch-mock';
import ReduxMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

const shallow = Enzyme.shallow;
const mount = Enzyme.mount;
const unmount = Enzyme.unmount;

const configureStore = ReduxMockStore.default;

export { shallow, mount, unmount, jest, configureStore, fetchMock };
