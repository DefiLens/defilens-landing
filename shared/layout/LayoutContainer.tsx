import { tLayout } from "./types/index";
import Layout from "./Layout";

const LayoutContainer = ({
  children
}: tLayout) => (
  <Layout>
    {children}
  </Layout>
);

export default LayoutContainer;
