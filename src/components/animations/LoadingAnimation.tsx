import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/animations/loading.json';

interface LoadingAnimationProps {
  width?: number;
  height?: number;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ width = 200, height = 200 }) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default LoadingAnimation;