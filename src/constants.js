export const dogData = [
  { name: 'Neo', color: 'red&amber', tailLength: 22, weight: 32 },
  { name: 'Jessy', color: 'black', tailLength: 7, weight: 14 },
  { name: 'Bailey', color: 'brown', tailLength: 15, weight: 18 },
  { name: 'Max', color: 'black', tailLength: 12, weight: 22 },
  { name: 'Bella', color: 'white', tailLength: 10, weight: 12 },
  { name: 'Charlie', color: 'gray', tailLength: 18, weight: 26 },
  { name: 'Lucy', color: 'red', tailLength: 8, weight: 16 },
  { name: 'Cooper', color: 'brown&white', tailLength: 14, weight: 20 },
  { name: 'Daisy', color: 'yellow', tailLength: 9, weight: 10 },
  { name: 'Rocky', color: 'black&tan', tailLength: 16, weight: 24 },
  { name: 'Lola', color: 'gray&white', tailLength: 11, weight: 15 },
  { name: 'Buddy', color: 'brown&black', tailLength: 13, weight: 21 },
  { name: 'Molly', color: 'black&gray', tailLength: 7, weight: 13 },
  { name: 'Tucker', color: 'white&brown', tailLength: 17, weight: 28 },
  { name: 'Lily', color: 'red&white', tailLength: 10, weight: 14 },
  { name: 'Duke', color: 'black&white', tailLength: 15, weight: 19 },
  { name: 'Sadie', color: 'brown&tan', tailLength: 12, weight: 17 },
  { name: 'Oliver', color: 'gray&black', tailLength: 9, weight: 11 },
  { name: 'Chloe', color: 'yellow&white', tailLength: 14, weight: 23 },
  { name: 'Riley', color: 'brown&gray', tailLength: 16, weight: 25 },
  { name: 'Penny', color: 'black&brown', tailLength: 11, weight: 15 },
  { name: 'Zeus', color: 'white&tan', tailLength: 13, weight: 20 },
];

export const errors = {
  missingFields:
    'Missing some required fields (name, color, tailLength, weight)',
  nameExists: (name) => `A dog with the name ${name} already exists`,
  invalidTailLength: 'Invalid tail length value. It must be a positive number',
  invalidWeight: 'Invalid weight value. It must be a positive number',
  internalError: 'Internal server error',
};
