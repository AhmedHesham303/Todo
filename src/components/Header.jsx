function Header() {
  return (
    <header className="flex justify-between w-full mt-16 mb-10">
      <h1 className="text-4xl  text-white font-bold tracking-[15px] font-josefin">
        TODO
      </h1>
      <img
        className="w-6 h-6 hover:cursor-pointer"
        src="/src/assets/moon-icon.svg"
        alt="moon icon"
      />
    </header>
  );
}

export default Header;
