import Button from "react-bootstrap/Button";

export default function FoodDelete (props) {
    

    const onClick=()=>{
        var arr = props.inven;
        for (var i = 0; i < arr.length; i ++) {
            if (props.recipe.label === arr[i].label && arr[i].userNum === props.userNum) {
                arr.splice(i,1);
            }
        }
        
        props.setInven(arr);
        arr = arr.filter(
            (obj) => obj.userNum == props.userNum && obj.label !== ""
          )
        props.setArr(arr);
        console.log(arr);
    }

    return (
        <Button recipe={props.recipe} onClick={onClick}>
            Delete recipe
        </Button>
    ) 

}