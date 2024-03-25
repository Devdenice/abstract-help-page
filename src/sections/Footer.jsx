import { footer } from "../constants";
import abtractLogo from "../../public/abstract-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black w-full py-12 items-center px-16">
      <div className="flex text-white gap-x-4  flex-wrap justify-between">
        {footer.map((footer) => (
          <div key={footer.title}>
            <div className="text-xl font-bold">{footer.title}</div>
            <div className="mt-3 text-sm font-normal">
              {footer.links.map((link) => (
                <div key={link.text}>{link.text}</div>
              ))}
            </div>
            {footer.title === "Company" && (
              <div
                key={footer.title}
                className="flex flex-wrap max-lg:gap-x-20 lg:gap-x-36 mt-6"
              >
                <div className="text-sm">
                  <h3 className="font-bold">Contact Us</h3>
                  <p>info@abstract.com</p>
                </div>
                <div>
                  <img
                    src={abtractLogo}
                    width={30}
                    height={30}
                    alt="Abstract Log"
                    className="mb-2"
                  />
                  <div>&copy; Copyright 2022</div>
                  <div>Abstract Studio Design, Inc.</div>
                  <div>All rights reserved</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="flex text-white">
        <div>
          <div>Contact Us</div>
          <p>info@abstract.com</p>
        </div>
        <div>Copyright</div>
      </div> */}
    </footer>
  );
};

export default Footer;
