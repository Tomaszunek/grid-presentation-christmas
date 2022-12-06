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
      <h2>Cell Rendering - Value Getter</h2>
      <section className="group">
        <h3>Value getter</h3>
        <ul>
          <li>
            We can use <LittleCodeSpan>valueGetter</LittleCodeSpan> function get
            row data where <LittleCodeSpan>field</LittleCodeSpan> cannot be used
          </li>
          <li>
            <LittleCodeSpan>valueGetter</LittleCodeSpan> can be used to mutate
            value or whole row data
          </li>
        </ul>
        <p>
          To define <LittleCodeSpan>valueGetter</LittleCodeSpan> we can use{" "}
          <LittleCodeSpan>params</LittleCodeSpan> base on{" "}
          <LittleCodeSpan>ValueGetterParams</LittleCodeSpan> generic type:
        </p>
        <br />
        <CopyBlock
          text={`export type ValueGetterParams<TData = any> = {
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
  /** A utility method for getting other column values */
  getValue: (field: string) => any;
  /** Row node for the given row */
  node: RowNode<TData> | null;
}`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <LinkToExercise linkToExercise="https://stackblitz.com/edit/vitejs-vite-jpum2y?file=src%2FGrid.tsx" />
        Santa wants have <LittleCodeSpan>surname</LittleCodeSpan> and{" "}
        <LittleCodeSpan>lastname</LittleCodeSpan> in single column name{" "}
        <LittleCodeSpan>fullname</LittleCodeSpan> and have it visible always on
        left side.
        <ul>
          <li>
            remove <LittleCodeSpan>surname</LittleCodeSpan> and{" "}
            <LittleCodeSpan>lastname</LittleCodeSpan> column definition
          </li>
          <li>
            add new <LittleCodeSpan>fullname</LittleCodeSpan> column definition
          </li>
          <li>
            create <LittleCodeSpan>valueGetter</LittleCodeSpan> function to
            concat information
          </li>
          <li>
            add property <LittleCodeSpan>pinned</LittleCodeSpan> with value{" "}
            <LittleCodeSpan>&quot;left&quot;</LittleCodeSpan> to{" "}
            <LittleCodeSpan>fullname</LittleCodeSpan> column definition to move
            it to pinned left section
          </li>
        </ul>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`{
  headerName: 'Fullname',
  field: 'fullname',
  valueGetter: ({ data }: ValueGetterParams<GiftRequest>) =>
    data && data.surname + " " + data.lastname,
  pinned: 'left',
},`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </HideSolution>
      </section>
      <Footer
        backLink="/colDef/filtering"
        nextLink="/cellRender/valueFormatter"
      />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
