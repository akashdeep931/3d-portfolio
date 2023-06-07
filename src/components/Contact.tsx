import { SectionWrapper } from "../hoc";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "../styles";
import { slideIn } from "../utils/motion";
import { check, cross, qr } from "../assets";
import { BounceLoader } from "react-spinners";

type Form = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setForm((currForm: Form): Form => {
      const newForm: Form = {
        ...currForm,
        [event.target.name]: event.target.value,
      };

      return newForm;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const insertedValues: string[] = Object.values(form);

    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(insertedValues[1])) {
      alert("Please provide a valid email address. Thanks.");
    } else if (insertedValues[2].trim().length < 10) {
      alert(
        "Please specify your message with a minimun of 10 characters. Thanks."
      );
    } else {
      setIsLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Akashdeep",
            from_email: form.email,
            to_email: "akashdeepsingh931@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_PUBLIC_KEY
        )
        .then(() => {
          setIsLoading(false);
          setIsSent(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  return (
    <section className="relative xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Want to know more? Hire me? &#127881; Get in touch! &#128071;
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {isLoading ? (
          <figure className="h-3/6 w-full flex justify-center items-center">
            <BounceLoader color="#fff" size={50} />
          </figure>
        ) : isSent ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <img src={check} alt="check gif" />
            <h4 className="font-semibold text-[22px]">Thank you!</h4>
            <p className="text-center text-[18px]">
              Message recieved. I will reach out to you as soon as possible.
              &#128512;
            </p>
            <button
              className="bg-[#0B2447] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#19376D]"
              onClick={() => setIsSent(false)}
            >
              Okay
            </button>
          </div>
        ) : isError ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <img src={cross} alt="cross gif" className="w-5/6" />
            <h4 className="font-semibold text-[22px]">Oops!</h4>
            <p className="text-center text-[18px]">
              Something went wrong. Try again later. &#128532;
            </p>
            <button
              className="bg-[#0B2447] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#19376D]"
              onClick={() => window.location.reload()}
            >
              Try Again!
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label htmlFor="full-name" className="text-white font-medium mb-0">
              Your Name
            </label>
            <input
              id="full-name"
              type="text"
              name="name"
              value={form.name}
              minLength={3}
              maxLength={25}
              onChange={handleChange}
              placeholder="Enter your name here."
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mt-[-10px]"
            />
            <label
              htmlFor="email-address"
              className="text-white font-medium mb-0"
            >
              Your email
            </label>
            <input
              id="email-address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              minLength={5}
              maxLength={50}
              placeholder="Enter your email address here."
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mt-[-10px]"
            />
            <label
              htmlFor="client-message"
              className="text-white font-medium mb-4"
            >
              Your Message
            </label>
            <textarea
              id="client-message"
              rows={10}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter the message here."
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mt-[-20px]"
            />
            <button
              type="submit"
              className="bg-[#0B2447] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#19376D]"
            >
              Send
            </button>
          </form>
        )}
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center"
      >
        <img src={qr} alt="qr code with phone number" className="w-3/6" />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
