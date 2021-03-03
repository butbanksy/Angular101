export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate: number,
  children?: Child[],
}

interface Child {
  name: string,
  age: number
}

export const passengers: Passenger[] = [
  {
    id: 1,
    fullName: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [
      {name: 'Mahmoud', age: 17},
      {name: 'Mouad', age: 20}
    ]
  },
  {
    id: 2,
    fullName: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [
      {name: 'Oussama', age: 17},
    ]
  },
  {
    id: 3,
    fullName: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: [
      {name: 'Fouad', age: 20}
    ]
  },
  {
    id: 4,
    fullName: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
  },
  {
    id: 5,
    fullName: 'Tina',
    checkedIn: false,
    checkInDate: null,
  },
];

