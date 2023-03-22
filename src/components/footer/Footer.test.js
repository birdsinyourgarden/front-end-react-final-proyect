import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer component', () => {
    const { getByTestId } = render(<Footer />);
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
});