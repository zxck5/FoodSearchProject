
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const [userInfo, setUserInfo] = useState({});
    var navigate = useNavigate();


    const onChange =(e)=> {
        var name = e.target.name;
        var value = e.target.value;
        setUserInfo({...userInfo, [name] : value})
    }

   

    const validateInfo = (value) => {
        alert("register validation");
        
        if(binarySearch(0,props.memberData.length-1,value,"id")) {
            alert("duplicate id");
            return false;
        } else {
            alert("ok");
            return true;
        }
    } 
    const binarySearch = (left,right,value,type) => {
        var memberData = props.memberData.sort(function(a,b){
            return a[type] - b[type];
        });
        var result = left;
        while (left <= right) {
            var mid = parseInt((left+right)/2);
            if (memberData[mid].id < value) {
                left = mid+1;
            } else {
                right = mid-1;
                result = mid;
            }
        }
        return value === memberData[result].id;
    }

   
    // useEffect()
    
    const onSubmit = (e) => {
        e.preventDefault();
        var bool = true;
        
        alert("submit!")
        console.log(props.memberData.length);
        if (props.memberData.length > 0) {
    
            if(!validateInfo(userInfo.id)) bool = false; 

        }
        if (bool) {
            alert("fn:" +userInfo.fn + "welcome")
            props.onCreate(userInfo);
            navigate('/users/register/success');
        }
    }

    return (
        <form method="get" onSubmit={onSubmit}>
            <h1>{userInfo.fn} || {userInfo.ln} || {userInfo.id} || {userInfo.pw} || {userInfo.em} </h1>
            <br></br>
            first name : <input name="fn" onChange={onChange}/>
            <br></br>
            last name : <input name="ln" onChange={onChange}/>
            <br></br>
            id : <input name="id" onChange={onChange}/>
            <br></br>
            password : <input name="pw" onChange={onChange}/>
            <br></br>
            email address : <input name="em" onChange={onChange}/>
            <input type="submit"/>
        </form>
    )
}
export default Register;