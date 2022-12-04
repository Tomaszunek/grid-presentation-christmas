import type { ReactElement } from "react";
import { CopyBlock, codepen } from "react-code-blocks";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Introduce - Installing</h2>
      <section className="group">
        <h3>How to install and setup AG-Grid</h3>
        <CopyBlock
          text={`npm install --save ag-grid-community ag-grid-react`}
          language="tsx"
          showLineNumbers={false}
          wrapLines
          theme={codepen}
        />
        <br />
        <CopyBlock
          text={`import 'ag-grid-community/styles/ag-grid.css';
 import 'ag-grid-community/styles/ag-theme-alpine.css';
`}
          language="tsx"
          showLineNumbers={true}
          wrapLines
          theme={codepen}
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
