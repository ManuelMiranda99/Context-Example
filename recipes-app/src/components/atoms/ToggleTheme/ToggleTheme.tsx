import {
  BackgroundThemes,
  useBackgroundContext,
} from "../../organisms/Background/BackgroundContext/BackgroundContext";

const ToggleTheme = () => {
  const { setTheme, theme } = useBackgroundContext();

  const handleChange = () => {
    if (theme === BackgroundThemes.Light) {
      setTheme(BackgroundThemes.Dark);
      return;
    }
    setTheme(BackgroundThemes.Light);
  };

  return (
    <label
      htmlFor="toggle-example"
      className="relative flex items-center mb-4 cursor-pointer"
    >
      <input
        type="checkbox"
        id="toggle-example"
        className="sr-only"
        onChange={handleChange}
      />
      <div className="h-6 bg-gray-200 border-2 border-gray-200 rounded-full toggle-bg w-11"></div>
      <span className="ml-3 text-sm font-medium text-white">Cambiar fondo</span>
    </label>
  );
};

export default ToggleTheme;
