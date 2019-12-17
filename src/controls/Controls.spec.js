// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';
import '@testing-library/jest-dom/extend-expect';

describe('<Controls />', () => {
    it('should display Locked and Closed', () => {
        const { getByText } = render(<Controls locked={true} closed={true}/>);
        
        const item = getByText('Unlock Gate');
        expect(item).toBeInTheDocument();

        const open = getByText('Open Gate');
        expect(open).toBeInTheDocument();
    });

    it('should call open', () => {
        const mockToggleLocked = jest.fn();
        const mockToggleClosed = jest.fn();
        const { getByText } = render(<Controls 
            locked={false} 
            closed={false} 
            toggleLocked={mockToggleLocked}
            toggleClosed={mockToggleClosed}/>);

        const open = getByText('Close Gate');
        expect(open).toBeInTheDocument();
        fireEvent.click(open);
        expect(mockToggleClosed.mock.calls.length).toBe(1);
        expect(mockToggleLocked.mock.calls.length).toBe(0);
    });

    it('should call open', () => {
        const mockToggleLocked = jest.fn();
        const mockToggleClosed = jest.fn();
        const { getByText } = render(<Controls
            locked={false}
            closed={true}
            toggleLocked={mockToggleLocked}
            toggleClosed={mockToggleClosed} />);

        const open = getByText('Lock Gate');
        expect(open).toBeInTheDocument();
        fireEvent.click(open);
        expect(mockToggleClosed.mock.calls.length).toBe(0);
        expect(mockToggleLocked.mock.calls.length).toBe(1);
    });
});