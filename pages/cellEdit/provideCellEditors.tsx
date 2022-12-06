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
      <h2>Cell Edit - Provided Cell Editors</h2>
      <section className="group">
        <h3>Provided cell editors</h3>
        <p>AG-Grid provides couple of buildin cell editors:</p>
        <ul>
          <li>
            Text editor - <LittleCodeSpan>"agTextCellEditor"</LittleCodeSpan>
          </li>
          <li>
            Large text editor -{" "}
            <LittleCodeSpan>"agLargeTextCellEditor"</LittleCodeSpan>
          </li>
          <li>
            Date editor - <LittleCodeSpan>"agDateCellEditor"</LittleCodeSpan>
          </li>
          <li>
            Select editor -{" "}
            <LittleCodeSpan>"agSelectCellEditor"</LittleCodeSpan>
          </li>
          <li>
            Rich select editor -{" "}
            <LittleCodeSpan>"agRichSelectCellEditor"</LittleCodeSpan>(only for
            enterprise license)
          </li>
        </ul>
        <p>
          To use it we need use cell editor string as{" "}
          <LittleCodeSpan>cellEditor</LittleCodeSpan> property. Also we need to
          add <LittleCodeSpan>editable</LittleCodeSpan> property to{" "}
          <LittleCodeSpan>true</LittleCodeSpan>.
          <p>
            In case of popup editors we need also to set{" "}
            <LittleCodeSpan>cellEditorPopup</LittleCodeSpan> with value{" "}
            <LittleCodeSpan>true</LittleCodeSpan>.
          </p>
          <p>
            In case of select editors we need to provide params in{" "}
            <LittleCodeSpan>cellEditorParams</LittleCodeSpan>
            property <LittleCodeSpan>values</LittleCodeSpan> with array of
            values which we want to select in editor.
          </p>
          <CopyBlock
            text={`{
  headerName: 'Notes',
  field: 'note',
  editable: true,
  cellEditor: 'agLargeTextCellEditor',
  cellEditorPopup: true,
}`}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={a11yDark}
          />
        </p>
      </section>
      <section className="group">
        <h3>Exercise</h3>
        <LinkToExercise linkToExercise="https://stackblitz.com/edit/vitejs-vite-zrirhe?file=src%2FGrid.tsx" />
        <p>
          Santa wants to able to see and edit level of politeness of children
        </p>
        <ol>
          <li>
            Add <LittleCodeSpan>levelOfPolite</LittleCodeSpan> to{" "}
            <LittleCodeSpan>columnDef</LittleCodeSpan>
          </li>
          <li>
            Make that column <LittleCodeSpan>editable</LittleCodeSpan> and{" "}
            <LittleCodeSpan>cellEditorPopup</LittleCodeSpan>
          </li>
          <li>
            Set <LittleCodeSpan>cellRenderer</LittleCodeSpan> as{" "}
            <LittleCodeSpan>agSelectCellEditor</LittleCodeSpan>
          </li>
          <li>
            Set <LittleCodeSpan>cellEditorParams.values</LittleCodeSpan> as
            prepared array <LittleCodeSpan>LEVELS_OF_POLITE</LittleCodeSpan>
          </li>
        </ol>
      </section>
      <section className="group">
        <h3>Solution</h3>
        <HideSolution>
          <CopyBlock
            text={`{
  headerName: 'Level of Polite',
  editable: true,
  field: 'levelOfPolite',
  cellEditor: 'agSelectCellEditor',
  cellEditorParams: {
    values: LEVELS_OF_POLITE,
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
        backLink="/cellRender/cellRendererFunction"
        nextLink="/cellEdit/cellEditorComponent"
      />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
