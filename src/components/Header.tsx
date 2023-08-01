import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
}

const Header: React.FC<HeaderProps> = ({ value, setValue, placeholder }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleOnClick: () => void = () => {
    setVisible(!visible);
  };

  return (
    <header className="flex h-11 w-full justify-between text-white">
      <p>Posts by Unstate</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-2/5 rounded-md p-2 text-black"
      />
      <nav className="hidden gap-2 sm:flex">
        <div className="cursor-pointer transition-colors ease-in hover:text-cyan-500">
          <Link to="/aboutMe">About me</Link>
        </div>
        <div className="cursor-pointer transition-colors ease-in hover:text-cyan-500">
          <Link to="/posts">Posts</Link>
        </div>
        <div className="cursor-pointer transition-colors ease-in hover:text-cyan-500">
          <Link to="/posts">Something</Link>
        </div>
      </nav>
      <button className="block text-white sm:hidden" onClick={handleOnClick}>
        CLICK
      </button>
      {visible ? (
        <div className="fixed left-0 top-0 h-[100vh] w-[100vw]">
          <div className="fixed right-0 top-0 z-10 flex min-h-screen w-1/3 flex-col gap-y-10 bg-white p-1 text-black">
            <button onClick={handleOnClick} className="rounded-lg border-2 p-1">
              Close
            </button>
            <nav className="flex flex-col">
              <div className="transition-colors ease-in hover:text-cyan-500">
                <Link to="/aboutMe">About me</Link>
              </div>
              <div className="transition-colors ease-in hover:text-cyan-500">
                <Link to="/posts">Posts</Link>
              </div>
              <div className="transition-colors ease-in hover:text-cyan-500">
                <Link to="/posts">Something</Link>
              </div>
            </nav>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
