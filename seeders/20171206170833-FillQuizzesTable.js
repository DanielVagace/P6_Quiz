'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('quizzes', [
            {
                question: 'Capital of Italy',
                answer: 'Roma',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Portugal',
                answer: 'Lisboa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Spain',
                answer: 'Madrid',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of France',
                answer: 'Paris',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('quizzes', null, {});
    }
};
