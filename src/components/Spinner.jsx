import React from 'react';
import PreloaderIcon, { ICON_TYPE } from 'react-preloader-icon';

export default ({ type = 'TAIL_SPIN', size = 60, strokeWidth = 8, strokeColor = '#006064', duration = 800, style = { margin: '0 auto' } }) =>
  <PreloaderIcon style={style} type={ICON_TYPE[type]} size={size} strokeWidth={strokeWidth} strokeColor={strokeColor} duration={duration} />
