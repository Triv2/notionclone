import Image from "next/image";

interface HeroesProps {}

export const Heroes = () => {
  return (
  <div className="flex flex-col items-center justify-center max-w-5xl">
    <div className="flex items-center">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
        <Image
          src="/nh_nobg.png"
          alt="dochero"
          layout="fill"
          className="object-contain dark:hidden"
        />
         <Image
          src="/nh_nobg.png"
          alt="dochero-dark"
          layout="fill"
          className="object-contain hidden dark:block"
        />
      </div>
      <div className="relative h-[400px] w-[400px] hidden md:block">
        <Image
          src="/nh_nobg2.png"
          alt="readinghero"
          layout="fill"
          className="object-contain dark:hidden"
        />
        <Image
          src="/nh_nobg2.png"
          alt="readinghero-dark"
          layout="fill"
          className="object-contain hidden dark:block"
        />
      </div>
    </div>
  </div>
  );
}
