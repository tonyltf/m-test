export interface IPeople{
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
