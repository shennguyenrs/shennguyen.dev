import { useState, useEffect, useRef, MutableRefObject } from 'react';

function useHover<T>(): [MutableRefObject<T>, boolean] {
  const [value, setValue] = useState(false);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  const ref: any = useRef<T | null>(null);

  useEffect(() => {
    const node: any = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, value];
}

export default useHover;
