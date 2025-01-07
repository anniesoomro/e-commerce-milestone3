export const Product = {
    title: "Product",
    name: "product",
    type: "document",
    fields: [
      {
        title: "Product Title",
        name: "title",
        type: "string",
        description: "The name or title of the product.",
      },
      {
        title: "Description",
        name: "description",
        type: "text",
        description: "A brief description of the product.",
      },
      {
        title: "Price",
        name: "price",
        type: "number",
        description: "The price of the product.",
      },
      {
        name:"slug",
        type:"slug",
        title:"Slug",
        options:{
          source:"title",
          maxLength:96,
        }
  
      },
      {
        title: "Category",
        name: "category",
        type: "string",
        description: "The category this product belongs to.",
        options: {
          list: ["Headphones", "Clothing", "Electronics", "Books", "Accessories"],
        },
      },
  
      {
        title: "Product Images",
        name: "image",
        type: "image", // Enables image cropping and focusing
      },
      {
        title: "Stock Quantity",
        name: "stock",
        type: "number",
        description: "The number of items available in stock.",
      },
      
    ],
  };
  
  