// import React from "react";
// import "./CategorySection.css";
// import CategoryCard from "../../Components/CategoryCard/CategoryCard";
// import AboutMarketCard from "../../Components/AboutMarketCard/AboutMarketCard";
// import DownloadAppCard from "../../Components/DownloadAppCard/DownloadAppCard"
// import categories from "../../Data/Data"
// const CategorySection = () => {
//   console.log(categories)
//   return (
//     <div className="category">
//       <div className="category_left">
//         <AboutMarketCard/>
//         <DownloadAppCard/>
//       </div>
//       <div className="category_right">
//       {categories.map((category) => (
//           <CategoryCard
//             key={category.id}
//             imageSrc={category.imageUrl}
//             title={category.name}
//             description={category.subtitle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;

import React, { useState } from "react";
import "./CategorySection.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import AboutMarketCard from "../../Components/AboutMarketCard/AboutMarketCard";
import DownloadAppCard from "../../Components/DownloadAppCard/DownloadAppCard";
import categories from "../../Data/Data";

const CategorySection = ({name}) => {
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page

  const itemsPerPage = 9; // Number of items to display per page

  // Calculate the start and end index for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the categories array to get the items for the current page
  const visibleCategories = categories.slice(startIndex, endIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="category">
      <div className="category_left">
        <AboutMarketCard />
        <DownloadAppCard />
      </div>

      <div className="category_right">
        <div className="pagination">
          <button
            onClick={previousPage}
            disabled={currentPage === 0}
            className="prevbutton"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <h1>{name}</h1>
          <button
            onClick={nextPage}
            disabled={endIndex >= categories.length}
            className="nextbutton"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="categoriesTypes">
          {visibleCategories.map((category) => (
            <CategoryCard
              key={category.id}
              imageSrc={category.imageUrl}
              title={category.name}
              description={category.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
