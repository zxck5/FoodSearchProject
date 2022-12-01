import React, { useEffect, useState } from "react";

const Contact = () => {
    const [arr, setArr] = useState([]);
    // const [info, setInfo] = useState([]);
    // const [contactVal, setContactVal] = useState({});
    useEffect(() => {
        var url = "http://jsonplaceholder.typicode.com/users";
        fetch(url).then(x => x.json()).then(json => {
            setArr(json);
            
            // getContacts(json);
        })
    }, [])
    // const getContacts = (json) => {

    //     var arr = []
    //     for (var i = 0; i < json.length; i++) {
    //         // arr.push({username : json[i].username})
    //         // setContactVal({...contactVal, username })
    //     }
    //     setInfo(arr);

    // }

    return (
        <div>
            {Object.keys(arr).map((key,i) => (<Entry name = {arr[key].username} email = {arr[key].email}/>))}
        </div>
    )
}
const Entry = (props) => {
    return (
        <div>name : {props.name} <br></br>email :{props.email}</div>
        
    )
}
export default Contact;