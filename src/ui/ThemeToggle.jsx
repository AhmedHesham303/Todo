function ThemeToggle({ isDark, setIsDark }) {
  const handelThemeClick = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((state) => !state);
  };

  return (
    <img
      className="w-6 h-6 hover:cursor-pointer"
      src={isDark ? "/src/assets/sun-icon.svg" : "/src/assets/moon-icon.svg"}
      alt={isDark ? "moon icon" : "sun icon"}
      onClick={handelThemeClick}
    />
  );
}

export default ThemeToggle;
