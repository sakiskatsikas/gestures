import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { useSpring } from 'react-spring';
import { useDrag, useGesture } from 'react-use-gesture';

import { animated } from 'react-spring';

const animationConfig = { mass: 1, tension: 400, friction: 30 };

interface StyledProps {
  isDragging: boolean;
}

const StyledDragBox = styled(animated.div)<StyledProps>`
  width: 200px;
  height: 200px;
  position: relative;
  user-select: none;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 2rem;
  margin: 0.5rem;
  background-color: ${({ isDragging }) => (isDragging ? '#ffffff66' : 'transparent')};
`;

const DragBox: FC<any> = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [{ x, y }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    config: animationConfig,
  }));
  // const bind = useDrag(({ down, movement: [mx, my] }) => {
  //   set({ x: down ? mx : 0, y: down ? my : 0 });
  // });

  const bind2 = useGesture({
    onDrag: ({ down, movement: [mx, my] }) => set({ x: down ? mx : 0, y: down ? my : 0 }),
    onDragStart: (state) => setIsDragging(true),
    onDragEnd: (state) => setIsDragging(false),
  });

  return (
    <StyledDragBox {...bind2()} style={{ left: x, top: y }} isDragging={isDragging}>
      Drag me
    </StyledDragBox>
  );
};

export default DragBox;
