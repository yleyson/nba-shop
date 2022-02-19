import React from 'react'
import GutterlessList from './GutterlessList'
import ListFav from './ListFav'
import { useNavigate } from 'react-router-dom'

export default function UserPage(props) {

    let user = JSON.parse(sessionStorage.getItem(`login_user`))
    const navigate = useNavigate()


    if (props.user === false) {
        navigate("/")
    }

    return (
        <div>
            <h1 >Hello {user.name}</h1>
            <h3 >Fan of </h3>
        </div>
    )
}
