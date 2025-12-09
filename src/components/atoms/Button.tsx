type Props = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode | string;
};

export const Button = ({ onClick, className, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
