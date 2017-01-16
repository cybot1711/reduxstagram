/* a reducer takes in two things
	the action
	and a copy of current state
 */

 const posts = (state = [], action) => {
	console.log(state, action)
	return state
}

export default posts