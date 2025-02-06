import Image from "next/image";
import { Label } from "../Label";

function Hero() {
  return (
    <div className="page-center grid grid-cols-3 items-center md:pt-40 md:pb-24 pt-12 pb-12 ">
      <div className="grid col-span-2 gap-6 ">
        <Label label="Muhammad Rzizky Febriyanto" />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl lg:text-6xl dark:text-white">
          Sofware Engineering Student TUS '23
        </h1>
        <p className="text-ink font-light md:text-xl text-lg md:w-9/12">
          Breathing life into designs, transforming magic into code, and making
          a positive impact. ✨
        </p>
      </div>
      <div className="mx-auto">
        {/* /TODO: Skip this */}
        {/* <Image
          src="/images/PatternUpdate1.svg"
          width={700}
          height={700}
          alt="pattern"
          className="absolute bottom-0 right-0 top-16 z-0"
        /> */}
        <Image
          src="/images/AvatarRizky1.png"
          width={224}
          height={189}
          alt="pattern"
          className="relative"
        />
      </div>
    </div>
  );
}

export { Hero };
