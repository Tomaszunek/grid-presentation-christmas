import type { ReactElement } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import HideSolution from "../../components/constants/Solution";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import LinkToExercise from "../../components/LinkToExercise";
import LittleCodeSpan from "../../components/littleCodeSpan";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Styling - Row Styling</h2>
      <section className="group">
        <h3>Row styling</h3>
        In case of <LittleCodeSpan>Row styling</LittleCodeSpan> we have more
        options. Every needs be provide to grid component.
        <ul>
          <li>
            <LittleCodeSpan>rowStyle</LittleCodeSpan> to add inline style css
          </li>
          <li>
            <LittleCodeSpan>getRowStyle</LittleCodeSpan> to add inline style
            conditionally
          </li>
          <li>
            <LittleCodeSpan>rowClass</LittleCodeSpan> to add class to all rows
          </li>
          <li>
            <LittleCodeSpan>getRowClass</LittleCodeSpan>to add class
            conditionally
          </li>
          <li>
            <LittleCodeSpan>rowClassRules</LittleCodeSpan> to add and remove
            classes
          </li>
          <CopyBlock
            text={`const rowClassRules = {
  'ag-row-approved': ({ data }) => data.approved,
  'ag-row-error': ({ data }) => data.error !== null,
}`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </ul>
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <LinkToExercise linkToExercise="https://stackblitz.com/edit/vitejs-vite-hgfnyx?file=src%2FGrid.tsx" />
        <p>
          Santa have last request for You. He wants to add status to gift
          request but that value should be selectable from range of values.
        </p>
        <ol>
          <li>
            add <LittleCodeSpan>status</LittleCodeSpan> column to{" "}
            <LittleCodeSpan>columnDef</LittleCodeSpan>
          </li>
          <li>
            make field <LittleCodeSpan>editable</LittleCodeSpan> ,{" "}
            <LittleCodeSpan>cellEditorPopup</LittleCodeSpan>,{" "}
            <LittleCodeSpan>cellEditor</LittleCodeSpan> as{" "}
            <LittleCodeSpan>agSelectCellEditor</LittleCodeSpan>
          </li>
          <li>
            set values for selector as{" "}
            <LittleCodeSpan>GIFT_STATUSES</LittleCodeSpan>
          </li>
          <li>
            create <LittleCodeSpan>getRowClass</LittleCodeSpan> function using
            switch cases:
          </li>
          <CopyBlock
            text={`switch (data.status) {
  case 'All ready':
    return 'ag-row-green';
  case 'Children have Gift':
    return 'ag-row-gold';
  case 'In Progress':
    return 'ag-row-yellow';
  case 'Move faster!':
    return 'ag-row-brown';
  case 'New':
    return 'ag-row-blue';
  case 'Ready to send':
    return 'ag-row-lightgreen';
  case 'Sent':
    return 'ag-row-pink';
  case 'We are to late! :(':
    return 'ag-row-black';
}`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </ol>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`const getRowClass = ({ data }: RowClassParams<GiftRequest>) => {
  if (!data) {
    return '';
  }
  switch (data.status) {
    case 'All ready':
      return 'ag-row-green';
    case 'Children have Gift':
      return 'ag-row-gold';
    case 'In Progress':
      return 'ag-row-yellow';
    case 'Move faster!':
      return 'ag-row-brown';
    case 'New':
      return 'ag-row-blue';
    case 'Ready to send':
      return 'ag-row-lightgreen';
    case 'Sent':
      return 'ag-row-pink';
    case 'We are to late! :(':
      return 'ag-row-black';
  }
};`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
          <br />
          <CopyBlock
            text={`return (
  <div className="ag-theme-alpine">
    <AgGridReact<GiftRequest>
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      getRowClass={getRowClass}
      rowData={rowData}
    ></AgGridReact>
  </div>
);`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </HideSolution>
      </section>
      <Footer backLink="/styling/cellStyling" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
