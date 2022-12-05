import type { ReactElement } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import HideSolution from "../../components/constants/Solution";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Column Definition - Filtering</h2>
      <section className="group">
        <h3>Filtering</h3>
        <p>AG Grid provide to us 4 types of filters:</p>
        <h3>Text Filter</h3>
        <br />
        <CopyBlock
          text={`const [columnDefs] = useState<ColDef<GiftRequest>[]>([
    {
      headerName: 'City',
      field: 'city',
      filter: 'agTextColumnFilter',
    },
  ]);
          `}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Number Filter</h3>
        <br />
        <CopyBlock
          text={`const [columnDefs] = useState<ColDef<GiftRequest>[]>([
    {
      headerName: 'Age',
      field: 'age',
      filter: 'agNumberColumnFilter',
    },
  ]);
          `}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Date Filter</h3>
        <br />
        <CopyBlock
          text={`const [columnDefs] = useState<ColDef<GiftRequest>[]>([
    {
      headerName: 'Birth Date',
      field: 'birthDate',
      filter: 'agDateColumnFilter',
    },
  ]);
          `}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <h3>Set Filter</h3>
        <p>4th filter is SetFilter which is enterprise only.</p>
        <CopyBlock
          text={`const [columnDefs] = useState<ColDef<GiftRequest>[]>([
    {
      headerName: 'Surname',
      field: 'surname',
      filter: 'agSetColumnFilter',
    },
  ]);
          `}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <p>
          Of course we can set filters as default in{" "}
          <span className="littleCode">defaultColDef</span>
        </p>
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <p>
          Santa wants to ability to filter data using grid header options. Want
          to have ability to sort all columns.{" "}
          <span className="littleCode">City</span> as text, new columns{" "}
          <span className="littleCode">Age</span> as{" "}
          <span className="littleCode">number</span> and{" "}
          <span className="littleCode">Birth Date</span> as{" "}
          <span className="littleCode">Date</span>
        </p>
        <ol>
          <li>
            Set <span className="littleCode">filter</span> for{" "}
            <span className="littleCode">defaultColDef</span> to{" "}
            <span className="littleCode">true</span>
          </li>
          <li>
            Set <span className="littleCode">agTextColumnFilter</span> for{" "}
            <span className="littleCode">city</span>
          </li>
          <li>
            Add 2 new columns <span className="littleCode">age</span> and{" "}
            <span className="littleCode">birthDate</span>
          </li>
          <li>
            Set <span className="littleCode">agNumberColumnFilter</span> for{" "}
            <span className="littleCode">age</span>
          </li>
          <li>
            Set <span className="littleCode">agDaterColumnFilter</span> for{" "}
            <span className="littleCode">birthDate</span>
          </li>
        </ol>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`export default function AGrid() {
  const [columnDefs] = useState<ColDef<GiftRequest>[]>([
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
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Age',
      field: 'age',
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'Birth Date',
      field: 'birthDate',
      filter: 'agDateColumnFilter',
    },
  ]);

  const defaultColDef: ColDef<GiftRequest> = {
    sortable: true,
    flex: 1,
    filter: 1,
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
  );
  }            
          `}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </HideSolution>
      </section>
      <Footer
        backLink="/colDef/defaultColumnDef"
        nextLink="/cellRender/valueGetter"
      />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
