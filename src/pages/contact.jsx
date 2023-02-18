import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
      className=""
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <section>
        <div className="flex justify-center items-center   dark:shadow-slate-900">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 m-auto bg-slate-50 rounded-2xl shadow-2xl">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex">
                  <h1 className=" name font-bold uppercase text-5xl">
                    Send us a <br /> message
                  </h1>
                </div>
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
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button
                    className="name uppercase text-sm font-bold tracking-wide shadow-md text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Send"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
