const ToggleTheme = () => {
  return (
    <label
      htmlFor="toggle-example"
      className="relative flex items-center mb-4 cursor-pointer"
    >
      <input type="checkbox" id="toggle-example" className="sr-only" />
      <div className="h-6 bg-gray-200 border-2 border-gray-200 rounded-full toggle-bg w-11"></div>
      <span className="ml-3 text-sm font-medium text-white">Cambiar tema</span>
    </label>
  );
};

export default ToggleTheme;
