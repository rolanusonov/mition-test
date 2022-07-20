
export const initialState = {
    catalog: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOAD_CATALOG":
            return {...state, catalog: action.payload}
        default:
            return state
    }
}
