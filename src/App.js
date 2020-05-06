import React, { Component } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { Body } from "./components/Body/body";
import './App.css';
import {MainWeatherCard} from "./components/mainWeatherCard/mainWeatherCard";
import {LeftCard} from "./components/leftCard/leftCard";
import OneDayWeather from "./components/OneDayWeather/OneDayWeather";
import MainInfo from "./components/mainInfo/MainInfo";
import Header from "./components/header/Header";
import Loader from "./components/Loader/Loader";
import {AddLocation} from "./components/AddLocation/AddLocation";
import {OtherCity} from "./components/OtherCity/OtherCity";
import {DarkMode, DarkModeWrapper} from "./components/DarkModeWrapper/DarkModeWrapper";
import {Button} from "./components/Button/Button";

const API ='e0e763316f96e5d778ab8ecf7c95b8f2';

class App extends Component {
  static contextType = DarkMode;

  state={
    defLat: 51.51,
    defLon: -0.13,
    weather:[],
    country:null,
    temp:null,
    img:[],
    cord:[],
    weatherWeek:[],
    isActive:null,
    oneDay:[],
    oneDayTemp:[],
    oneDayFeels:[],
    isLoaded:false,
    input:null,
    mistake:false,
    locations:[],
    otherCity:[]
  };

  getWeather = async() => {
    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.defLat}&lon=${this.state.defLon}&appid=${API}&units=metric&lang=uk`);
    const data = await fetchData.json();
    this.setState({
      weather: data,
      country: data.sys.country,
      temp: data.main.temp,
      img: data.weather[0],
      cord: data.coord,

    });
    const fetchData2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.cord.lat}&lon=${this.state.cord.lon}&appid=${API}&units=metric&lang=uk`);
    const data2 = await fetchData2.json();
    this.setState({
      weatherWeek: data2.daily,
      isActive: data2.daily[0].dt,
      oneDay: data2.daily[0],
      oneDayTemp: data2.daily[0].temp,
      oneDayFeels: data2.daily[0].feels_like,
      isLoaded: true

    });
  };


  changeDay = (day) =>{
    this.setState({isActive:day.dt, oneDay:day, oneDayTemp:day.temp, oneDayFeels:day.feels_like} )
  };

  changeCity= async (city)=>{
    await this.setState({defLat: city.coord.lat, defLon: city.coord.lon, isLoaded: false});
    await this.getWeather();

  };

  search = async (e)=>{
    e.preventDefault();
    const input = e.target.elements.input.value;
    await this.setState({input: input, mistake:false});
    this.fetchSearch();
  };

  addi = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const loc = [...this.state.locations];
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric&lang=ua`);
    const otherData = await resp.json();
    if (otherData.cod === 200) {
      const positions = [...this.state.otherCity];
      positions.push(otherData);
      loc.push(otherData.name);
      localStorage.setItem('Cities', JSON.stringify(loc));
      this.setState({otherCity: positions, locations: loc});

    }
  };

  delete=(city)=>{

    const list = this.state.otherCity;
    const filtered = list.filter((fil)=>{
      return fil!==city
    });
    const list2 = JSON.parse(localStorage.getItem('Cities'));
    const filtList2 = list2.filter((el)=>(el!==city.name));
    console.log(filtList2);
    localStorage.setItem('Cities', JSON.stringify(filtList2));
    this.setState({otherCity:filtered});
  };

  fetchInCycle=async()=>{
    if(this.state.locations) {
      for (const city of this.state.locations) {
        const fetchDataCycle = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric&lang=ua`);
        const dataCycle = await fetchDataCycle.json();
        const add = [...this.state.otherCity];
        await add.push(dataCycle);
        this.setState({otherCity: add})
        console.log(this.state.otherCity);

      }
    }
  };

  fetchSearch=async()=>{
    try{
      const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=${API}&units=metric&lang=ua`);
      const data = await fetchData.json();
      this.setState({
        weather: data,
        country: data.sys.country,
        temp: data.main.temp,
        img: data.weather[0],
        cord: data.coord
      });
      console.log(this.state.cord);
      const fetchData2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.cord.lat}&lon=${this.state.cord.lon}&appid=${API}&units=metric&lang=uk`);
      const data2 = await fetchData2.json();
      this.setState({
        weatherWeek: data2.daily,
        isActive: data2.daily[0].dt,
        oneDay: data2.daily[0],
        oneDayTemp: data2.daily[0].temp,
        oneDayFeels: data2.daily[0].feels_like
      });

    }
    catch (e) {
      console.log(e);
      this.setState({mistake:true});
      alert('Error in city name')
    }

  };

  success =async(poss)=>{
    await this.setState({defLat:poss.coords.latitude, defLon:poss.coords.longitude})
    await this.getWeather()
  };

  errorFunc=(err)=>{
    console.log(err)
  };

  componentWillMount() {
    const val = (JSON.parse(localStorage.getItem('Cities')));
    console.log(val);
    if (val) {
      this.setState({locations: val});
    }
  }

  componentDidMount(){
    this.getWeather();
    navigator.geolocation.getCurrentPosition(this.success,this.errorFunc);
    this.fetchInCycle();

  }


  render() {
    const {darkMode , changeTheme}=this.context;

    return (

      <div className={darkMode?'darkApp App':'App'}>
        {this.state.isLoaded ?
          <Body>
            <Button onclick={changeTheme} darkMode={darkMode}/>
            <Header search={this.search} mistake={this.state.mistake}/>
            <LeftCard temp={this.state.temp} img={this.state.img}/>
            <MainWeatherCard weather={this.state.weather} country={this.state.country}/>
            <div className='mainB'>
              <div className='mainBLeft'>
                <h1 className={darkMode?'textDark leftText':'leftText'}>7 Days <span>Forecast</span></h1>
                {
                  this.state.weatherWeek.map((day, index) => {
                    return (
                      <OneDayWeather day={day} key={index} index={index} onclick={() => (
                        this.changeDay(day))} isActive={this.state.isActive}/>
                    )
                  })
                }
              </div>
              <div className='mainBCenter'>
                <h1 className={darkMode?'textDark leftText':'leftText'}>Current <span>Forecast</span></h1>
                {this.state.isLoaded ? <MainInfo oneDay={this.state.oneDay} oneDayTemp={this.state.oneDayTemp}
                                                 oneDayFeels={this.state.oneDayFeels}/> : ''}
              </div>
              <div className='mainBRight'>
                <AddLocation addi={this.addi}>
                  <TransitionGroup>

                  {this.state.otherCity.map((city) => {
                    return (
                      <CSSTransition
                        key={city.coord.lat}
                        timeout={500}
                        classNames="item"
                      >
                      <OtherCity city={city}  changeCity={()=>(this.changeCity(city))} delete={() =>(
                        this.delete(city))}/>
                      </CSSTransition>
                    )
                  })}
                  </TransitionGroup>
                </AddLocation>
              </div>
            </div>
          </Body>
          : <Loader/>}
      </div>
    )
      ;
  }

}

export default App;
