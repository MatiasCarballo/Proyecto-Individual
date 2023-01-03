const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    region:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false, 
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    area:{
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};


/*
[ ] País con las siguientes propiedades:
ID (Código de 3 letras) *
Nombre *
Imagen de la bandera *
Continente *
Capital *
Subregión
Área
Población
*/