import { SET_PROFILE } from "../actions"

export default function (state, action) {
    switch (action.type) {
        case SET_PROFILE: {
            return { profile: {...action.payload}}
        }
        default:
            return null
    }
}