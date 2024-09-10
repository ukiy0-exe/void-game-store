import { useState } from "react";
import Input from "./Input";

const QuestionsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="flex justify-around">
      <div className="">
        {!submitted ? (
          <div>
            <h1 className="mb-4 text-3xl font-semibold">
              Still have some <br />
              <span className="highlight">questions</span>? 🤔
            </h1>
            <p>No worries, we'll support you!</p>
            <form
              onSubmit={onSubmit}
              className="my-6 flex flex-col items-center justify-center md:items-start"
            >
              <Input
                type="text"
                name="name"
                onChange={onChange}
                value={formData.name}
              />
              <Input
                type="email"
                name="email"
                onChange={onChange}
                value={formData.email}
              />
              <Input
                type="textarea"
                name="message"
                onChange={onChange}
                value={formData.message}
              />
              <button className="group relative inline-block w-[150px] px-5 py-2 font-medium">
                <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#b499fa] dark:bg-zinc-300"></span>
                <span className="relative font-semibold text-highlight">
                  Send
                </span>
              </button>
            </form>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <h2 className="mb-4 text-3xl font-semibold">
              Thank you for your answer! 🙏🏻
            </h2>
            <p>We'll contact you back as soon as possible.</p>
            <button
              className="group relative my-5 inline-block px-5 py-2 font-medium"
              onClick={() => {
                setSubmitted(false);
              }}
            >
              <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#b499fa] dark:bg-zinc-300"></span>
              <span className="relative font-semibold text-highlight">
                Send new feedback
              </span>
            </button>
          </div>
        )}
      </div>
      {!submitted ? (
        <div className="m-10 hidden w-1/2 -scale-x-100 lg:block">
          <img src="src/assets/icons/questions2.svg" alt="" />
        </div>
      ) : (
        <div className="m-10 hidden w-1/2 lg:block">
          <img src="src/assets/icons/success.svg" alt="" />
        </div>
      )}
    </div>
  );
};

export default QuestionsForm;
