import type { ReactElement } from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Styling - Cell Styling</h2>
      <section className="group">
        <h3>section</h3>
      </section>
      <section className="group">
        <h3>section</h3>
      </section>
      <section className="group">
        <h3>section</h3>
      </section>
      <Footer
        backLink="/cellEdit/cellEditorComponent"
        nextLink="/styling/rowStyling"
      />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
