import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { dogData } from '../constants.js';

export const Dog = sequelize.define(
  'Dog',
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tailLength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tail_length',
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'dogs',
    updatedAt: false,
  }
);

(async () => {
  try {
    await Dog.sync({ force: true });

    await Dog.bulkCreate(dogData);
  } catch (error) {
    const errorMessage = error.message;
    console.error(
      'Error occurred during database initialization:',
      errorMessage
    );
  }
})();
