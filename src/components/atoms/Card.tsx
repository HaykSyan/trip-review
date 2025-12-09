type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: Props) => (
  <div className={`bg-white rounded-lg shadow p-3 ${className}`}>
    {children}
  </div>
);
