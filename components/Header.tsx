import React from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "./constants/links";

export default function Header() {
  return (
    <header>
      <h1>AG-Grid - Best Grid library? - Christmas edition</h1>
      <nav>
        <ul>
          {NAVIGATION_LINKS.map((group) => {
            return (
              <React.Fragment key={group.groupName}>
                <li key={group.groupName}>{group.groupName}</li>
                <ol>
                  {group.groupItems.map((navItem) => {
                    return (
                      <Link key={navItem.path} href={navItem.path}>
                        <li key={navItem.path}>{navItem.name}</li>
                      </Link>
                    );
                  })}
                </ol>
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
