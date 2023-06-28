import React, { useEffect, useState } from 'react';
import './Modal.css';
import { useSpring, animated } from '@react-spring/web';

export interface ModalProps {
  isOpen?: boolean;
  closeModal?: () => void;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  closeModal,
  children,
}: ModalProps): JSX.Element | null => {
  const [isAnimatingOut, setAnimatingOut] = useState(false);

  const animation = useSpring({
    opacity: isAnimatingOut || !isOpen ? 0 : 1,
    transform: isAnimatingOut || !isOpen ? 'scale(0.8)' : 'scale(1)',
    onRest: () => {
      if (isAnimatingOut && closeModal) {
        closeModal();
      }
    },
    config: {
      tension: 210,
      friction: 20,
    },
  });

  useEffect(() => {
    if (!isOpen) {
      setAnimatingOut(false);
    }
  }, [isOpen]);

  const handleClick = () => {
    setAnimatingOut(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClick();
    }
  };

  return isOpen || isAnimatingOut ? (
    <animated.div
      className="modal"
      style={{ opacity: animation.opacity }}
      onClick={handleBackdropClick}
    >
      <animated.div className="modal-content" style={animation}>
        {children}
        <span className="close" onClick={handleClick}>
          x
        </span>
      </animated.div>
    </animated.div>
  ) : null;
};

export default Modal;
