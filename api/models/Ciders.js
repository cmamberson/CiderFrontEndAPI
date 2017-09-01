/**
 * Ciders.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

          ciderName: {
            type: 'string',
            required: true,
            unique: true
          },
          percent: {
            type: 'float',
            required: true
          },
          isApple: {
            type: 'boolean',
            required: true
          },
          location: {
            type:'string'

          },
          corpSite: {
            type:'string',
            url: true
          },
          myRating: {
            type:'integer',
            notNull: true,
            max: 5
          }

  }

};
