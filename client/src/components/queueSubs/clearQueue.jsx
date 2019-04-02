import React from 'react';
import DownArrowInCircleIcon from '../../../icons/downArrowInCircleIcon';
import style from '../../../styles/ClearQueue';

const ClearQueue = props => {
  return (
    <div className={style.clearQueueContainer}>
      <a href="">CLEAR QUEUE</a>
      <div className={style.closeQueue}>
        <DownArrowInCircleIcon />
      </div>
    </div>
  );
};

export default ClearQueue;
