'use strict'; 
module.exports = function(sequelize, Sequelize) {
    let Question = sequelize.define('Question', {
        QuestionID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        Horodatage: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        Contenu: {
            type: Sequelize.STRING(1024)
        },
        Reponse: {
            type: Sequelize.STRING(1024),
            defaultValue: ''
        },
        UtilisateurID: {
            type: Sequelize.INTEGER
        }
    }, {  
        classMethods: {  
          associate: function(models) {
          }  
        }  
      });  
    return Question;
};
