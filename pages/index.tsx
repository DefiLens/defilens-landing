import { Toaster } from "react-hot-toast";
import MetaTags from "@/shared/MetaTags";
import App from "@/assets/App";

export default function Home() {
  return (
    <>
      <MetaTags />
      <Toaster position="top-right" />
      <App />
    </>
  );
}
