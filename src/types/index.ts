export type HeroesData = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: {
    available: string;
    items: [
      {
        name: string;
      }
    ];
  };
  events: {
    items: [
      {
        name: string;
      }
    ];
  };
  urls: [
    {
      type: string;
      url: string;
    }
  ];
};

export const emptyHeroesData: HeroesData = {
  id: "",
  name: "",
  description: "",
  thumbnail: {
    extension: "",
    path: "",
  },
  comics: {
    available: "",
    items: [
      {
        name: "",
      },
    ],
  },
  events: {
    items: [
      {
        name: "",
      },
    ],
  },
  urls: [
    {
      type: "",
      url: "",
    },
  ],
};

export type ComicsData = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  creators: {
    avaliable: string;
    collectionURI: string;
    items: [
      {
        name: string;
        role: string;
      }
    ];
  };
  urls: [
    {
      type: string;
      url: string;
    }
  ];
  series: {
    name: string;
  };
  characters: {
    items: [
      {
        name: string;
      }
    ];
  };
};

export const emptyComicsData: ComicsData = {
  id: "",
  title: "",
  description: "",
  thumbnail: {
    extension: "",
    path: "",
  },
  creators: {
    avaliable: "",
    collectionURI: "",
    items: [
      {
        name: "",
        role: "",
      },
    ],
  },
  urls: [
    {
      type: "",
      url: "",
    },
  ],
  series: {
    name: "",
  },
  characters: {
    items: [
      {
        name: "",
      },
    ],
  },
};
