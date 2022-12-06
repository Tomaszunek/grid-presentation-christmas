import type { ReactElement } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import HideSolution from "../../components/constants/Solution";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import LinkToExercise from "../../components/LinkToExercise";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Column Definition - Default Column Definition</h2>
      <section className="group">
        <h3>Default column definition</h3>
        <p>
          To be strict with rule <span className="littleCode">DRY</span> we can
          set default values for all columns.
          <ul>
            <li>
              column inherits column definition if they are not specified in
              single column <span className="littleCode">ColDef</span>
            </li>
            <li>all properties can be override</li>
          </ul>
        </p>
        <CopyBlock
          text={`const defaultColDef: ColDef<GiftRequest> = {
  sortable: true,
};`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <LinkToExercise linkToExercise="https://stackblitz.com/edit/vitejs-vite-higywt?file=src%2FGrid.tsx" />
        <p>Santa changes his mind and wants to possible to sort every column</p>
        <ol>
          <li>
            Specify <span className="littleCode">defaultColDef</span> and use it
            in <span className="littleCode">AgGridReact</span>
          </li>
          <li>
            Add <span className="littleCode">sortable</span> with value{" "}
            <span className="littleCode">true</span> to{" "}
            <span className="littleCode">defaultColDef</span> set all columns
            sortable.
          </li>
          <li>
            Add <span className="littleCode">flex</span> property with value{" "}
            <span className="littleCode">1</span> to set all columns to having
            the same width
          </li>
        </ol>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`const [columnDefs] = useState<ColDef<GiftRequest>[]>([
    {
      headerName: 'Surname',
      field: 'surname',
    },
    {
      headerName: 'Lastname',
      field: 'lastname',
    },
    {
      headerName: 'City',
      field: 'city',
    },
  ]);

  const defaultColDef: ColDef<GiftRequest> = {
    sortable: true,
    flex: 1,
  };

  const [rowData] = useState<GiftRequest[]>(data.giftData);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact<GiftRequest>
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
      />
    </div>
  );`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </HideSolution>
      </section>
      <Footer backLink="/colDef/rowSorting" nextLink="/colDef/filtering" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
