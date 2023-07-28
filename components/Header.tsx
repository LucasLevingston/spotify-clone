"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {};
  return (
    <div
      className="bg-neutral-900
        rounded-lg
        h-full
        -full
        overflow-hidden
        overflow-y-auto"
    ></div>
  );
};

export default Header;
