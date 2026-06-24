function AuthInput({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-600 transition"
    />
  );
}

export default AuthInput;