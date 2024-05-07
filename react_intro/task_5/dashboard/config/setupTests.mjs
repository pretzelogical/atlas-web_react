import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// NOTE: enzyme isn't working here, probably because it's ded
Enzyme.configure({ adapter: new Adapter() });

const shallow = Enzyme.shallow;
const mount = Enzyme.mount;
const unmount = Enzyme.unmount;


export { shallow, mount, unmount };