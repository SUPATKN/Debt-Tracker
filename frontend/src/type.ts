export interface Person {
  id: number;
  name: string;
  totalDebt: number;
}

export interface Debt {
  id: number;
  whoPaid: Person;
  whoReceived: Person;
  debt: number;
  description: string;
  date: string;
}
