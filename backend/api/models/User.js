/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

// To create using sails console
// User.create({ firstName: 'Shanika', lastName: 'Ediriweera', streetName: 'Wanatha Rd', town: 'Nugegoda', birthDate: '06-09-1993', email: 'shanika@gmail.com', contactNumber: '0711246252', designation: 'Intern', adminRole: 'SystemAdmin' }).exec(console.log);

module.exports = {
    attributes: {
        //eg: BIB001
        // TODO: check how to autogenerate - can we auto increment with 'BIB'
        id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true,
            // required: true
        },

        username: {
            type: 'string',
            size: 128,
            required: true,
            unique: true
        },

        nickname:{
          type: 'string',
          size: 128
        },

        firstName: {
            type: 'string',
      		size: 128,
            required: true
        },

        lastName: {
            type: 'string',
      		size: 128,
            required: true
        },

        //address - can we have complex attributes?
        streetName: {
            type: 'string'
        },

        town: {
            type: 'string'
        },

        birthDate: {
            type: 'date'
        },

        email: {
      		  type: 'email',
            required: true,
      		  unique: true
    	  },


        contactNumber: {
            type: 'string'
        },

        //create a seperate table to designations - and add ability to add new designations
        designation: {
            type: 'string'
        },

        // change attr. name to role
        adminRole: {
            model: 'role'
        },

	    // this can be used to associate a one to many relation with a contacts table
	    // contacts: {
	    //   collection: 'Contact',
	    //   via: 'person'
	    // }

        password: {
            type: 'string',
            required: true,
        },

        active: {
          type: 'boolean',
          defaultsTo: true
        },

        isPasswordValid: function (password, cb) {
          bcrypt.compare(password, this.password, cb);
        }
    }
};
