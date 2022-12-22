import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Example from '../index';

describe('Example', () => {
    test('it displays the text Example', () => { 
        render(<Example />);

        expect(screen.getByText(/example/i)).toBeInTheDocument();
    })
});
