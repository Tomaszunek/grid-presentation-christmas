import type { ReactElement } from "react";
import { codepen, CopyBlock } from "react-code-blocks";
import HideSolution from "../../components/constants/Solution";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import LittleCodeSpan from "../../components/littleCodeSpan";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Cell Rendering - Value Formatter</h2>
      <section className="group">
        <h3>Value formatter</h3>
        <ul>
          <li>
            We can use <LittleCodeSpan>valueFormatter</LittleCodeSpan> function
            to get value from <LittleCodeSpan>field</LittleCodeSpan> and format
            in needed way
          </li>
          <li>
            <LittleCodeSpan>valueGetter</LittleCodeSpan> can be used to mutate
            value or whole row data
          </li>
        </ul>
        <p>
          To define <LittleCodeSpan>valueFormatter</LittleCodeSpan> we can use{" "}
          <LittleCodeSpan>params</LittleCodeSpan> base on{" "}
          <LittleCodeSpan>ValueFormatterParams</LittleCodeSpan> generic type:
        </p>
        <br />
        <CopyBlock
          text={`export type ValueFormatterParams<TData = any, TValue = any> = {
  /** The grid api. */
  api: GridApi<TData>;
  /** ColDef provided for this column */
  colDef: ColDef<TData>;
  /** Column for this callback */
  column: Column;
  /** The column api. */
  columnApi: ColumnApi;
  /** Application context as set on "gridOptions.context". */
  context: any;
  /** Data associated with the node */
  data: TData | undefined;  
  /** Row node for the given row */
  node: RowNode<TData> | null;
}`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={codepen}
        />
        <p>
          Of course every <LittleCodeSpan>valueFormatter</LittleCodeSpan>{" "}
          function can be define separately and called in different contexts
        </p>
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <ol>
          <li>
            add <LittleCodeSpan>price</LittleCodeSpan> column definition to grid
            <LittleCodeSpan>ColDef</LittleCodeSpan>
          </li>
          <li>
            add <LittleCodeSpan>valueFormatter</LittleCodeSpan> function to
            concat <LittleCodeSpan>price</LittleCodeSpan> with{" "}
            <LittleCodeSpan>currency</LittleCodeSpan>
          </li>
        </ol>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`{
  headerName: 'Price',
  field: 'price',
  valueFormatter: ({ data }: ValueFormatterParams<GiftRequest>) =>
    data ? data.currency + ' ' + data.price : '',
},`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={codepen}
          />
        </HideSolution>
      </section>
      <Footer
        backLink="/cellRender/valueGetter"
        nextLink="/cellRender/cellRendererFunction"
      />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
