import { Dog } from '../models/Dog.js';
import { errors } from '../constants.js';

export const getAllDogs = async (options) => {
  const dogs = await Dog.findAll(options);

  return dogs;
};

export const createDog = async ({ name, color, tailLength, weight }) => {
  const existingDog = await Dog.findOne({ where: { name } });

  if (existingDog) {
    throw new Error(errors.nameExists(name));
  }

  if (typeof tailLength !== 'number' || tailLength <= 0) {
    throw new Error(errors.invalidTailLength);
  }

  if (typeof weight !== 'number' || weight <= 0) {
    throw new Error(errors.invalidWeight);
  }

  const newDog = await Dog.create({
    name,
    color,
    tailLength,
    weight,
  });

  return newDog;
};
