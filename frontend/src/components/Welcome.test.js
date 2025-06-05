import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome Component', () => {
  test('renders welcome message', () => {
    render(<Welcome />);
    const welcomeElement = screen.getByText(/Welcome to ATS System/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders key features section', () => {
    render(<Welcome />);
    const featuresTitle = screen.getByText(/Key Features:/i);
    expect(featuresTitle).toBeInTheDocument();
    
    const features = screen.getAllByRole('listitem');
    expect(features).toHaveLength(5);
  });
}); 