import {api} from "../https/api";

export const getUser = () => {
    return (dispatch) => {
        api("/api/v1/admintest/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data[0]})
            })
    }
}
export const getGame = () => {
    return (dispatch) => {
        api("/api/v1/theme/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }
}
export const user = () => {
    return (dispatch) => {
        api("/api/v1/user/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }
}