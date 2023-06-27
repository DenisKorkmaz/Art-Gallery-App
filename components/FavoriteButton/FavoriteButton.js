import React, { useState } from 'react';
import HeartUnlike from './heartUnlike';
import HeartLike from './heartLike';

export default function FavoriteButton({ onToggleFavorite, slug }) {
  const [isFavorite, setIsFavorite] = useState("false");

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(slug);
  };

  return (
    <button
      type="button"
      aria-label={isFavorite ? 'unlike' : 'like'}
      onClick={toggleFavorite}
    >
      {isFavorite ? <HeartUnlike /> : <HeartLike />}
    </button>
  );
}

