import { NAME } from '../Constants'

export const onNameChanged = (text) => ({
    type: NAME,
    payload: text
})
