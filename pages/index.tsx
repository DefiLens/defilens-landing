import App from "@/modules/App";
import { Toaster } from "react-hot-toast";
import MetaTags from "@/shared/MetaTags";

export default function Home() {
  return (
    <>
      <MetaTags />
      <Toaster position="top-right" />
      <App />
    </>
  );
}
