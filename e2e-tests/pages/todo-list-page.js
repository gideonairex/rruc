'use strict';

let I;

module.exports = {

	_init () {
		I = require( '../steps/steps-file.js' )();
	},

	'fields' : {
		'todo' : '#todo-name',
		'add'  : '#add-todo'
	},

	goToPage () {
		I.amOnPage( '/' );
		I.see( 'Todo List!' );
	},

	addTodo ( todo ) {
		I.fillField( this.fields.todo, todo );
		I.click( this.fields.add );
	}

};
