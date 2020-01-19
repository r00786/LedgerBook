import { NAME, ADDRESS, MOBILE, EMAIL } from '../Constants'

export const onNameChanged = (text) => ({
    type: NAME,
    payload: text
})
export const onAddressChange = (text) => ({
    type: ADDRESS,
    payload: text
})
export const onMobileChange = (text) => ({
    type: MOBILE,
    payload: text
})
export const onEmailChange = (text) => ({
    type: EMAIL,
    payload: text
})
