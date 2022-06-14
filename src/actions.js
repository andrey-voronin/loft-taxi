export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SET_PROFILE = 'SET_PROFILE'

export const logIn = (email, password) => ({ type: LOG_IN, payload: { email, password } })
export const logOut = () => ({ type: LOG_OUT })
export const authenticate = (email, password) => ({ type: AUTHENTICATE, payload: { email, password } })
export const setProfile = (cardNumber, expireDate, cardName, cvc) => ({ type: SET_PROFILE, payload: { cardNumber, expireDate, cardName, cvc } })