import React from "react";
import Link from "next/link";

type FooterLinks = {
  backLink?: string;
  nextLink?: string;
};

export default function Footer({ backLink, nextLink }: FooterLinks) {
  const prev = `<- Previous Topic`;
  const next = `Next Topic ->`;
  return (
    <footer>
      <div>{backLink ? <Link href={backLink}>{prev}</Link> : null}</div>
      <div>{nextLink ? <Link href={nextLink}>{next}</Link> : null}</div>
    </footer>
  );
}
