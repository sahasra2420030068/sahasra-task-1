import React, { useState } from 'react';
import { StarIcon } from './icons';

interface RatingProps {
  count: number;
  value: number;
  onChange: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({ count, value, onChange }) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const stars = Array(count).fill(0);

  const handleClick = (value: number) => {
    onChange(value);
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex space-x-1">
      {stars.map((_, index) => {
        const ratingValue = index + 1;
        return (
          // FIX: Moved mouse event handlers from StarIcon to the parent label element, as StarIcon does not accept these props.
          <label
            key={index}
            className="cursor-pointer"
            onMouseOver={() => handleMouseOver(ratingValue)}
            onMouseLeave={handleMouseLeave}
          >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
              className="sr-only"
            />
            <StarIcon
              className={`w-8 h-8 transition-colors duration-200 ${
                (hoverValue || value) >= ratingValue
                  ? 'text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
