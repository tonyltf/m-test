export interface IPeople {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: string;
  location: {
    latitude: number | null;
    longitude: number | null;
  };
}

export const defaultPeople = {
  _id: "",
  name: {
    first: "",
    last: "",
  },
  email: "",
  picture: "",
  location: {
    latitude: null,
    longitude: null,
  },
};
