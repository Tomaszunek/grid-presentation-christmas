import type { ReactElement } from "react";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return <p>Cell Render Function</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;