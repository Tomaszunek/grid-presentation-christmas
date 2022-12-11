import type { ReactElement } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Helpers to code</h2>
      <section className="group">
        <h3>columnDef & rowData</h3>
        <CopyBlock
          text={`const [columnDefs] = useState<(ColDef<GiftRequest>)[]>([
  {
    field: "",
    headerName: "",
  }
]);`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <br />
        <CopyBlock
          text={`const [rowData] = useState<GiftRequest[]>()`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Default column def</h3>
        <CopyBlock
          text={`const defaultColDef: ColDef<GiftRequest> = {};`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Filtering</h3>
        <CopyBlock
          text={`agTextColumnFilter`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Value getter</h3>
        <CopyBlock
          text={`valueGetter: ({}}: ValueGetterParams<GiftRequest>) =>`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Value formatter</h3>
        <CopyBlock
          text={`valueFormatter: ({}: ValueFormatterParams<GiftRequest>) =>`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Cell Renderer</h3>
        <CopyBlock
          text={` cellRenderer: ({ value }: ICellRendererParams<GiftRequest, string[]>) => {},`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Provided editors</h3>
        <CopyBlock
          text={` editable: true,
  cellEditor: 'agSelectCellEditor',
  cellEditorParams: {
    values: 
},`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Row styling</h3>
        <CopyBlock
          text={`const getRowClass = ({}: RowClassParams<GiftRequest>) => {}`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <br />
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
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
