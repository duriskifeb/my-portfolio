import Image from "next/image";
import { Label } from "../Label";

function Hero() {
  return (
    <div className="page-center grid grid-cols-3 items-center pt-12 pb-12 md:pt-40 md:pb-24">
      <div className="col-span-2 grid gap-6">
        <Label label="Muhammad Rzizky Febriyanto" />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink dark:text-white md:text-5xl lg:text-6xl">
          Software Engineering Student TUS '23
        </h1>
        <p className="text-lg font-light text-ink md:w-9/12 md:text-xl">
          Breathing life into designs, transforming magic into code, and making
          a positive impact. ✨
        </p>
      </div>
      <div className="relative mx-auto">
        <Image
          src="/images/Pattern.svg"
          width={700}
          height={700}
          alt="background pattern"
          className="absolute bottom-0 right-0 top-16 -z-10"
        />
        <Image
          src="/images/AvatarRizky1.png"
          width={224}
          height={189}
          alt="avatar"
          className="relative z-10"
        />
      </div>
    </div>
  );
}

export { Hero };
