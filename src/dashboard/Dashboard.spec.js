// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<Dashboard1 />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<Dashboard2 />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = Enzyme.shallow(<Dashboard />);
    });

    it('has the initial state', () => {
        expect(wrapper.state()).toEqual({
            locked: false,
            closed: false,});
    })
});

describe('Gate', () => {
    it('should display Locked and Closed', () => {
        const { getByText } = render(<Dashboard />);
        
        const button1 = getByText(/Close Gate/i);
        fireEvent.click(button1);

        const button2 = getByText(/Lock Gate/i);
        fireEvent.click(button2);

        const item = getByText('Locked');
        expect(item).toBeInTheDocument();

        const open = getByText('Open Gate');
        expect(open).toBeDisabled();
    });

    it('cannot be closed or opened if it is locked', () => {
        const { getByText } = render(<Dashboard />);

        const button1 = getByText(/Close Gate/i);
        fireEvent.click(button1);

        const button2 = getByText(/Lock Gate/i);
        fireEvent.click(button2);

        expect(button1).toBeDisabled()
    });
});

describe('Controls', () => {
    it('should display Locked and Closed', () => {
        const { getByText } = render(<Dashboard />);

        const button1 = getByText(/Close Gate/i);
        fireEvent.click(button1);

        const button2 = getByText(/Lock Gate/i);
        fireEvent.click(button2);

        const item = getByText('Locked');
        expect(item).toBeInTheDocument();

        const open = getByText('Open Gate');
        expect(open).toBeDisabled();
    });
});