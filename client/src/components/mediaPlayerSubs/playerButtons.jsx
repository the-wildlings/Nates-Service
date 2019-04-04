import React, { Component } from 'react';
import BuyButton from './buyButtonMediaPlayer';
import KeyboardShortcuts from './playerButtonsSubs/keyboardShortcuts';
import VolumeControls from './playerButtonsSubs/volumeControls';
import PlayerControls from './playerButtonsSubs/playerControls';
import QueueExpand from './playerButtonsSubs/queueExpand';
import style from '../../../styles/playerButtons';

const PlayerButtons = props => {
  return (
    <div className={style.playerButtons}>
      <BuyButton price={props.price} />
      <KeyboardShortcuts />
      <VolumeControls />
      <PlayerControls
        playState={props.playState}
        playSong={props.playSong}
        pauseSong={props.pauseSong}
      />
      <QueueExpand
        queueOpen={props.queueOpen}
        expandQueue={props.expandQueue}
      />
    </div>
  );
};

export default PlayerButtons;
