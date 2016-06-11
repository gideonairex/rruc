/* eslint new-cap:0 */
Feature( 'Add todo' );

Scenario( 'I should be able to add todo', ( I, todoListPage ) => {
	todoListPage.goToPage();
	// let is not yet supported because this is running in 'use strict'
	[
		'Wake up',
		'Take meds',
		'Eat breakfast',
		'Take nap'
	].forEach( ( todo ) => {
		todoListPage.addTodo( todo );
	} );

	I.wait( 5 );
} );
