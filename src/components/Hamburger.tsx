import { motion } from "framer-motion";

type Props = {
  isOpen?: boolean;
  onClick: () => void;
};

const HamburgerMenu = ({ isOpen = false, onClick }: Props) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };

  const width = 24;
  const height = 24;

  const lineProps = {
    stroke: "green",
    strokeWidth: 1 as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      className="hamburger-menu"
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      onClick={onClick}
    >
      <motion.line
        className="hamburger-line"
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        className="hamburger-line"
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        className="hamburger-line"
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export { HamburgerMenu };
