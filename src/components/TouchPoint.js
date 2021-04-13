import { forwardRef, useImperativeHandle } from "react";
import { animated, useSpring } from "react-spring";

// One of the four points on the TouchField elements.
// Has an imperative 'pulse' animation.

const TouchPoint = forwardRef(({ x, y }, ref) => {
  const [props, set] = useSpring(() => ({
    r: 8,
    opacity: 1,
  }));

  useImperativeHandle(ref, () => ({
    pulse: () => {
      set({
        from: {
          r: 8,
          opacity: 1,
        },
        to: {
          r: 14,
          opacity: 0,
        },
      });
    },
  }));

  return (
    <g>
      <animated.circle style={props} cx={x} cy={y} r="14" fill="#6fff78" />
      <circle cx={x} cy={y} r="10" fill="#36642F" />
    </g>
  );
});

export default TouchPoint;
