import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font =Poppins ({
  subsets: ["latin"],
  weight:["400","600"]
});

interface LogoProps {}

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        fill
        src=""
        alt="logo"
        height={40}
        width={40}     
      />
      <p className={cn("font-semibold", font.className)}>Notion-Clone</p>
    </div>
  );
}
export default Logo;