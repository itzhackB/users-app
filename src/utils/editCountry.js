const handleLocation = (e, state, setState) => {
    setState({
        ...state,
        login:{
            uuid:`123${e.target.name}56${e.target.value}`
        },
        location: {
            ...state.location,
            [e.target.name]: e.target.value
        }
    })
};
export default handleLocation;