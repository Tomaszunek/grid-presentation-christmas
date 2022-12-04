export type NavigationLink = {
  path: string;
  name: string;
};

export type NavigationLinkGroup = {
  groupName: string;
  groupItems: NavigationLink[];
};

export const NAVIGATION_LINKS: NavigationLinkGroup[] = [
  {
    groupItems: [
      {
        name: "Start",
        path: "/",
      },
      {
        name: "Installing AG Grid with React",
        path: "/introduce/install",
      },
    ],
    groupName: "Introduce",
  },
  {
    groupItems: [
      {
        name: "Row Data",
        path: "/colDef/rowData",
      },
      {
        name: "Row Sorting",
        path: "/colDef/rowSorting",
      },
      {
        name: "Default Column Definition",
        path: "/colDef/defaultColumnDef",
      },
      {
        name: "Filtering",
        path: "/colDef/filtering",
      },
    ],
    groupName: "Column Definition",
  },
  {
    groupItems: [
      {
        name: "Value Getter",
        path: "/cellRender/valueGetter",
      },
      {
        name: "Value Formatter",
        path: "/cellRender/valueFormatter",
      },
      {
        name: "Cell Renderer Function",
        path: "/cellRender/cellRendererFunction",
      },
    ],
    groupName: "Cell Rendering",
  },
  {
    groupItems: [
      {
        name: "Provide Cell Editors",
        path: "/cellEdit/provideCellEditors",
      },
      {
        name: "Cell Editor Component",
        path: "/cellEdit/cellEditorComponent",
      },
    ],
    groupName: "Cell Editing",
  },
  {
    groupItems: [
      {
        name: "Cell Styling",
        path: "/styling/cellStyling",
      },
      {
        name: "Row Styling",
        path: "/styling/rowStyling",
      },
      {
        name: "Themes",
        path: "/styling/themes",
      },
    ],
    groupName: "Styling",
  },
];
