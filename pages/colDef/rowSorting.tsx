import type { ReactElement } from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Column Definition - Row Sorting</h2>
      <section className="group">
        <h3>section</h3>
      </section>
      <section className="group">
        <h3>section</h3>
      </section>
      <section className="group">
        <h3>section</h3>
      </section>
      <Footer backLink="/colDef/rowData" nextLink="/colDef/defaultColumnDef" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
