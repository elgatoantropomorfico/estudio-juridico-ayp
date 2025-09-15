'use client';

import { useState } from 'react';
import styles from './AnimatedStat.module.css';

interface AnimatedStatProps {
  value: string;
  label: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`${styles.statContainer} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.statNumber}>
        {value}
      </span>
      <span className={styles.statLabel}>
        {label}
      </span>
    </div>
  );
};

export default AnimatedStat;
