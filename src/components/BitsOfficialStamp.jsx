import React from 'react';
import { bitsOfficialStampBase64 } from '../data/bitsStampBase64';

export default function BitsOfficialStamp({
  size = 90,
  rotate = -3,
  opacity = 0.94,
  style = {},
  className = '',
  title = 'BITS Pilani Hyderabad Campus Official Institutional Seal'
}) {
  return (
    <div
      className={`bits-official-seal-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: rotate ? `rotate(${rotate}deg)` : 'none',
        opacity: opacity,
        filter: 'drop-shadow(0 1px 3px rgba(0, 75, 147, 0.25))',
        userSelect: 'none',
        pointerEvents: 'none',
        ...style
      }}
      title={title}
    >
      <img
        src={bitsOfficialStampBase64}
        alt="BITS Pilani Official Examination Division Seal"
        width={size}
        height={size}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}
