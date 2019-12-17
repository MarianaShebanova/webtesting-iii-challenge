// Test away!
import React from 'react';
import Display from './Display';
import { render, fireEvent, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('<Display1 />', () => {
    it('should display Locked and Closed', () => {
        const { getByText } = render(<Display closed={true} locked={true}/>)
        console.log(getByText)
        const item = getByText('Locked');
        expect(item).toBeInTheDocument();

        const open = getByText('Closed');
        expect(open).toBeInTheDocument();
        });
    it('should display Unlocked and Open', () => {
        
        const { getByText } = render(<Display locked={false} closed={false}/>)
        
        const item = getByText('Unlocked');
        expect(item).toBeInTheDocument();

        const open = getByText('Open');
        expect(open).toBeInTheDocument();
    });
});

describe('<Display2 />', () => {
    it('test classes', () => {
        const { getByText } = render(<Display locked={true} closed={true} />)

        const linkElement = getByText(/Locked/i);
        expect(linkElement).toHaveClass('red-led');

        const element = getByText(/Closed/i);
        expect(element).toHaveClass('red-led');
    });
    it('test classes', () => {
        const { getByText } = render(<Display locked={false} closed={false} />)

        const linkElement = getByText(/Unlocked/i);
        expect(linkElement).toHaveClass('green-led');

        const element = getByText(/Open/i);
        expect(element).toHaveClass('green-led');
    });
});