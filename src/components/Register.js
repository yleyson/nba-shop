import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import { Button } from '@mui/material'
import TeamSelector from './TeamSelector'

const regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
const regexMailCheck = new RegExp("^[a-zA-Z_\.\d\-]+@[a-zA-Z]{2,15}(\.[a-zA-Z]+){1,2}$")

export default function Register(props) {
    let users = JSON.parse(localStorage.getItem(`users`))
    if (users == null)
        users = []
    const [newUser, setUser] = useState(users);
    const [userMail, setuserMail] = useState("")
    const [userPass, setuserPass] = useState("")
    const [userUserName, setuserName] = useState("")
    const [userTeam, setuserTeam] = useState("")
    const isMounted = useRef(false);


    useEffect(() => {

        localStorage.setItem('users', JSON.stringify(newUser))
        if (isMounted.current)
            props.handleClose()
        isMounted.current = true

    }, [newUser])

    const addUser = () => {

        let data = JSON.parse(localStorage.getItem(`users`))
        if (data === null) {
            let u = new User(userUserName, userPass, userMail, userTeam)
            setUser([...newUser, { mail: userMail, pass: userPass, name: userUserName, team: userTeam }], u)
        }

        let user = data.filter((item) => {
            return item.name === userUserName
        })
        user = user[0]
        console.log(user);
        if (user !== undefined) {
            if (user.name === userUserName) {
                alert('There is user name like this')
                return
            }
        }
        console.log(user);
        let check = regexPass.test(userPass)
        let Mailcheck = regexMailCheck.test(userMail)
        if (check) {
            if (Mailcheck) {
                console.log(newUser)
                let u = new User(userUserName, userPass, userMail, user)
                setUser([...newUser, { mail: userMail, pass: userPass, name: userUserName }], u)
            }
            else {
                alert('Incorrect Mail')

            }
        }

        else {

            alert('Incorrect Password Password should contain at least:\n 1 lower case\n1 upper case\n1 special character')
        }

    }

    const GetMail = (e) => {
        setuserMail(e.target.value)
    }
    const GetPass = (e) => {
        setuserPass(e.target.value)
    }

    const GetUserName = (e) => {
        setuserName(e.target.value)
    }

    const GetTeam = (Team) => {
        setuserTeam(Team)
        console.log(userTeam);
    }


    return (
        <div className='RegisterImage'>

            <h1 className='h1Register' >Sign Up</h1>
            <div class="form-floating mb-3">
                <input type="text" onChange={GetMail} class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" onChange={GetPass} class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div style={{ marginTop: '10px' }} class="form-floating mb-3">
                <input type="text" onChange={GetUserName} class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">User Name</label>
            </div>
            <TeamSelector GetFavorite={GetTeam} />
            <div className='btnRegister'>
                <Button onClick={addUser} variant="contained" color="success">Register</Button>
            </div>
            {/* user name:<input onChange={GetUserName} type="text" /> <br />
            user password:<input onChange={GetPass} type="text" /> <br />
            user Email:<input onChange={GetMail} type="email" /> <br />
            <button onClick={addUser}>register</button> */}

        </div>
    )
}
