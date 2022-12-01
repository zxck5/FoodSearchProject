import { useEffect, useState } from 'react';
import react from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from 'axios';
function App() {
  return (
    <div>
      <FetchingAPI />
      <GetActivityAxios/>
      <GetActivityReactAxios/>
      <GetActivityReactAxios2/>
    </div>
  );
}
function FetchingAPI() {
  let url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=d18928ccbdbb0cb289f7df4a8069251d";
  const [obj, setObj] = useState({});
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        alert(JSON.stringify(data));
        setObj(data)})
  }, [])
  if(obj.weather == undefined){
    return <div>Wait</div>
  }
  return (
    <div>
      {obj.weather[0].main}
    </div>
  );

}
function MakeUpProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").then(x => x.json()).then((json) => {
      setProducts(json);
    });

  }, []);
  return <div>
    {products.map(item => { return <div>{item.name} {item.brand} {item.price}</div> })}
  </div>
}
class GetActivityAxios extends react.Component {
  constructor(props) {
    super(props);
    this.state = { weatherInfo: { data: { weather: [] } } }
  }
  componentDidMount() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=d18928ccbdbb0cb289f7df4a8069251d";
    axios.get(url).then(json => {
      console.log(json);
      this.setState({ weatherInfo: json });
      console.log(this.state.weatherInfo);
    })
  }
  render() {
    return <div>
      {this.state.weatherInfo.data.weather.map(object => {
        var arrayOfKeys = Object.keys(object);
        return <div>{arrayOfKeys.map(key => {
          return <WeatherEntry field={key} value={object[key]} />;
        })}<hr></hr></div>
      })}
    </div>
  }
}
function WeatherEntry(props) {
  return <div>{props.field} == {props.value}</div>
}
class GetActivityReactAxios extends react.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  render() {
    return <div>
      <Get url="https://www.boredapi.com/api/activity" params={{}}>
        {
          (error, response, isLoading, makeRequest, axios) => {
            if (isLoading) {
              return (<div>Loading...</div>)
            }
            else if (response != null) {
              return <div>{response.data.activity}
                <button onClick={() => makeRequest(
                  // console.log({params: {refresh : true}}),
                  // { params: {refresh : true} }
                  )}>Refresh</button></div>
            }
            else if (error) {
              return <div>Error</div>
            }
            else {
              return <div>
                Wait
              </div>
            }
          }
        }
      </Get>

    </div>
  }
}
function GetActivityReactAxios2() {
  return <div>
    <Get url="https://www.boredapi.com/api/activity" params ={{}}>
      {
        (error, response, isLoading, makeRequest, axios) => {
          if (error) {
            return <div>There was an error</div>
          }
          else if (isLoading) {
            return <div>Loading...</div>
          }
          else if (response != undefined) {
            console.log(response);
            return (<div>accessibility : {response.data.accessibility}
                    activity : {response.data.activity}
                    <br></br>
                    <button onClick={()=>{makeRequest()}}>Refresh</button>
                    
                    </div>
            
            )
          }
          else {
            return <div>Making Request..</div>
          }

        }
      }
    </Get>
  </div>
}

export default App;