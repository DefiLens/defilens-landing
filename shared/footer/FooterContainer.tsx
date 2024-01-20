"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "@/axiosInstance/axiosInstance";
import Footer from "./Footer";

const FooterContainer = () =>  {

  const [email, setEmail] = useState('');
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);

  const handleCreateNewsletter = async (arg: any) => {
    if (!arg.email) {
      toast.error("Please enter a valid Email Address");
      return;
    }
    try {
      setIsNewsletterLoading(true)
      await axiosInstance
        .post('newsletter', arg)
        .then(async (res) => {
          toast.success("Thanks for Joining our Newsletter.");
          setEmail('')
        })
        .catch((err) => {
          toast.error("Error! While Joining Newsletter");
        });
      setIsNewsletterLoading(false)
    } catch (error: any) {
      console.log("handleAddNewEmployees: error:", error)
      toast.error('Oops! Something went wrong');
      setIsNewsletterLoading(false)
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
