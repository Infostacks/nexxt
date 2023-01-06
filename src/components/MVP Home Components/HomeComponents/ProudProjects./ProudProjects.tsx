import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { proudProjects } from "../../../utils/data";

const allCategories = [
  "all",
  new Set(proudProjects.map((item) => item.category)),
];

const proudprojects = () => {
  const [menuItems, setMenuItems] = useState(proudProjects);
  const [categories, setCategories] = useState(allCategories);
  const [currentCat, setCurrentCat] = useState("all");

  const filterItems = (category: any) => {
    setCurrentCat(category);
    if (category === "all") {
      setMenuItems(proudProjects);
      return;
    }
    const newItems = proudProjects.filter(
      (item: any) => item.category === category
    );
    setMenuItems(newItems);
    console.log("menue items: ", menuItems);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full gap-5">
      <div className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center lg:max-w-4xl sm:max-w-sm rounded-xl px-8 py-3">
        <h2>Proud Projects</h2>
      </div>
      <div className="rounded-xl px-8 py-3 xl:mx-40 lg:mx-40 md:mx-40 mx-10 bg-primary text-txtColor">
        <Categories
          categories={categories}
          filterItems={filterItems}
          currentCategory={currentCat}
        />
      </div>
      <div className="">
        <Menu items={menuItems} />
      </div>
    </section>
  );
};

export default proudprojects;
