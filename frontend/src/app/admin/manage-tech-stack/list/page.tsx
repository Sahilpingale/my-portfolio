
import { useState, useEffect } from "react";
import StackList from "./components/StackList";
import getStackItems from "../../manage-project/libs/getStackItems";
import { IOption } from "@/app/libs/types";

export default async function TechStackList() {
  // Fetch all tech stack items
  // const allStackItems = await getStackItems();

  // Filter out Tech stack items and tools
  // const techStackItems = allStackItems.data.filter(
  //   (item: IOption) => item.type === "TECHSTACK"
  // );
  // const toolItems = allStackItems.data.filter(
  //   (item: IOption) => item.type === "TOOL"
  // );
  return (
    <section className="portfolio-details-top">
        {/* <StackList stackList={techStackItems} title="Tech Stack Items"/>
        <StackList stackList={toolItems} title="Toolbox Items"/> */}
        <div className="mx-5 my-3 mb-4">

        </div>
    </section>
  );
}
