export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-6 ${className}`}
    >
      {children}
    </div>
  );
}
