'use strict'; 
module.exports = function(sequelize, Sequelize) {
    let Utilisateur = sequelize.define('Utilisateur', {
        UtilisateurID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        Nom: {
            type: Sequelize.STRING(50)
        },
        Prenom: {
            type: Sequelize.STRING(50)
        },
        Adresse: {
            type: Sequelize.STRING(255)
        },
        AdresseElectronique: {
            type: Sequelize.STRING(255)
        },
        Telephone: {
            type: Sequelize.STRING(10)
        },
        PasswordHash: {
            type: Sequelize.STRING(512)
        },
        Salt: {
            type: Sequelize.STRING(64)
        },
        Role: {
            type: Sequelize.ENUM('PROSPECT', 'MIAGISTE','COLLABORATEUR'),
            defaultValue: 'PROSPECT',
        },
        JWT: {
            type: Sequelize.STRING(512)
        }
    }, {  
        classMethods: {  
          associate: function(models) {
          }  
        }  
      });  
    return Utilisateur;
};
