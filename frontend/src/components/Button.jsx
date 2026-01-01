function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
    >
      {text}
    </button>
  );
}

export default Button;
