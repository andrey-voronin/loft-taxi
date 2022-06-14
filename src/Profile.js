import React from 'react'
import { connect } from "react-redux"
import { setProfile } from "./actions"

export const Profile = (props) => <>
    <h2>Профиль пользователя</h2>
    <form onSubmit={(event) => {
        event.preventDefault()
        const { cardNumber, expireDate, cardName, cvc } = event.target
        props.setProfile(cardNumber.value, expireDate.value, cardName.value, cvc.value)
    }}>
        <label htmlFor='cardNumber'>Номер карты</label>
        <input type='text' name='cardNumber' id='cardNumber' size='15' />
        <label htmlFor='cardName'>Имя владельца</label>
        <input type='text' name='cardName' id='cardName' size='15' />
        <label htmlFor='expireDate'>Срок действия</label>
        <input type='text' name='expireDate' id='expireDate' size='15' />
        <label htmlFor='cvc'>CVC</label>
        <input type='text' name='cvc' id='cvc' size='15' />

        <input type='submit' value='Сохранить' />
    </form></>

export default connect(
    null,
    { setProfile }
)(Profile)    