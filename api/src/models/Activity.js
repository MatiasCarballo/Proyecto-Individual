const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    }, 
    season: {
      type: DataTypes.STRING, 
      allowNull: true   
    },
    image:{ 
      type: DataTypes.TEXT, 
      allowNull: false,
    },
    like: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    });
}; 

/*  
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera) 
*/