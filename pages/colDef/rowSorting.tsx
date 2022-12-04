import type { ReactElement } from "react";
import { codepen, CopyBlock } from "react-code-blocks";
import HideSolution from "../../components/constants/Solution";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h2>Column Definition - Row Sorting</h2>
      <section className="group">
        <h3>Row sorting</h3>
        <p>
          We can enable and disable sorting for selected column using{" "}
          <span className="littleCode">sortable</span> property in{" "}
          <span className="littleCode">colDef</span> headers definition.
        </p>
        <p>
          We can customize how sort work for different columns using{" "}
          <span className="littleCode">comparator</span> property.
        </p>
        <p>
          Simple usage of sortable property looks like:
          <CopyBlock
            text={` const [columnDefs] = useState<ColDef<GiftRequest>[]>([
    {
      headerName: 'Surname',
      field: 'surname',
      sortable: true
    },
    {
      headerName: 'Lastname',
      field: 'lastname',
    },
  ]);`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={codepen}
          />
        </p>
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <p>
          Santa wants new header <span className="littleCode">city</span> where
          we can sort children location by city name.
        </p>
        <ol>
          <li>
            Add <span className="littleCode">city</span> header definition to
            <span className="littleCode">columnDef</span> to existed definition
          </li>
          <li>
            In defined city <span className="littleCode">ColDef</span> set{" "}
            <span className="littleCode">sortable</span> to value{" "}
            <span className="littleCode">true</span>{" "}
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
    sortable: true,
  },
]);`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={codepen}
          />
        </HideSolution>
      </section>
      <Footer backLink="/colDef/rowData" nextLink="/colDef/defaultColumnDef" />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
