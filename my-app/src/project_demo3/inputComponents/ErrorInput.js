export function ErrorInput(props) {


    var message = <div></div>;
    console.log(props.err);
    if (props.err.type === "register") {
        message = (props.err.bool) ? (<div class="alert alert-success" role="alert">Signed Up!</div>)
            : (<div class="alert alert-danger" role="alert">{props.err.errorMessage}</div>)
    }
    if (props.err.type === "login") {
        message = (props.err.bool) ? (<div class="alert alert-success" role="alert">LoginSuccess!</div>)
            : (<div class="alert alert-danger" role="alert">{props.err.errorMessage}</div>)
    }


    return (
        <div>
            {message}
        </div>
    )
}