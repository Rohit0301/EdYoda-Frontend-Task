const DocmumentIcon = ({ isSelected }) => {
  const color = isSelected ? "#0048FF": '#fff'
  return (
    <svg
      width='26'
      height='29'
      viewBox='0 0 26 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ width: "1rem", height: "1.15rem" }}
    >
      <path
        d='M25 11.125L17.8 1H3.4C2.08 1 1 2.51875 1 4.375V24.6419C1 26.4981 2.08 28 3.4 28L22.6 27.9831C23.92 27.9831 25 26.4813 25 24.625V11.125ZM17.8 1L24.9475 11.0512L17.8 10V1Z'
        fill={color}
      />
      <path
        d='M17.8 1L25 11.125V24.625C25 26.4813 23.92 27.9831 22.6 27.9831L3.4 28C2.08 28 1 26.4981 1 24.6419V4.375C1 2.51875 2.08 1 3.4 1H17.8ZM17.8 1L24.9475 11.0512L17.8 10V1Z'
        stroke={isSelected ? '#0048ff': 'black'}
        strokeWidth='0.5'
      />
    </svg>
  );
};

export default DocmumentIcon;
