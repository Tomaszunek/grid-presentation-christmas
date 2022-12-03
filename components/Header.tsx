import React from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "./constants/links";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {NAVIGATION_LINKS.map((group) => {
            return (
              <>
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
              </>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
