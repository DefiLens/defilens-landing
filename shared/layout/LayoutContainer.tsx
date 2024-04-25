import { FC } from "react";
import { tLayout } from "./types/index";
import Layout from "./Layout";

const LayoutContainer: FC<tLayout> = ({ children }) => (
  <Layout>{children}</Layout>
);

export default LayoutContainer;
