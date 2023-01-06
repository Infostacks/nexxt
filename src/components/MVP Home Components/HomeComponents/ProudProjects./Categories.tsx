import React from "react";

const categories = ({ categories, filterItems, currentCategory }: any) => {
  console.log(currentCategory);
  return (
    <div className="flex flex-wrap xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-8 lg:gap-8 md:gap-8 gap-0 p-0 ">
      {categories.map((category: any, index: any) => {
        return (
          <button
            type="button"
            className={`font-semibold text-sm capitalize py-2 px-5 
              ${
                currentCategory === category
                  ? "bg-secondary text-txtColor rounded-2xl"
                  : "active:text-txtColor active:bg-secondary"
              }
              hover:bg-primary  hover:text-txtColor hover:rounded-2xl`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default categories;
