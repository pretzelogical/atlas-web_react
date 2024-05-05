import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

// NOTE: enzyme isn't working here, probably because it's ded
Enzyme.configure({ adapter: new Adapter() });
