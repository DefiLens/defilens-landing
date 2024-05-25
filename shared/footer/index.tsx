"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";
import Footer from "./Footer";
import { toastMessage } from "@/utils/constants";

const FooterContainer = () => {
  const [email, setEmail] = useState("");
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);

  const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleCreateNewsletter = async (arg: any) => {
    if (!arg.email) {
      toast.error("Please enter a valid Email Address");
      return;
    }
    if(!isValidEmail(arg.email)) {
      toast.error("Please enter a valid Email Address");
      return;
    }
    try {
      setIsNewsletterLoading(true);
      await axiosInstance
        .post("/public/newsletter", arg)
        .then(async (res) => {
          toast.success(toastMessage.newsletter.success);
          setEmail("");
        })
        .catch((err) => {
          toast.error(toastMessage.newsletter.failed);
        });
      setIsNewsletterLoading(false);
    } catch (error: any) {
      // console.log("handleAddNewEmployees: error:", error)
      toast.error(toastMessage.newsletter.catch);
      setIsNewsletterLoading(false);
    }
  };

  return (
    <Footer
      email={email}
      setEmail={setEmail}
      isNewsletterLoading={isNewsletterLoading}
      handleCreateNewsletter={handleCreateNewsletter}
    />
  );
};

export default FooterContainer;
