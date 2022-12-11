import type { ReactElement } from "react";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Introduce - Start</h2>
      <section className="group">
        <h3>What is AG-Grid?</h3>
        <p>
          AG Grid is open-source agnostic library with free under the MIT
          license and enterprise license functionalities. Is wrote in JavaScript
          with TypeScript types support and can be used in project from vanilla
          javascript to React, Angular +2, Vue and recently Solid using
          additional dependency wrapper per usage.
        </p>
        <p>
          Library provides many different functionalities, but leaves options
          for developing them for your own use. It focuses on user and developer
          experience, important is also performance using virtualization and
          other treatments.
        </p>
        <p>
          It provides the most important elements to the main package to be able
          to expand them later with additional packages, increasing the bundle
          size only by those needed in the current view.
        </p>
      </section>
      <Footer nextLink="/introduce/install" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
