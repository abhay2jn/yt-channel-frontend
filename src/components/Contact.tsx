import { FaTwitter, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const links = [
    {
      href: "https://twitter.com/@SeedheMaut",
      label: "Twitter",
      icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
    },
    {
      href: "https://youtube.com/@SeedheMaut",
      label: "YouTube",
      icon: <FaYoutube className="h-6 w-6 text-red-600" />,
    },
    {
      href: "https://github.com/abhay2jn",
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6" />,
    },
    {
      href: "https://instagram.com/SeedheMaut",
      label: "Instagram",
      icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
    },
  ];

  return (
    <section className=" bg-[#212121] py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold mb-6">Contact Me</h2>
      <div className="flex items-center ">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-blue-600 mr-[2rem]"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;