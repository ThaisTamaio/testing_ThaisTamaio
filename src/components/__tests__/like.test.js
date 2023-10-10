import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Like from '../Like';

describe('Like Component', () => {
  
  test('should display default likes count as "Likes: 0"', () => {
    const { getByText } = render(<Like />);
    expect(getByText('Likes: 0')).toBeInTheDocument();
  });

  test('should increment likes count by 1 from any initial value when "Like" button is clicked', () => {
    const { getByText } = render(<Like />);
    const likeButton = getByText('Like');
    const dislikeButton = getByText('Dislike');

    fireEvent.click(dislikeButton);
    fireEvent.click(dislikeButton);
    expect(getByText('Likes: -2')).toBeInTheDocument();

    fireEvent.click(likeButton);
    expect(getByText('Likes: -1')).toBeInTheDocument();
  });

  test('should decrement likes count by 1 from any initial value when "Dislike" button is clicked', () => {
    const { getByText } = render(<Like />);
    const likeButton = getByText('Like');
    const dislikeButton = getByText('Dislike');

    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    expect(getByText('Likes: 3')).toBeInTheDocument();

    fireEvent.click(dislikeButton);
    expect(getByText('Likes: 2')).toBeInTheDocument();
  });

});