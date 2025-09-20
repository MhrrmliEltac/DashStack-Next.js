import { OrdersType, Status } from "../types/types";

export const TABLE_HEAD: string[] = [
  "id",
  "name",
  "address",
  "date",
  "type",
  "status",
];

export const TABLE_BODY: OrdersType[] = [
  // Health & Medicine
  {
    id: "00011",
    name: "Aylin Mammadova",
    address: "12 Nizami Street, Baku",
    date: "10 Oct 2023",
    type: "Health & Medicine",
    status: Status.Completed,
  },
  {
    id: "00012",
    name: "Rauf Karimov",
    address: "45 Tabriz Avenue, Ganja",
    date: "02 Sep 2022",
    type: "Health & Medicine",
    status: Status.Processing,
  },
  {
    id: "00013",
    name: "Zahra Aliyeva",
    address: "88 Heydar Aliyev Blvd, Sumgait",
    date: "15 Jan 2024",
    type: "Health & Medicine",
    status: Status.OnHold,
  },

  // Book & Stationary
  {
    id: "00014",
    name: "Elchin Aliyev",
    address: "23 Fountain Square, Baku",
    date: "28 Feb 2023",
    type: "Book & Stationary",
    status: Status.Rejected,
  },
  {
    id: "00015",
    name: "Nigar Rustamova",
    address: "7 Khatai Avenue, Baku",
    date: "05 May 2023",
    type: "Book & Stationary",
    status: Status.Completed,
  },
  {
    id: "00016",
    name: "Kamran Jafarov",
    address: "19 Narimanov Street, Mingachevir",
    date: "12 Jul 2023",
    type: "Book & Stationary",
    status: Status.InTransit,
  },

  // Services & Industry
  {
    id: "00017",
    name: "Sabina Guliyeva",
    address: "3 Azadliq Avenue, Baku",
    date: "30 Mar 2022",
    type: "Services & Industry",
    status: Status.Processing,
  },
  {
    id: "00018",
    name: "Farid Mammadli",
    address: "56 Nobel Street, Baku",
    date: "18 Nov 2023",
    type: "Services & Industry",
    status: Status.Completed,
  },
  {
    id: "00019",
    name: "Zaur Huseynov",
    address: "101 Samad Vurgun Street, Ganja",
    date: "09 Dec 2022",
    type: "Services & Industry",
    status: Status.OnHold,
  },

  // Fashion & Beauty
  {
    id: "00020",
    name: "Murad Hasanov",
    address: "77 Neftchilar Avenue, Baku",
    date: "14 Apr 2023",
    type: "Fashion & Beauty",
    status: Status.Rejected,
  },
  {
    id: "00021",
    name: "Aysel Mammadova",
    address: "33 Jafar Jabbarli Street, Baku",
    date: "21 Jun 2023",
    type: "Fashion & Beauty",
    status: Status.Completed,
  },
  {
    id: "00022",
    name: "Tural Huseynov",
    address: "11 Azim Azimzade Street, Baku",
    date: "03 Mar 2024",
    type: "Fashion & Beauty",
    status: Status.InTransit,
  },

  // Home & Living
  {
    id: "00023",
    name: "Leyla Karimova",
    address: "5 Samed Vurgun Street, Ganja",
    date: "17 Jan 2023",
    type: "Home & Living",
    status: Status.Completed,
  },
  {
    id: "00024",
    name: "Emin Abbasov",
    address: "9 Babek Avenue, Baku",
    date: "22 Feb 2024",
    type: "Home & Living",
    status: Status.Processing,
  },
  {
    id: "00025",
    name: "Ulviya Hajiyeva",
    address: "16 Gagarin Street, Sumgait",
    date: "29 Mar 2023",
    type: "Home & Living",
    status: Status.OnHold,
  },

  // Mobile & Phone
  {
    id: "00026",
    name: "Ilkin Mammadov",
    address: "44 Ganja Avenue, Baku",
    date: "06 Apr 2023",
    type: "Mobile & Phone",
    status: Status.Completed,
  },
  {
    id: "00027",
    name: "Sevda Aliyeva",
    address: "78 Narimanov Street, Ganja",
    date: "12 May 2023",
    type: "Mobile & Phone",
    status: Status.Processing,
  },
  {
    id: "00028",
    name: "Rashad Huseynov",
    address: "90 Azadliq Avenue, Baku",
    date: "19 Jun 2023",
    type: "Mobile & Phone",
    status: Status.Rejected,
  },

  // Accessories
  {
    id: "00029",
    name: "Lala Mammadova",
    address: "22 Khatai Avenue, Baku",
    date: "25 Jul 2023",
    type: "Accessories",
    status: Status.Completed,
  },
  {
    id: "00030",
    name: "Javid Guliyev",
    address: "33 Tabriz Street, Ganja",
    date: "30 Aug 2023",
    type: "Accessories",
    status: Status.OnHold,
  },
  {
    id: "00031",
    name: "Amina Rustamova",
    address: "55 Fountain Square, Baku",
    date: "04 Sep 2023",
    type: "Accessories",
    status: Status.InTransit,
  },

  // Electric
  {
    id: "00032",
    name: "Orkhan Aliyev",
    address: "12 Nobel Street, Baku",
    date: "10 Oct 2023",
    type: "Electric",
    status: Status.Completed,
  },
  {
    id: "00033",
    name: "Gunay Hajiyeva",
    address: "45 Azim Azimzade Street, Ganja",
    date: "02 Sep 2022",
    type: "Electric",
    status: Status.Processing,
  },
  {
    id: "00034",
    name: "Eldar Mammadov",
    address: "88 Heydar Aliyev Blvd, Sumgait",
    date: "15 Jan 2024",
    type: "Electric",
    status: Status.OnHold,
  },

  // Water
  {
    id: "00035",
    name: "Nigar Aliyeva",
    address: "23 Fountain Square, Baku",
    date: "28 Feb 2023",
    type: "Water",
    status: Status.Rejected,
  },
  {
    id: "00036",
    name: "Kamran Rustamov",
    address: "7 Khatai Avenue, Baku",
    date: "05 May 2023",
    type: "Water",
    status: Status.Completed,
  },
  {
    id: "00037",
    name: "Turan Jafarov",
    address: "19 Narimanov Street, Mingachevir",
    date: "12 Jul 2023",
    type: "Water",
    status: Status.InTransit,
  },

  // Gas
  {
    id: "00038",
    name: "Sabina Guliyeva",
    address: "3 Azadliq Avenue, Baku",
    date: "30 Mar 2022",
    type: "Gas",
    status: Status.Processing,
  },
  {
    id: "00039",
    name: "Farid Mammadli",
    address: "56 Nobel Street, Baku",
    date: "18 Nov 2023",
    type: "Gas",
    status: Status.Completed,
  },
  {
    id: "00040",
    name: "Zaur Huseynov",
    address: "101 Samad Vurgun Street, Ganja",
    date: "09 Dec 2022",
    type: "Gas",
    status: Status.OnHold,
  },

  // Internet
  {
    id: "00041",
    name: "Murad Hasanov",
    address: "77 Neftchilar Avenue, Baku",
    date: "14 Apr 2023",
    type: "Internet",
    status: Status.Rejected,
  },
  {
    id: "00042",
    name: "Aysel Mammadova",
    address: "33 Jafar Jabbarli Street, Baku",
    date: "21 Jun 2023",
    type: "Internet",
    status: Status.Completed,
  },
  {
    id: "00043",
    name: "Tural Huseynov",
    address: "11 Azim Azimzade Street, Baku",
    date: "03 Mar 2024",
    type: "Internet",
    status: Status.InTransit,
  },
];
