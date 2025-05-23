import React, { useState } from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import ProductsTable from "../../../components/custom/shop/product/table";
import { useGetProduct } from "../../../hook/apis/shop/product/useGetProduct";
import Loader from "../../../components/custom/extra/loader";
import DataNotFound from "../../../components/custom/extra/dataNotFound";
import { useGetCategory } from "../../../hook/apis/shop/category/useGetCategory";
const Products = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    page: 1,
    limit: 100000,
  });

  const { categories } = useGetCategory();

  const { products, isPending } = useGetProduct(filters);

  const handleSearch = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };
  const hanleCategory = (value) => {
    setFilters((prev) => ({ ...prev, category: value }));
  };

  const handlePagination = (page) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  return (
    <MasterLayout>
      <Breadcrumb heading="Shop" title="Shop - Products" />

      <TableDataLayer
        title={"Products"}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : products?.length > 0 ? (
            <ProductsTable rows={products} />
          ) : (
            <DataNotFound
              heading={"Products Not Found"}
              text={"There is no products found , based on your search!"}
            />
          )
        }
        isCustomHeaderButton
        modalTitle="Add Product"
        pageLink="/create-products"
        isAllowPagination={products?.length > 100000 ? true : false}
        paginationFunction={handlePagination}
        page={filters?.page}
        isFilter
        categoryFunction={hanleCategory}
        searchFunction={handleSearch}
        categories={categories}
      />
    </MasterLayout>
  );
};

export default Products;
