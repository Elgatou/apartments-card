export function Like({ isActive }) {
  const color = isActive ? '#F44336' : 'lightgray';
  return (
    <svg version="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
      <path
        fill={color}
        d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
      />
    </svg>
  );
}
