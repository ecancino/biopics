import React from 'react';
import PreloaderIcon, { ICON_TYPE } from 'react-preloader-icon';

export default ({ type = 'OVAL', size = 60, strokeWidth = 8, strokeColor = '#006064', duration = 800 }) =>
  <PreloaderIcon
    style={{ margin: '0 auto' }}
    type={ICON_TYPE[type]}
    size={size}
    strokeWidth={strokeWidth}
    strokeColor={strokeColor}
    duration={duration}
  />
