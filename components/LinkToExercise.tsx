import React from "react";
import Link from "next/link";

type LinkToExerciseProps = {
  linkToExercise: string;
};

export default function LinkToExercise({
  linkToExercise,
}: LinkToExerciseProps) {
  return (
    <Link className="linkToExercise" href={linkToExercise} target="_blank">
      Stackblitz Exercise
    </Link>
  );
}
