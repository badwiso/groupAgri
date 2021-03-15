export interface Client {
  id: number;
  ref: number;
  name: string;
  cin: string;
  phone: string;
  region: Region;
  status: boolean;
}

export interface Conso {
  clientId: number;
  sessionId: number;
  oldReading: number;
  newReading: number;
}

export interface Region {
  id: number;
  name: string;
}

export interface Session {
  id: number;
  name: string;
  start: string;
  end: string;
  deadline: string;
  price: number;
  fixedTx: number;
}
