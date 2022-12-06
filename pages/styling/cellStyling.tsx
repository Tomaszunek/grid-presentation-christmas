import type { ReactElement } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import LittleCodeSpan from "../../components/littleCodeSpan";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Styling - Cell Styling</h2>
      <section className="group">
        <h3>Cell styling</h3>
        <ul>
          <li>
            We can specify <LittleCodeSpan>cellStyle</LittleCodeSpan> property
            which will be used as inline styles
          </li>
          <CopyBlock
            text={`{
  headerName: 'Name',
  field: 'name',
  cellStyle: { color: 'white', 'background-color': 'blue' },
}`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
          <br />
          <li>
            <LittleCodeSpan>cellClass</LittleCodeSpan> which will be always
            added to cell classes
          </li>
          <CopyBlock
            text={` {
  headerName: 'Name',
  field: 'name',
  cellClass: ['customer-class-name'],
}`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
          <br />
          <li>
            <LittleCodeSpan>cellClassRules</LittleCodeSpan> which is added to
            cell on value check
          </li>
          <CopyBlock
            text={`{
  headerName: 'Name',
  field: 'name',
  cellClassRules: {
    'cell-value-negative': ({ value }) => value < 0,
    'cell-value-positive': ({ value }) => value >= 0,
  },`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </ul>
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
