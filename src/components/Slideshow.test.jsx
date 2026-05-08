import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Slideshow from './Slideshow.jsx';

describe('Slideshow', () => {
  it('shows count and cycles images', () => {
    render(<Slideshow images={['/one.jpg', '/two.jpg']} />);

    expect(screen.getByText('1 of 2')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '❯' }));
    expect(screen.getByText('2 of 2')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '❮' }));
    expect(screen.getByText('1 of 2')).toBeInTheDocument();
  });
});
