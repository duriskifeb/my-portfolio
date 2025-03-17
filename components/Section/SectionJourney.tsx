import Image from "next/image";

function SectionJourney() {
  return (
    <div
      id="journey"
      className="grid md:grid-cols-2 gap-6 items-center page-center md:pt-24  py-12 -mt-5"
    >
      <div className="mx-auto">
        <Image src="/images/foto.png" width={531} height={399} alt="Journey" />
      </div>
      <div className="grid gap-8">
        <div className="grid gap-4">  
          <h2 className="text-ink font-bold md:text-3xl text-xl">
            Sedikit tentang ku 🙃
          </h2>
          <p className="text-ink font-light md:text-lg text-md">
            Aku orang Pasuruan, East java. suka makan dan merokok, mungkin
            membaca dan menulis adalah hobiku, suka jalan jalan dan melihat hal
            keramain dan pemandangan alam terkadnang romantis
            <br />
            <br />
            Hobi dan kesukaanku adalah membaca dan menulis terkadang dan
            menuliskan sebuah code asal yg tak mengerti apa masksud dan
            logikanya persetan!
            <br />
            <br />
            Kebebasan dan kelasngsungan hidup tanpa ada batasan adalah mungkin,
            pegangan ku aku tidak mau seprti di kurung oleh dunia eksakta dunia
            materi dan tori bebas aja lah, buat apa aja
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
