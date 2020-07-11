export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	console.log(action);
	switch (action.type) {
	  case 'INCREASE_COUNT':
		console.log('Current state.items length %s', state.items.length);
		console.log('Updating state.items length to %s', state.items.length + 1);
		return {
		  ...state,
		  items: state.items.concat(state.items.length + 1)
		};
   
	  default:
		console.log('Initial state.items length: %s', state.items.length);
		return state;
	}
  }
//   %s means format as "string" and is replaced by the value in $this->number_of_floors. 
//   %d means format as "integer", and is being replaced by the value in $this->color.
