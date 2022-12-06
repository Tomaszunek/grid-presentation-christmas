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
      <h2>Column Definition - Row Data</h2>
      <section className="group">
        <h3>Column definition</h3>
        <p>
          Column Definition base on <span className="littleCode">ColDef</span>{" "}
          object base on type with the same name.
        </p>
        <p>
          First we need bind defined{" "}
          <span className="littleCode">columnDefs</span> to grid component.
        </p>
        <CopyBlock
          text={`return (
    <div className="ag-theme-alpine">
      <AgGridReact<GiftRequest> columnDefs={columnDefs}></AgGridReact>
    </div>
  );`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <p>And define column data</p>
        <CopyBlock
          text={`export default function Grid() {
    const [columnDefs] = useState<ColDef<GiftRequest>[]>([
      {
        headerName: 'Surname',
        field: 'surname',
      },
      {
        headerName: 'Lastname',
        field: 'lastname',
      },
    ]);

    return (
      <div className="ag-theme-alpine">
        <AgGridReact<GiftRequest> columnDefs={columnDefs}></AgGridReact>
      </div>
    );
  }
          `}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <p>
          To define simplest <span className="littleCode">columnDefs</span> we
          need specify properties:
        </p>
        <ul>
          <li>
            <span className="littleCode">headerName</span> what shows header
            name on top
          </li>
          <li>
            <span className="littleCode">field</span> what identify which
            property is used in grid to show data from{" "}
            <span className="littleCode">RowData</span>
          </li>
        </ul>
      </section>
      <section className="group">
        <h3>Row data</h3>
        <p>
          Most of time we define <span className="littleCode">RowData</span>{" "}
          base on external data.
        </p>
        <CopyBlock
          text={`export default function Grid() {    
    const [rowData] = useState<GiftRequest[]>(data.giftData);

    return (
      <div className="ag-theme-alpine">
        <AgGridReact<GiftRequest> rowData={rowData} />
      </div>
    );
  }
          `}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
      </section>
      <section className="group">
        <h3>Generics</h3>
        <p>
          Also to make our grid more type safe we can use generics base on our
          data type for <span className="littleCode">ColDef</span>
          {", "}
          <span className="littleCode">RowData</span>
          {", "}
          <span className="littleCode">AgGridReact</span> component and many,
          more.
        </p>
        <p>Something like that:</p>
        <CopyBlock
          text={`ColDef<GiftRequest>`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <br />
        <CopyBlock
          text={`const [rowData] = useState<GiftRequest[]>(data.giftData);`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
        <br />
        <CopyBlock
          text={`<AgGridReact<GiftRequest> columnDefs={columnDefs} rowData={rowData} />`}
          language="jsx"
          showLineNumbers={false}
          wrapLines
          theme={a11yDark}
        />
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <p>
          Santa wants to create grid with{" "}
          <span className="littleCode">surname</span> and{" "}
          <span className="littleCode">lastname</span> data.
        </p>
        <ol>
          <li>
            Specify <span className="littleCode">columnDef</span> with needed
            properties and use it in{" "}
            <span className="littleCode">AgGridReact</span>
          </li>
          <li>
            Specify <span className="littleCode">rowData</span> and use it in{" "}
            <span className="littleCode">AgGridReact</span>
          </li>
        </ol>
        <LinkToExercise linkToExercise="https://stackblitz.com/edit/vitejs-vite-pk5qoj?file=package.json" />
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`export default function Grid() {
    const [columnDefs] = useState<ColDef<GiftRequest>[]>([
      {
        headerName: 'Surname',
        field: 'surname',
      },
      {
        headerName: 'Lastname',
        field: 'lastname',
      },
    ]);

    const [rowData] = useState<GiftRequest[]>(data.giftData);

    return (
      <div className="ag-theme-alpine">
        <AgGridReact<GiftRequest> columnDefs={columnDefs} rowData={rowData} />
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
      <Footer backLink="/introduce/install" nextLink="/colDef/rowSorting" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
