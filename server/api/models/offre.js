'use strict'; 
module.exports = function(sequelize, Sequelize) {
    let Offre = sequelize.define('Offre', {
        OffreID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        Sujet: {
            type: Sequelize.STRING(1024)
        },
        NomSociete: {
            type: Sequelize.STRING(100)
        },
        AdresseSociete: {
            type: Sequelize.STRING(255)
        },
        AdresseElectroniqueContact: {
            type: Sequelize.STRING(255)
        },
        TelephoneContact: {
            type: Sequelize.STRING(10)
        },
        Type: {
            type: Sequelize.ENUM('STAGE', 'ALTERNANCE')
        }
    }, {  
        classMethods: {  
          associate: function(models) {
          }  
        }  
      });  
    return Offre;
};
