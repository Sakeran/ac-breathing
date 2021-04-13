import { useRef, useState, useImperativeHandle, forwardRef } from "react";
import { useSpring, animated } from "react-spring";

import TouchPoint from "./TouchPoint";

import "./TouchField.css";

// Key Coordinates
const BL = { x: 20, y: 80 };
const TL = { x: 20, y: 20 };
const TR = { x: 80, y: 20 };
const BR = { x: 80, y: 80 };

// Key Stages
const stages = [
  [0, "Breathe In", TL],
  [1, "Hold", TR],
  [2, "Breathe Out", BR],
  [3, "Hold", BL],
];

const TouchField = forwardRef((_props, ref) => {
  // Point Refs for imperative pulse
  const tl = useRef();
  const pulseTL = () => tl.current && tl.current.pulse();

  const tr = useRef();
  const pulseTR = () => tr.current && tr.current.pulse();

  const br = useRef();
  const pulseBR = () => br.current && br.current.pulse();

  const bl = useRef();
  const pulseBL = () => bl.current && bl.current.pulse();

  const pulses = [pulseTL, pulseTR, pulseBR, pulseBL];

  // Message
  const [msg, setMsg] = useState("");

  // Tracker Animation
  const [trackerProps, setTracker] = useSpring(() => BL);

  const resetTracker = () => {
    setMsg("");

    setTracker({
      cancel: true,
    });
    setTracker({ immediate: true, ...BL });
  };

  const cycleTracker = () => {
    setTracker({
      config: { duration: 4000 },
      from: BL,
      to: async (next) => {
        for (const s of stages) {
          setMsg(s[1]);
          await next(s[2]);
          pulses[s[0]]();
        }

        cycleTracker();
      },
    });
  };

  // Imperative API
  useImperativeHandle(ref, () => ({
    // Obs - msg is only non-empty when playing, so it can be used as a guard.
    start: () => msg == "" && cycleTracker(),
    reset: resetTracker,
  }));

  return (
    <div className="touch-field">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* TRACK */}
        <rect x="15" y="20" width="10" height="60" fill="#131712" />
        <rect x="20" y="15" width="60" height="10" fill="#131712" />
        <rect x="20" y="75" width="60" height="10" fill="#131712" />
        <rect x="75" y="20" width="10" height="60" fill="#131712" />

        {/* TOP LEFT */}
        <TouchPoint ref={tl} x={20} y={20} />

        {/* TOP RIGHT */}
        <TouchPoint ref={tr} x={80} y={20} />

        {/* BOTTOM RIGHT */}
        <TouchPoint ref={br} x={80} y={80} />

        {/* BOTTOM LEFT */}
        <TouchPoint ref={bl} x={20} y={80} />

        {/* TRACKER */}
        <animated.circle
          cx={trackerProps.x}
          cy={trackerProps.y}
          r="10"
          stroke="green"
          strokeWidth="1"
          opacity="0.75"
        />

        {/* MESSAGE */}
        <animated.text
          textAnchor="middle"
          fontSize="7"
          x="50"
          y="52"
          fill="#4dff4d"
        >
          {msg}
        </animated.text>
      </svg>
    </div>
  );
});

export default TouchField;
