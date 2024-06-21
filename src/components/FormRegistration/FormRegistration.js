import React, {useCallback, useEffect, useState} from 'react';
import './FormRegistaration.css';
import {useTelegram} from "../../hooks/useTelegram";



const FormRegistration = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            lastName,
            firstName,
            middleName,
            birthDate,
            phoneNumber
        }
        tg.sendData(JSON.stringify(data));
    }, [lastName, firstName, middleName, birthDate, phoneNumber])

    useEffect(() =>{
        tg.MainButton.setParams({text: 'Зарегистрироваться'})
    })

    useEffect(() =>{
        if (!lastName || !firstName || !middleName || !phoneNumber){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    },  [lastName, firstName, middleName, phoneNumber])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onChangeDate = (e) => {
        setBirthDate(e.target.value)
    }

    const onChangeLastName= (e) => {
        setLastName(e.target.value)
    }

    const onChangeFirstName= (e) => {
        setFirstName(e.target.value)
    }

    const onChangeMiddleName = (e) => {
        setMiddleName(e.target.value)
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    return (
        <div className={"from"}>
            <h3>Форма регистрации клиента</h3>
            <input className={"input"}
                        type="text"
                        name="lastName"
                        placeholder={'Фамилия'}
                        value={lastName}
                        onChange={onChangeLastName}
                        required
            />
            <input className={"input"}
                        type="text"
                        name="firstName"
                        placeholder={'Имя'}
                        value={firstName}
                        onChange={onChangeFirstName}
                        required
            />

                    <input className={"input"}
                        type="text"
                        name="middleName"
                        placeholder={'Фамилия'}
                        value={middleName}
                        onChange={onChangeMiddleName}
                        required
                    />

                    <input className={"input"}
                        type="date"
                        name="birthDate"
                        value={birthDate}
                        placeholder={'Дата рождения'}
                        onChange={onChangeDate}
                    />

                    <input className={"input"}
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        placeholder={'Номер телефона:'}
                        onChange={onChangePhoneNumber}
                        required
                    />
           </div>
    );
};

export default FormRegistration;
