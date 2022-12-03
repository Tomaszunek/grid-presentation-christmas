import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <h1>
        AG-Grid - Best Grid library <br /> Christmas edition
      </h1>
      <Header />
      <main>{children}</main>
    </>
  );
}
