export type Sauna = {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: {
    city: string;
    country: string;
  };
  price: number;
  capacity: number;
  amenities: string[];
  isAvailable: boolean;
  numberOfReviews: number;
};
