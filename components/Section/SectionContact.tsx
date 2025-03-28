import { Button } from "../Button";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function SectionContact() {
  const buttons = [
    {
      label: "Facebook",
      icon: <FaFacebookF className="text-current" />,
      variant: "primary",
      href: "mailto:maretacodes@gmail.com",
    },
    {
      label: "Instagram",
      icon: <FaInstagram className="text-current" />,
      variant: "secondary",
      href: "https://wa.me/yournumber",
    },
    {
      label: "Twitter",
      icon: <FaTwitter className="text-current" />,
      variant: "secondary",
      href: "https://twitter.com/yourhandle",
    },
    {
      label: "GitHub",
      icon: <FaGithub className="text-current" />,
      variant: "secondary",
      href: "https://github.com/yourusername",
    },
  ];

  return (
    <section id="contact" className="section-contact py-12 bg-gray-50">
      <div className="page-center text-center flex gap-8 flex-col items-center">
        <h2 className="text-ink font-bold md:text-3xl text-xl mt-4 md:w-6/12 w-10/12">
          Tanyakan apapun, asal jangan man robbuka!
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {buttons.map((button, index) => (
            <Button
              key={index}
              className="w-fit flex items-center gap-3 px-5 py-3 transition-all hover:gap-4"
              variant={button.variant}
              href={button.href}
            >
              <span className="text-lg">{button.icon}</span>
              <span>{button.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export { SectionContact };
