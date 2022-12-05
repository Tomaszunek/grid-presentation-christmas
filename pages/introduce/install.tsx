import type { ReactElement } from "react";
import { CopyBlock, a11yDark } from "react-code-blocks";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Introduce - Installing</h2>
      <section className="group">
        <h3>Installing dependencies</h3>
        <p>
          To use grid we need add 2 dependencies to project:{" "}
          <span className="littleCode"> ag-grid-community</span>{" "}
          <span className="littleCode"> ag-grid-react</span>.
        </p>
        <CopyBlock
          text={`npm install --save ag-grid-community ag-grid-react`}
          language="tsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <br />
        <h3>Adding styling to project</h3>
        <p>
          We need import necessary base and theme CSS files to global style
          file.
        </p>
        <CopyBlock
          text={`import 'ag-grid-community/styles/ag-grid.css';
 import 'ag-grid-community/styles/ag-theme-alpine.css';
`}
          language="tsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
      </section>
      <Footer backLink="/" nextLink="/colDef/rowData" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
