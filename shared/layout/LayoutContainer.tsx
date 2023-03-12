import { ILayout } from "@/utils/types";
import Layout from "./Layout";

const LayoutContainer = ({
  children
}: ILayout) => (
  <Layout>
    {children}
  </Layout>
);

export default LayoutContainer;
