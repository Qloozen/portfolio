import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
  age: number;
};

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const [status, setStatus] = useState("");

  const onSubmit: SubmitHandler<Inputs> = () => {
    setStatus("sending...");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        form.current ?? "",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setStatus("successfully sent email");
          reset();
          resetStatus();
        },
        () => {
          setStatus(
            "failed to send email, try again or contact me via LinkedIn"
          );
          resetStatus();
        }
      );
  };

  const resetStatus = () => {
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h2>Get in touch</h2>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("user_name", { required: "Name is required." })}
          type="text"
          name="user_name"
        />
        {errors.user_name && (
          <span className="error-text">This field is required</span>
        )}

        <label>Email</label>
        <input
          {...register("user_email", {
            required: "Email is required.",
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  v
                ) || "Email address must be a valid address",
            },
          })}
          type="email"
          name="user_email"
        />
        {errors.user_email && (
          <span className="error-text">{errors.user_email.message}</span>
        )}

        <label>Message</label>
        <textarea
          {...register("message", { required: "Message is required." })}
          name="message"
          cols={5}
          rows={10}
        />
        {errors.message && (
          <span className="error-text">This field is required</span>
        )}
        {status.length > 0 && <span>{status}</span>}
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
