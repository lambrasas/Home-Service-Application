export interface Service {
  picture: string;
  category: string;
  serviceName: string;
  serviceProvider: {
    name: string;
    surname: string;
  };
  address: string;
}

export const serviceData: Service[] = [
  {
    picture:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/08/featured_image_what_size_moving_truck_do_you_need.jpeg.jpg",
    category: "shifting",
    serviceName: "Moki veži",
    serviceProvider: {
      name: "Darius",
      surname: "Standys",
    },
    address: "Žemaičių al. 27, Klaipėda",
  },
  {
    picture:
      "https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg",
    category: "cleaning",
    serviceName: "Išsivalyk pats",
    serviceProvider: {
      name: "Tadas",
      surname: "Gedvilas",
    },
    address: "Kauno g. 27, Vilnius",
  },
  {
    picture:
      "https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners.jpg",
    category: "cleaning",
    serviceName: "UAB Valymas",
    serviceProvider: {
      name: "Regina",
      surname: "Kazlauskienė",
    },
    address: "Aukštaičių al. 27, Klaipėda",
  },

  {
    picture:
      "https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/kh-qualified-vs-unqualified-electrical-workers_feat.jpg",
    category: "electric",
    serviceName: "Elektrikas į namus",
    serviceProvider: {
      name: "Rokas",
      surname: "Andreikėnas",
    },
    address: "Maisto g. 17, Vilnius",
  },
];
