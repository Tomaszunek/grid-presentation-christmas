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
      <h2>Cell Edit - Cell Editor Component</h2>
      <section className="group">
        <h3>Cell editor component</h3>
        <p>
          Interface of <LittleCodeSpan>cellEditorComponent</LittleCodeSpan>{" "}
          looks like:
        </p>
        <CopyBlock
          text={`export type ICellEditorParams<TData = any, TValue = any> = {
  /** Current value of the cell */
  value: TValue;
  /** @deprecated Use "eventKey". */
  key: string | null;
  /** Key value of key that started the edit, eg 'Enter' or 'Delete' - non-printable
   *  characters appear here */
  eventKey: string | null;
  /** The string that started the edit, eg 'a' if letter 'a' was pressed, or 'A' if
   *  shift + letter 'a' only printable characters appear here */
  charPress: string | null;
  /** Grid column */
  column: Column;
  /** Column definition */
  colDef: ColDef<TData>;
  /** Row node for the cell */
  node: RowNode<TData>;
  /** Row data */
  data: TData;
  /** Editing row index */
  rowIndex: number;
  /** If doing full row edit, this is true if the cell is the one that started the edit
   *  (eg it is the cell the use double clicked on, or pressed a key on etc). */
  cellStartedEdit: boolean;
  /** callback to tell grid a key was pressed - useful to pass control key events (tab,
   *  arrows etc) back to grid - however you do */
  onKeyDown: (event: KeyboardEvent) => void;
  /** Callback to tell grid to stop editing the current cell. Call with input parameter
   * true to prevent focus from moving to the next cell after editing stops in case the
   * grid property "enterMovesDownAfterEdit=true" */
  stopEditing: (suppressNavigateAfterEdit?: boolean) => void;
  /** A reference to the DOM element representing the grid cell that your component
   *  will live inside. Useful if you want to add event listeners or classes at this level.
   *  This is the DOM element that gets browser focus when selecting cells. */
  eGridCell: HTMLElement;
  /** Utility function to parse a value using the column's "colDef.valueParser" */
  parseValue: (value: any) => any;
  /** Utility function to format a value using the column's "colDef.valueFormatter" */
  formatValue: (value: any) => any;
  /** The grid api. */
  api: GridApi<TData>;
  /** The column api. */
  columnApi: ColumnApi;
  /** Application context as set on "gridOptions.context". */
  context: any;
},`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <p>
          In case of React component should be defined as{" "}
          <LittleCodeSpan>forwardRef</LittleCodeSpan> component and work with
          values communication with grid using{" "}
          <LittleCodeSpan>useImperativeHandle</LittleCodeSpan> hook
        </p>
        <p></p>
        <CopyBlock
          text={`export const decimalNumberEditor = forwardRef<ICellEditor, ICellEditorParams>((props, ref) => {
  const [value, setValue] = useState(props.value);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => Math.floor(value),
  }));

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <LinkToExercise linkToExercise="https://stackblitz.com/edit/vitejs-vite-fncyjw?file=src%2FGrid.tsx" />
        Santa wants have place to do notes about gift request for children.
        <ol>
          <li>
            Add <LittleCodeSpan>notes</LittleCodeSpan> to{" "}
            <LittleCodeSpan>columnDef</LittleCodeSpan>
          </li>
          <li>make field editable</li>
          <li>
            create editable component and add it as{" "}
            <LittleCodeSpan>cellEditor</LittleCodeSpan> property
          </li>
        </ol>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <>
            <CopyBlock
              text={`export const notesEditor = forwardRef<ICellEditor, ICellEditorParams>((props, ref) => {
  const [value, setValue] = useState(props.value);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});`}
              language="jsx"
              showLineNumbers={false}
              wrapLines
              theme={a11yDark}
            />
            <br />
            <CopyBlock
              text={`{
  headerName: 'Notes',
  field: 'note',
  editable: true,
  cellEditor: notesEditor,
},`}
              language="jsx"
              showLineNumbers={false}
              wrapLines
              theme={a11yDark}
            />
          </>
        </HideSolution>
      </section>
      <Footer
        backLink="/cellEdit/provideCellEditors"
        nextLink="/styling/cellStyling"
      />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
