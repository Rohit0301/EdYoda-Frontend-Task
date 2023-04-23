import React from "react";

export default function ModuleIcon({isSelected}) {
  const color = isSelected ? 'var(--background-blue)' : '#fff'
  return (
    <svg
      width='131'
      height='106'
      viewBox='0 0 131 106'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ width: "1.6rem", height: "2rem" }}
    >
      <rect
        y='13.564'
        width='25.2918'
        height='92.3102'
        rx='12.6459'
        fill={color}
      />
      <rect
        x='56.7025'
        width='25.2918'
        height='104.744'
        rx='12.6459'
        fill={color}
      />
      <rect
        width='25.2284'
        height='96.3039'
        rx='12.6142'
        transform='matrix(0.985277 -0.170967 0.199323 0.979934 86.9475 11.6285)'
        fill={color}
      />
      <rect
        x='26.6997'
        y='50.8649'
        width='28.1473'
        height='36.5473'
        rx='8'
        fill={color}
      />
      <path
        d='M27.1077 44.4028C27.1077 37.7754 32.4803 32.4028 39.1077 32.4028H43.255C49.8824 32.4028 55.255 37.7754 55.255 44.4028V47.4739H27.1077V44.4028Z'
        fill={color}
      />
      <path
        d='M26.2918 90.8032H54.4391V93.8743C54.4391 100.502 49.0665 105.874 42.4391 105.874H38.2918C31.6644 105.874 26.2918 100.502 26.2918 93.8743V90.8032Z'
        fill={color}
      />
    </svg>
  );
}
