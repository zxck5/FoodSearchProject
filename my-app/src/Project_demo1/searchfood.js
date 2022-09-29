import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
const App = (props) => {
    var navigate = useNavigate();
    const [food, setFood] = useState({ calory: "" });
    const [curRecipe, setCurRecipe] = useState({});

    const onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        
        setFood({ ...food, [name]: value });
        
       
    }


    const onSubmit = (e) => {
        e.preventDefault();
       
        props.sendFood(food);
        var foodtype = food.foodName;
        alert(foodtype);
        var url = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + foodtype + '&app_id=7fffb998&app_key=425939ed5fafae152942b5aa6d966815';
        fetch(url).then(res => res.json()).then(json => props.handleFood(json.hits));
        alert('hello json');

        navigate('/foodsearch/' + food.foodName);
    }
   

    return (
        <div>
            <form onSubmit={onSubmit}>
                food : <input type={'text'} name={'foodName'} onChange={onChange} />
                calory : <input type={'text'} name={'calory'} onChange={onChange} />

                <input type={'submit'} value={'submit'} />
              

            </form>


        </div>
    )
}


export default App;
