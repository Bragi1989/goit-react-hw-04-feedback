import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => handleButtonClick(option)}
          style={{ fontWeight: option === selectedOption ? 'bold' : 'normal' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;