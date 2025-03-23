import { FaFacebook, FaLinkedinIn, FaYoutube, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const SocialLink = ({ href, Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <button className="p-2 rounded-full">
            <Icon className="w-7 h-7 cursor-pointer transform transition duration-300 ease-in-out hover:scale-115 hover:text-[var(--navyblue)]" />
        </button>
    </a>
);

const FooterLink = ({ to, label }) => (
    <li>
        <Link to={to} className="cursor-pointer hover:text-[var(--navyblue)]">
            {label}
        </Link>
    </li>
);

const ContactItem = ({ href, Icon, text }) => (
    <li className="flex items-center justify-center md:justify-start gap-2">
        <Icon className="w-4 h-4 text-secondary" />
        <a href={href} className="hover:underline text-white hover:text-[var(--navyblue)]">
            {text}
        </a>
    </li>
);

function Footer() {
    const socialLinks = [
        { href: "https://www.facebook.com/share/18scDvLZNs/", Icon: FaFacebook },
        { href: "https://www.instagram.com/fruitrushpops?igsh=MWRlOXgxOXhna3E0dw==", Icon: RiInstagramFill },
        { href: "https://www.linkedin.com/company/fruitrush/?viewAsMember=true", Icon: FaLinkedinIn },
        { href: "", Icon: FaYoutube },
        { href: "", Icon: FaXTwitter }
    ];

    return (
        <div className="nav-text w-full bg-[var(--red)] relative text-white">
            <div className="absolute bottom-0 w-full h-full">
                <svg
                    className="bottom-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 600"
                    preserveAspectRatio="none"
                >
                    <path fill="#b4ebe6" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,138.7C384,96,480,64,576,74.7C672,85,768,139,864,176C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>

            <img
                src="basil.png"
                alt="Floating Image"
                className="absolute top-[200px] md:top-[40px] lg:top-[40px] left-0 md:left-10 w-[140px] md:w-[250px] h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />

            <div className= "relative flex flex-col items-center justify-center text-center px-8 pb-4 pt-40">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                    <div className="flex flex-col items-center lg:items-start mt-40">
                        <div className="flex space-x-2 z-11 text-white">
                            {socialLinks.map((link, index) => (
                                <SocialLink key={index} {...link} />
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-semibold mb-4">Learn more</h2>
                        <ul className="space-y-1 text-2xl">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/storepage" label="Store" />
                            <FooterLink to="/franchisepage" label="Franchise" />
                            <FooterLink to="/aboutpage" label="About us" />
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
                        <ul className="space-y-1 text-2xl">
                            <ContactItem href="tel:9350520969" Icon={FaPhone} text="+91 9350520969" />
                            <ContactItem href="mailto:info@fruitrushpops.com" Icon={IoMdMail} text="info@fruitrushpops.com" />
                        </ul>
                    </div>
                </div>

                <p className="text-xl mt-2 text-center text-[var(--navyblue)]">
                    Copyright 2025 © FruitRush - All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;