import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { github, instaIcon, linkedin, telegramIcon, twitter } from "../assets";

function Contact() {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setMsg("");
    setEmail("");
    emailjs
      .sendForm(
        "service_luzr4en",
        "template_wu4i3w8",
        form.current,
        "hC7cFCja4I2WZEnaT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successful send message");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  };
  return (
    <motion.div
      className="md:px-36 px-6  mt-16 text-secondary"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <section>
        <h1 className=" md:text-5xl text-3xl mb-7 font-bold text-white">
          Contact
        </h1>
        <div className="grid justify-center items-center md:grid-cols-2 grid-cols-1  gap-20  dark:shadow-slate-900">
          <div>
            <div className="flex gap-2 capitalize mb-3 text-sm font-bold tracking-wide shadow-md text-gray-100">
              <h1 className="text-2xl">Call:</h1>
              <h2 className="text-xl">
                <a className="name" href="tel:+992330708708">
                  +992330708708
                </a>
              </h2>
            </div>
            <div className="flex gap-2 mb-3  text-sm font-bold tracking-wide shadow-md text-gray-100">
              <h1 className="text-2xl">Email:</h1>
              <h2 className="text-xl">
                <a className="name" href="mailto:asqarbekolimov.dev@gmail.com">
                  asqarbekolimov.dev@gmail.com
                </a>
              </h2>
            </div>
            <div className="flex gap-2 mb-3 capitalize text-sm font-bold tracking-wide shadow-md text-gray-100">
              <h1 className="text-2xl">Location:</h1>
              <h2 className="name text-xl">
                Navoi region, Qiziltepa distirect
              </h2>
            </div>
            <div className="flex gap-2 mb-3 text-sm font-bold tracking-wide shadow-md text-gray-100">
              <h1 className="text-2xl">Website:</h1>
              <h2 className="text-xl">
                <a className="name" href="https://www.asqarbekdev.uz">
                  www.asqarbekdev.uz
                </a>
              </h2>
            </div>
            <div className=" flex gap-5 social-icon">
              <a href="https://github.com/asqarbekolimov" target={"_blank"}>
                <img src={github} alt="githubLogo" />
              </a>
              <a
                href="https://uz.linkedin.com/in/asqarbekolimov"
                target={"_blank"}
              >
                <img src={linkedin} alt="LinkedinLogo" />
              </a>
              <a href="https://twitter.com/asqarbek_olimov" target={"_blank"}>
                <img src={twitter} alt="TwitterLogo" />
              </a>
              <a href="https://asqarbekolimov.t.me" target={"_blank"}>
                <img
                  className="rounded-full w-8"
                  src={telegramIcon}
                  alt="TwitterLogo"
                />
              </a>
              <a
                href="https://www.instagram.com/mr_asqarbek/"
                target={"_blank"}
              >
                <img
                  className="rounded-full w-8"
                  src={instaIcon}
                  alt="TwitterLogo"
                />
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            {/* <div className="flex">
              <h1 className=" name font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div> */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name*"
              />
              <input
                name="user_email"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
              />
            </div>
            <div className="my-4">
              <textarea
                name="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="bg-slate-50 rounded my-2 w-1/2 lg:w-1/4">
              <button
                className="name uppercase text-sm font-bold tracking-wide shadow-md text-gray-100 bg-slate-50 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
