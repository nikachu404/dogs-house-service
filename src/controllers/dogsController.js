import { Dog } from '../models/Dog.js';
import { getAllDogs, createDog } from '../services/dogsService.js';
import { validateFields } from '../helpers/validateFields.js';
import { errors } from '../constants.js';

export const getAllDogsController = async (req, res) => {
  try {
    const { attribute, order, pageNumber, pageSize } = req.query;

    const options = {
      attributes: ['name', 'color', 'tailLength', 'weight'],
      order: [['createdAt', 'ASC']],
    };

    if (attribute && order) {
      options.order = [[attribute, order]];
    }

    let response = {};
    let dogs;

    if (pageNumber && pageSize) {
      const offset = (parseInt(pageNumber) - 1) * parseInt(pageSize);
      options.offset = offset;
      options.limit = parseInt(pageSize);

      dogs = await getAllDogs(options);

      const totalDogs = await Dog.count();
      const totalPages = Math.ceil(totalDogs / parseInt(pageSize));

      response = {
        totalPages,
        prevPage:
          pageNumber > 1 && pageNumber <= totalPages ? pageNumber - 1 : null,
        nextPage: pageNumber < totalPages ? +pageNumber + 1 : null,
        dogs,
      };
    } else {
      dogs = await getAllDogs(options);
      response = dogs;
    }

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: errors.internalError });
  }
};

export const createDogController = async (req, res) => {
  try {
    const { name, color, tailLength, weight } = req.body;

    const missingFieldError = validateFields([
      { value: name, error: errors.missingFields },
      { value: color, error: errors.missingFields },
      { value: tailLength, error: errors.missingFields },
      { value: weight, error: errors.missingFields },
    ]);

    if (missingFieldError) {
      return res.status(400).json({ error: missingFieldError });
    }

    const newDog = await createDog({ name, color, tailLength, weight });

    res.status(201).json({
      name: newDog.name,
      color: newDog.color,
      tailLength: newDog.tailLength,
      weight: newDog.weight,
    });
  } catch (error) {
    const { name } = req.body;

    switch (error.message) {
      case errors.nameExists(name):
        return res.status(409).json({ error: error.message });

      case errors.invalidTailLength:
      case errors.invalidWeight:
        return res.status(400).json({ error: error.message });

      default:
        return res.status(500).json({ error: errors.internalError });
    }
  }
};
