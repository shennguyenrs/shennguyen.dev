export const slideRight = {
  name: 'Slide Right',
  variants: {
    initial: {
      opacity: 0,
      left: '-100%',
    },
    animate: {
      opacity: 1,
      left: 0,
    },
    exit: {
      opacity: 0,
      left: '100%',
    },
  },
  transition: {
    duration: 0.8,
  },
};

export const scaleUp = {
  name: 'Scale Up',
  variants: {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  },
  transition: {
    duration: 1,
  },
};
