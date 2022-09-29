import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [userInfo, setUserInfo] = useState({});

    var navigate = useNavigate();

    const onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setUserInfo({ ...userInfo, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(props.memberData);


        validateUserInfo()


    }
    //TODO: validate
    const validateUserInfo = () => {
        let idx = 0;
        var bool = false;

        for (var i = 0; i < props.memberData.length; i++) {
            if (props.memberData[i].id === userInfo.id && props.memberData[i].pw === userInfo.pw) {
                bool = true;
                idx = i;
                break;
            }
        }
        if (bool) {
            console.log(idx);
            console.log(props.memberData[idx]);
            props.currentUser(props.memberData[idx]);
            navigate('../../users/login/success');
        }


    }


    return (
        <form onSubmit={onSubmit}>
            <div>id: {userInfo.id} pw : {userInfo.pw}</div>
            id : <input name="id" onChange={onChange} />
            <br></br>
            password : <input name="pw" onChange={onChange} />
            <input type={"submit"}></input>
        </form>
    )
}

export default Login;