import Image from "next/image";

function SectionJourney() {
  return (
    <div
      id="journey"
      className="grid md:grid-cols-2 gap-6 items-center page-center md:pt-24  py-12"
    >
      <div className="mx-auto">
        <Image src="/images/foto.png" width={531} height={399} alt="Journey" />
      </div>
      <div className="grid gap-8">
        <div className="grid gap-4">
          <h2 className="text-ink font-bold md:text-3xl text-xl">
            This My Journey 🔥
          </h2>
          <p className="text-ink font-light md:text-lg text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        {/* Coming Soon for this */}
        {/* <div className="flex gap-12 bg-subtle text-ink rounded-xl w-fit px-6 py-3">
          <div className="grid gap-2">
            <p className="md:text-2xl text-lg">
              <b className="font-bold">28K+</b>
            </p>
            <p className="font-light">TikTok</p>
          </div>
          <div className="grid gap-2">
            <p className="md:text-2xl text-lg">
              <b className="font-bold">11K+</b>
            </p>
            <p className="font-light">Instagram</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export { SectionJourney };
