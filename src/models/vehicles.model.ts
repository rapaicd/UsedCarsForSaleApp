import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { VehicleProps, VehicleStatic } from '../utils/interfaces';

const Vehicle = (sequelize: Sequelize): VehicleStatic => {
  return <VehicleStatic>sequelize.define("vehicles", {
    type: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.STRING
    }
  });
};

export default Vehicle;