import React, { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

function Profile() {
    const {login} = useContext(UserContext)
    return (
        <div>
            <span>{login? "Dados do Usuário" : "Faça seu login para ter acesso as informações"}</span>
        </div>
    )
}

export default Profile