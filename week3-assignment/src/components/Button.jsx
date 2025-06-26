const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`px-4 py-2 rounded ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
