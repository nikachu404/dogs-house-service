import { Dog } from '../models/Dog.js';
import { getAllDogs, createDog } from '../services/dogsService.js';

export const getAllDogsController = async (req, res) => {
  try {
    const { attribute, order, pageNumber, pageSize } = req.query;

    const options = {
      attributes: ['name', 'color', 'tailLength', 'weight'],
    };

    if (attribute && order) {
      options.order = [[attribute, order]];
    } else {
      options.order = [['createdAt', 'ASC']];
    }

    let response = {};

    if (pageNumber && pageSize) {
      const offset = (parseInt(pageNumber) - 1) * parseInt(pageSize);
      options.offset = offset;
      options.limit = parseInt(pageSize);

      const dogs = await getAllDogs(options);
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
      const dogs = await getAllDogs(options);
      response = dogs;
    }

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createDogController = async (req, res) => {
  try {
    const { name, color, tailLength, weight } = req.body;

    if (!name || !color || !tailLength || !weight) {
      return res.status(400).json({
        error: 'Missing some required fields (name, color, tailLength, weight)',
      });
    }

    const newDog = await createDog({ name, color, tailLength, weight });

    res.status(201).json(newDog);
  } catch (error) {
    if (error.message === 'A dog with the same name already exists') {
      return res.status(409).json({ error: error.message });
    }
    if (
      error.message === 'Invalid tail length value' ||
      error.message === 'Invalid weight value'
    ) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};
