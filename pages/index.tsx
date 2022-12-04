import type { ReactElement } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Introduce - Start</h2>
      <section className="group">
        <h3>What is AG-Grid?</h3>
      </section>
      <Footer nextLink="/introduce/install" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
