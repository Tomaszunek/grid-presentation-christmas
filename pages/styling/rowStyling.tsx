import type { ReactElement } from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Styling - Row Styling</h2>
      <section className="group">
        <h3>section</h3>
      </section>
      <section className="group">
        <h3>Exercise</h3>
      </section>
      <section className="group">
        <h3>Solution</h3>
      </section>
      <Footer backLink="/styling/cellStyling" nextLink="/styling/themes" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
