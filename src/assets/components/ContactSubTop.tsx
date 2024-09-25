
import { PiPhoneCallBold } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import "./customToast.css"

const ContactSubTop = () => {
  // Initialize the form reference
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make sure form reference exists
    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .sendForm("service_zqumam4", "template_gslxy6i", form.current, {
        publicKey: "bpkAhkZvtIl7Q4A4q",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          // Show success toast
          toast.success("Message Sent Successfully!", {
            bodyClassName: 'custom-toast-body',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // Reseting the form fields after successful submission
          (e.target as HTMLFormElement).reset();  // Fix here
          console.log("Contact Form Submitted Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);

          // Show error toast
          toast.error("Failed to send message. Please try again!");
        }
      );
  };

  return (
    <div className="contactSubCont">
      <div className="uptopcont">
        <div className="leftSideCont">
          <h2 className="mt-5 mb-5 text-orange-600 text-xl font-bold uppercase">
            get in touch
          </h2>
          <h1 className="mb-5 text-blue-800 text-3xl capitalize font-mono">
            just say{" "}
            <span className="text-indigo-400 italic text-3xl font-bolder capitalize">
              hello !
            </span>
          </h1>
          <div className="w-15 h-12 flex flex-row  gap-5 mb-7">
            <div className="imgBoxCont bg-blue-800">
              <PiPhoneCallBold className="flex flex-col items-center justify-center m-auto mt-3 text-white" />
            </div>
            <div className="databox">
              <h3 className="text-blue-800 text-base uppercase font-bold ">
                call now
              </h3>
              <h2 className="text-zinc-500 text-base font-bold">
                +91 8299692948
              </h2>
            </div>
          </div>

          <div className="w-15 h-12 flex flex-row  gap-5 mb-7">
            <div className="imgBoxCont bg-blue-800">
              <BsSendFill className="flex flex-col items-center justify-center m-auto mt-3 text-white" />
            </div>
            <div className="databox">
              <h3 className="text-blue-800 text-base uppercase font-bold ">
                Email
              </h3>
              <h2 className="text-zinc-500 text-base font-bold">
                shivam19575@gmail.com
              </h2>
            </div>
          </div>

          <div className="w-15 h-12 flex flex-row  gap-5 mb-7">
            <div className="imgBoxCont bg-blue-800">
              <IoLocationOutline className="flex flex-col items-center justify-center m-auto mt-3 text-white" />
            </div>
            <div className="databox">
              <h3 className="text-blue-800 text-base uppercase font-bold ">
                address
              </h3>
              <h2 className="text-zinc-500 text-base font-bold">
                Naini Prayagraj ,UP
              </h2>
            </div>
          </div>
          <div className="boxOther gap-10">
            <div className="w-50% flex flex-row ml-6">
              <img
                src="images/contactstu1.png"
                alt="imageFloat1"
                className="imgFloat"
              />
              <img
                src="images/contactstu3.png"
                alt="imageFloat2"
                className="one "
              />
              <img
                src="images/contactstu4.png"
                alt="imageFloat3"
                className="two "
              />
              <img
                src="images/contactstu2.png"
                alt="imageFloat4"
                className="three"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rightSideCont">
        <form ref={form} onSubmit={sendEmail} className="formBox">
          <input
            type="text"
            name="user_name"
            className="name"
            required
            placeholder="Full Name"
            maxLength={90}
            autoFocus
          />
          <br />
          <input
            type="email"
            className="name"
            name="user_email"
            required
            placeholder="Email Address"
          />
          <br />
          <input
            type="number"
            className="name"
            name="user_phone"
            required
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            className="textArea"
            rows={5}
            required
            placeholder="Write Message"
          ></textarea>
          <br />
          <button type="submit" className="btn" value="Send">
            submit now
            <IoIosArrowDropleftCircle className="insideIconBtn" />
          </button>
        </form>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default ContactSubTop;

