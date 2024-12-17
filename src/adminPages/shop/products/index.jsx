import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import ProductsTable from "../../../components/custom/shop/product/table";
import ProductForm from "../../../components/custom/shop/product/form";

const Products = () => {
  const tableRows = [
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "Out of Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
    {
      id: "453",
      product: "Elegant Black Muslim Abaya with Modern Design",
      brand: "ChAmkpr",
      description:
        "This beautiful, eco-friendly abaya is crafted from sustainable fabrics, combining comfort and elegance. Perfect for both everyday wear and special events, it supports your values while elevating your style.",
      availibility: "In Stock",
      price: "400.00",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Shop" title="Shop - Products" />

      <TableDataLayer
        title={"Products"}
        body={<ProductsTable rows={tableRows} />}
        isCustomHeaderButton
        modalTitle="Add Product"
        modalId="add-sustainibility-company"
        modalForm={<ProductForm />}
        modalSize="modal-lg"
      />
    </MasterLayout>
  );
};

export default Products;
