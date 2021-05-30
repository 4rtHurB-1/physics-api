'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('resources', [
      {
        "id": 2,
        "title": "Відео 1",
        "description": null,
        "type": "url",
        "text": null,
        "data": null,
        "url": "http://35.156.187.199:3000/static/videos/video-1.html"
      },
      {
        "id": 1,
        "title": "Механічний рух",
        "description": null,
        "type": "url",
        "text": null,
        "data": null,
        "url": "http://35.156.187.199:3000/static/theme-1/part-1.html"
      },
      {
        "id": 4,
        "title": "Механічний  рух 2",
        "description": null,
        "type": "url",
        "text": null,
        "data": null,
        "url": "http://35.156.187.199:3000/static/theme-1/part-2.html"
      },
      {
        "id": 3,
        "title": "Відео 2",
        "description": null,
        "type": "url",
        "text": null,
        "data": null,
        "url": "http://35.156.187.199:3000/static/videos/video-2.html"
      },
      {
        "id": 5,
        "title": "Механічний  рух 3",
        "description": null,
        "type": "url",
        "text": null,
        "data": null,
        "url": "http://35.156.187.199:3000/static/theme-1/part-3.html"
      },
      {
        id: 6,
        title: 'Траєкторія і шлях та Правило додавання векторів',
        description: '',
        type: 'url',
        text: null,
        data: null,
        url: 'http://35.156.187.199:3000/static/theme-2/part-1.html'
      },
      {
        id: 7,
        title: 'Вектор переміщення',
        description: '',
        type: 'url',
        text: null,
        data: null,
        url: 'http://35.156.187.199:3000/static/theme-2/part-2.html'
      },
      {
        id: 8,
        title: 'Проекції вектора переміщення',
        description: '',
        type: 'url',
        text: null,
        data: null,
        url: 'http://35.156.187.199:3000/static/theme-2/part-3.html'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
