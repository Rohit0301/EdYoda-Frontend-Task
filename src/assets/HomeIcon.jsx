import React from "react";

export default function HomeIcon({isSelected}) {
  const color = isSelected ? 'var(--background-blue)' : '#fff'
  return (
    <svg
      width='20'
      height='17'
      viewBox='0 0 20 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ width: "1.6rem", height: "2rem" }}
    >
      <path d='M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z' fill={color} />
    </svg>
  );
}
