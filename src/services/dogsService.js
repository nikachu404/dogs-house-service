import { Dog } from '../models/Dog.js';

export const getAllDogs = async (options) => {
  const dogs = await Dog.findAll(options);

  return dogs;
};

export const createDog = async ({ name, color, tailLength, weight }) => {
  const existingDog = await Dog.findOne({ where: { name } });
  if (existingDog) {
    throw new Error('A dog with the same name already exists');
  }

  if (typeof tailLength !== 'number' || tailLength < 0) {
    throw new Error('Invalid tail length value');
  }

  if (typeof weight !== 'number' || weight < 0) {
    throw new Error('Invalid weight value');
  }

  const newDog = await Dog.create({
    name,
    color,
    tailLength,
    weight,
  });

  return newDog;
};
