"use client";
import { TrashOutline } from "react-ionicons";
import { OptionsOutline } from "react-ionicons";

function TrashIcon() {
  return <TrashOutline color={"#00000"} height="25px" width="25px" />;
}

function ManageIcon() {
  return <OptionsOutline color={"#00000"} height="25px" width="25px" />;
}

export { TrashIcon, ManageIcon };
