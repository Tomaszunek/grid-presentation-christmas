import type { ReactElement } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import HideSolution from "../../components/constants/Solution";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import LittleCodeSpan from "../../components/littleCodeSpan";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Cell Rendering - Cell Renderer Function</h2>
      <section className="group">
        <h3>Cell renderer function</h3>
        <ul>
          <li>
            After the value for a cell is determined, and we have optionally
            formatted the value, we can use a cell renderer to have full control
            of how a cell is rendered in AG Grid.
          </li>
          <li>
            We should use <LittleCodeSpan>cellRendererFunction</LittleCodeSpan>{" "}
            only if we need it to not decrease grid performance
          </li>
        </ul>
        <p>
          <LittleCodeSpan>cellRendererFunction</LittleCodeSpan> interface looks
          like that:
        </p>
        <CopyBlock
          text={`export type ICellRendererParams<TData = any, TValue = any> = {
  /** The grid api. */
  api: GridApi<TData>;
  /** ColDef provided for this column */
  colDef: ColDef<TData>;
  /** Column for this callback */
  column: Column;
  /** The column api. */
  columnApi: ColumnApi;
  /** Value to be rendered. */
  value: TValue;
  /** Formatted value to be rendered. */
  valueFormatted: string | null | undefined;
  /** True if this is a full width row. */
  fullWidth?: boolean;
  /** Pinned state of the cell. */
  pinned?: "left" | "right" | null;
  /** The row's data. Data property can be "undefined" when row grouping or loading infinite row models. */
  data: TData | undefined;
  /** The row node. */
  node: RowNode<TData>;
  /** The current index of the row (this changes after filter and sort). */
  rowIndex: number;
  /** The cell's column definition. */
  colDef?: ColDef;
  /** The cell's column. */
  column?: Column;
  /** The grid's cell, a DOM div element. */
  eGridCell: HTMLElement;
  /** The parent DOM item for the cell renderer, same as eGridCell unless using checkbox selection. */
  eParentOfValue: HTMLElement;
  /** Convenience function to get most recent up to date value. */
  getValue?: () => any;
  /** Convenience function to set the value. */
  setValue?: (value: any) => void;
  /** Convenience function to format a value using the column's formatter. */
  formatValue?: (value: any) => any;
  /** Convenience function to refresh the cell. */
  refreshCell?: () => void;
  /**
   * registerRowDragger:
   * @param rowDraggerElement The HTMLElement to be used as Row Dragger
   * @param dragStartPixels The amount of pixels required to start the drag (Default: 4)
   * @param value The value to be displayed while dragging. Note: Only relevant with Full Width Rows.
   * @param suppressVisibilityChange Set to "true" to prevent the Grid from hiding the Row Dragger when it is disabled.
   */
  registerRowDragger: (rowDraggerElement: HTMLElement, dragStartPixels?: number, value?: string, suppressVisibilityChange?: boolean) => void;
}`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <p>
          Example of <LittleCodeSpan>cellRenderer</LittleCodeSpan> looks like
          that:
        </p>
        <br />
        <CopyBlock
          text={`cellRenderer: (params) => {
  if (params.value === undefined) {
    return null;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(params.value);
},`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <p>
          Santa wants to have list of gifts for children, everyone needs be in
          single line
        </p>
        <ol>
          <li>
            we need to add <LittleCodeSpan>gifts colDef</LittleCodeSpan> to{" "}
            <LittleCodeSpan>columnDef</LittleCodeSpan>
          </li>
          <li>
            we should add <LittleCodeSpan>cellRenderer</LittleCodeSpan> function{" "}
          </li>
          <li>
            <LittleCodeSpan>cellRenderer</LittleCodeSpan> should return{" "}
            <LittleCodeSpan>ul</LittleCodeSpan> and render{" "}
            <LittleCodeSpan>li</LittleCodeSpan> for every gift
          </li>
          <li>
            <LittleCodeSpan>width</LittleCodeSpan> should be set to see whole
            gift name
          </li>
        </ol>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`{
  headerName: 'Gifts',
  field: 'gifts',
  minWidth: 400,
  pinned: 'right',
  cellRenderer: ({ value }: ICellRendererParams<GiftRequest, string[]>) => {
    return (
      <ul>
        {value.map((gift) => {
          return <li key={gift}>{gift}</li>;
        })}
      </ul>
    );
  },
},`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </HideSolution>
      </section>
      <Footer
        backLink="/cellRender/valueFormatter"
        nextLink="/cellEdit/provideCellEditors"
      />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
