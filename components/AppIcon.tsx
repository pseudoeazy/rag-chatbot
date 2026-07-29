import Image from "next/image";
import Link from "next/link";

const AppIcon = () => {
  return (
    <Link
      href="/"
      className="w-8 h-8 rounded bg-[#b8863a] flex items-center justify-center p-1.5"
    >
      <Image width={32} height={32} alt="logo" src={`/logo.png`} />
    </Link>
  );
};

export default AppIcon;
