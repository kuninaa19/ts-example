interface Iprovince {
  name: string;
  producers: Iproducer[];
  demand: number;
  price: number;
}

interface Iproducer {
  name: string;
  cost: number;
  production: number;
}

export { Iprovince, Iproducer };
