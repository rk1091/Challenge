// TODO: Lazy load this data
const PRODUCTS_DATA = [
  {
    productID: 1,
    productName: "Chai",
    supplierID: 1,
    categoryID: 1,
    quantityPerUnit: "10 boxes x 20 bags",
    unitPrice: 18,
    unitsInStock: 39,
    unitsOnOrder: 0,
    reorderLevel: 10,
    discontinued: 0,
  },
  {
    productID: 2,
    productName: "Chang",
    supplierID: 1,
    categoryID: 1,
    quantityPerUnit: "24 - 12 oz bottles",
    unitPrice: 19,
    unitsInStock: 17,
    unitsOnOrder: 40,
    reorderLevel: 25,
    discontinued: 0,
  },
  {
    productID: 3,
    productName: "Aniseed Syrup",
    supplierID: 1,
    categoryID: 2,
    quantityPerUnit: "12 - 550 ml bottles",
    unitPrice: 10,
    unitsInStock: 13,
    unitsOnOrder: 70,
    reorderLevel: 25,
    discontinued: 0,
  },
  {
    productID: 4,
    productName: "Chef Anton's Cajun Seasoning",
    supplierID: 2,
    categoryID: 2,
    quantityPerUnit: "48 - 6 oz jars",
    unitPrice: 22,
    unitsInStock: 53,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: 0,
  },
  {
    productID: 5,
    productName: "Chef Anton's Gumbo Mix",
    supplierID: 2,
    categoryID: 2,
    quantityPerUnit: "36 boxes",
    unitPrice: 21.35,
    unitsInStock: 0,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: 1,
  },
  {
    productID: 6,
    productName: "Grandma's Boysenberry Spread",
    supplierID: 3,
    categoryID: 2,
    quantityPerUnit: "12 - 8 oz jars",
    unitPrice: 25,
    unitsInStock: 120,
    unitsOnOrder: 0,
    reorderLevel: 25,
    discontinued: 0,
  },
  {
    productID: 7,
    productName: "Uncle Bob's Organic Dried Pears",
    supplierID: 3,
    categoryID: 7,
    quantityPerUnit: "12 - 1 lb pkgs.",
    unitPrice: 30,
    unitsInStock: 15,
    unitsOnOrder: 0,
    reorderLevel: 10,
    discontinued: 0,
  },
  {
    productID: 8,
    productName: "Northwoods Cranberry Sauce",
    supplierID: 3,
    categoryID: 2,
    quantityPerUnit: "12 - 12 oz jars",
    unitPrice: 40,
    unitsInStock: 6,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: 0,
  },
  {
    productID: 9,
    productName: "Mishi Kobe Niku",
    supplierID: 4,
    categoryID: 6,
    quantityPerUnit: "18 - 500 g pkgs.",
    unitPrice: 97,
    unitsInStock: 29,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: 1,
  },
];

const ORDERS_DATA = [
  {
    orderID: 10248,
    customerID: "VINET",
    employeeID: 5,
    orderDate: "1996-07-04 00:00:00.000",
    requiredDate: "1996-08-01 00:00:00.000",
    shippedDate: "1996-07-16 00:00:00.000",
    shipVia: 3,
    freight: 32.38,
    shipName: "Vins et alcools Chevalier",
    shipAddress: "59 rue de l'Abbaye",
    shipCity: "Reims",
    shipRegion: "NULL",
    shipPostalCode: 51100,
    shipCountry: "France",
  },
  {
    orderID: 10249,
    customerID: "TOMSP",
    employeeID: 6,
    orderDate: "1996-07-05 00:00:00.000",
    requiredDate: "1996-08-16 00:00:00.000",
    shippedDate: "1996-07-10 00:00:00.000",
    shipVia: 1,
    freight: 11.61,
    shipName: "Toms Spezialitäten",
    shipAddress: "Luisenstr. 48",
    shipCity: "Münster",
    shipRegion: "NULL",
    shipPostalCode: 44087,
    shipCountry: "Germany",
  },
  {
    orderID: 10250,
    customerID: "HANAR",
    employeeID: 4,
    orderDate: "1996-07-08 00:00:00.000",
    requiredDate: "1996-08-05 00:00:00.000",
    shippedDate: "1996-07-12 00:00:00.000",
    shipVia: 2,
    freight: 65.83,
    shipName: "Hanari Carnes",
    shipAddress: "Rua do Paço 67",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "05454-876",
    shipCountry: "Brazil",
  },
  {
    orderID: 10251,
    customerID: "VICTE",
    employeeID: 3,
    orderDate: "1996-07-08 00:00:00.000",
    requiredDate: "1996-08-05 00:00:00.000",
    shippedDate: "1996-07-15 00:00:00.000",
    shipVia: 1,
    freight: 41.34,
    shipName: "Victuailles en stock",
    shipAddress: "2 rue du Commerce",
    shipCity: "Lyon",
    shipRegion: "NULL",
    shipPostalCode: 69004,
    shipCountry: "France",
  },
  {
    orderID: 10252,
    customerID: "SUPRD",
    employeeID: 4,
    orderDate: "1996-07-09 00:00:00.000",
    requiredDate: "1996-08-06 00:00:00.000",
    shippedDate: "1996-07-11 00:00:00.000",
    shipVia: 2,
    freight: 51.3,
    shipName: "Suprêmes délices",
    shipAddress: "Boulevard Tirou 255",
    shipCity: "Charleroi",
    shipRegion: "NULL",
    shipPostalCode: "B-6000",
    shipCountry: "Belgium",
  },
  {
    orderID: 10253,
    customerID: "HANAR",
    employeeID: 3,
    orderDate: "1996-07-10 00:00:00.000",
    requiredDate: "1996-07-24 00:00:00.000",
    shippedDate: "1996-07-16 00:00:00.000",
    shipVia: 2,
    freight: 58.17,
    shipName: "Hanari Carnes",
    shipAddress: "Rua do Paço 67",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "05454-876",
    shipCountry: "Brazil",
  },
  {
    orderID: 10254,
    customerID: "CHOPS",
    employeeID: 5,
    orderDate: "1996-07-11 00:00:00.000",
    requiredDate: "1996-08-08 00:00:00.000",
    shippedDate: "1996-07-23 00:00:00.000",
    shipVia: 2,
    freight: 22.98,
    shipName: "Chop-suey Chinese",
    shipAddress: "Hauptstr. 31",
    shipCity: "Bern",
    shipRegion: "NULL",
    shipPostalCode: 3012,
    shipCountry: "Switzerland",
  },
  {
    orderID: 10255,
    customerID: "RICSU",
    employeeID: 9,
    orderDate: "1996-07-12 00:00:00.000",
    requiredDate: "1996-08-09 00:00:00.000",
    shippedDate: "1996-07-15 00:00:00.000",
    shipVia: 3,
    freight: 148.33,
    shipName: "Richter Supermarkt",
    shipAddress: "Starenweg 5",
    shipCity: "Genève",
    shipRegion: "NULL",
    shipPostalCode: 1204,
    shipCountry: "Switzerland",
  },
  {
    orderID: 10256,
    customerID: "WELLI",
    employeeID: 3,
    orderDate: "1996-07-15 00:00:00.000",
    requiredDate: "1996-08-12 00:00:00.000",
    shippedDate: "1996-07-17 00:00:00.000",
    shipVia: 2,
    freight: 13.97,
    shipName: "Wellington Importadora",
    shipAddress: "Rua do Mercado 12",
    shipCity: "Resende",
    shipRegion: "SP",
    shipPostalCode: "08737-363",
    shipCountry: "Brazil",
  },
];

const CUSTOMERS_DATA = [
  {
    customerID: "ALFKI",
    companyName: "Alfreds Futterkiste",
    contactName: "Maria Anders",
    contactTitle: "Sales Representative",
    address: "Obere Str. 57",
    city: "Berlin",
    region: "NULL",
    postalCode: 12209,
    country: "Germany",
    phone: "030-0074321",
    fax: "030-0076545",
  },
  {
    customerID: "ANATR",
    companyName: "Ana Trujillo Emparedados y helados",
    contactName: "Ana Trujillo",
    contactTitle: "Owner",
    address: "Avda. de la Constitución 2222",
    city: "México D.F.",
    region: "NULL",
    postalCode: "05021",
    country: "Mexico",
    phone: "(5) 555-4729",
    fax: "(5) 555-3745",
  },
  {
    customerID: "ANTON",
    companyName: "Antonio Moreno Taquería",
    contactName: "Antonio Moreno",
    contactTitle: "Owner",
    address: "Mataderos  2312",
    city: "México D.F.",
    region: "NULL",
    postalCode: "05023",
    country: "Mexico",
    phone: "(5) 555-3932",
    fax: "NULL",
  },
  {
    customerID: "AROUT",
    companyName: "Around the Horn",
    contactName: "Thomas Hardy",
    contactTitle: "Sales Representative",
    address: "120 Hanover Sq.",
    city: "London",
    region: "NULL",
    postalCode: "WA1 1DP",
    country: "UK",
    phone: "(171) 555-7788",
    fax: "(171) 555-6750",
  },
  {
    customerID: "BERGS",
    companyName: "Berglunds snabbköp",
    contactName: "Christina Berglund",
    contactTitle: "Order Administrator",
    address: "Berguvsvägen  8",
    city: "Luleå",
    region: "NULL",
    postalCode: "S-958 22",
    country: "Sweden",
    phone: "0921-12 34 65",
    fax: "0921-12 34 67",
  },
  {
    customerID: "BLAUS",
    companyName: "Blauer See Delikatessen",
    contactName: "Hanna Moos",
    contactTitle: "Sales Representative",
    address: "Forsterstr. 57",
    city: "Mannheim",
    region: "NULL",
    postalCode: 68306,
    country: "Germany",
    phone: "0621-08460",
    fax: "0621-08924",
  },
  {
    customerID: "BLONP",
    companyName: "Blondesddsl père et fils",
    contactName: "Frédérique Citeaux",
    contactTitle: "Marketing Manager",
    address: "24 place Kléber",
    city: "Strasbourg",
    region: "NULL",
    postalCode: 67000,
    country: "France",
    phone: "88.60.15.31",
    fax: "88.60.15.32",
  },
  {
    customerID: "BOLID",
    companyName: "Bólido Comidas preparadas",
    contactName: "Martín Sommer",
    contactTitle: "Owner",
    address: "67C Araquil",
    city: "Madrid",
    region: "NULL",
    postalCode: 28023,
    country: "Spain",
    phone: "(91) 555 22 82",
    fax: "(91) 555 91 99",
  },
  {
    customerID: "BONAP",
    companyName: "Bon app'",
    contactName: "Laurence Lebihan",
    contactTitle: "Owner",
    address: "12 rue des Bouchers",
    city: "Marseille",
    region: "NULL",
    postalCode: 13008,
    country: "France",
    phone: "91.24.45.40",
    fax: "91.24.45.41",
  },
];

export const ResultMap = {
  1: PRODUCTS_DATA,
  2: ORDERS_DATA,
  3: CUSTOMERS_DATA,
};
