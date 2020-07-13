export default function shoppingListItemReducer(
	state = {
		items: [] // default value of state
	},
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items length %s', state.items.length); // why do the old style interpolation?
      		console.log('Updating state.items length to %s', state.items.length + 1);
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log('Initial state.items length: %s', state.items.length);
			return state;
	}
}
