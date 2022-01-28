const handleChange = (e, state, setState) => {
    setState({
        ...state,
        name: {
            ...state.name,
            [e.target.name]: e.target.value
        }
    })
};
export default handleChange;