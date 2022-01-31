import { useState } from 'react';

const useHover = () => {
  const [hovering, setHovering] = useState<boolean>(false);

  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };

  return [hovering, onHoverProps];
};

export default useHover;
