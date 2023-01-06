import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

const menu = ({ items }: any) => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-8 xl:px-28 lg:px-28 md:px-28">
      {items.map((menuItem: any) => {
        const { id, link, img, title } = menuItem;
        return (
          <div key={id} className="">
            <Link to={""}>
              <a>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="opacity-95 px-10"
                    whileHover={{
                      opacity: 1,
                      scale: 1.15,
                      rotate: id % 2 === 0 ? -5 : 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={img} width="300" height="300" alt={title} />
                  </motion.div>
                </motion.div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default menu;
