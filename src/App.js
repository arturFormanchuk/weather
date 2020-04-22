import React, { Component } from 'react';

import { Body } from "./components/Body/body";
import './App.css';
import {MainWeatherCard} from "./components/mainWeatherCard/mainWeatherCard";
import {LeftCard} from "./components/leftCard/leftCard";
import OneDayWeather from "./components/OneDayWeather/OneDayWeather";
import MainInfo from "./components/mainInfo/MainInfo";
import Header from "./components/header/Header";
import Loader from "./components/Loader/Loader";

const API ='e10d08488ef3e82b39e00383eb12b2f7';

class App extends Component {

  state={
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
    mistake:false
  };

  getWeather = async() => {
    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${API}&units=metric`);
    const data = await fetchData.json();
    console.log(data);
    this.setState({
      weather: data,
      country: data.sys.country,
      temp: data.main.temp,
      img: data.weather[0],
      cord: data.coord
    });
    const fetchData2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.cord.lat}&lon=${this.state.cord.lon}&appid=${API}&units=metric`);
    const data2 = await fetchData2.json();
    this.setState({
      weatherWeek: data2.daily,
      isActive: data2.daily[0].dt,
      oneDay: data2.daily[0],
      oneDayTemp: data2.daily[0].temp,
      oneDayFeels: data2.daily[0].feels_like,
      isLoaded: !this.state.isLoaded
    });
    console.log(data2.daily[0]);
    const date = new Date(this.state.weatherWeek[0].dt);
    console.log(this.state.oneDay);
  };

  changeDay = (day) =>{
    this.setState({isActive:day.dt, oneDay:day, oneDayTemp:day.temp, oneDayFeels:day.feels_like} )
  };

  search = async (e)=>{
    e.preventDefault();
    const input = e.target.elements.input.value;
    console.log(input);
    await this.setState({input: input, mistake:false});
    this.fetchSearch();
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
      const fetchData2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.cord.lat}&lon=${this.state.cord.lon}&appid=${API}&units=metric`);
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

  componentDidMount(){
    this.getWeather();


  }

  render() {
    return (

      <div className="App">
        {this.state.isLoaded?
        <Body >
          {/*{this.state.isLoaded?'':<Loader/>}*/}
          <Header search={this.search} mistake={this.state.mistake}/>
          <LeftCard temp={this.state.temp} img={this.state.img}/>
          <MainWeatherCard weather={this.state.weather} country={this.state.country} />
          <div className='mainB'>
            <div className='mainBLeft'>
              <h1 className='leftText'>7 Days <span>Forecast</span></h1>
              {
                this.state.weatherWeek.map((day,index)=>{
                  return(
                    <OneDayWeather day={day} index={index} onclick={()=>(this.changeDay(day))} isActive={this.state.isActive}/>
                  )
                })
              }
            </div>
            <div className='mainBCenter'>
              <h1 className='leftText'>Current <span>Forecast</span></h1>
              {this.state.isLoaded? <MainInfo oneDay={this.state.oneDay} oneDayTemp={this.state.oneDayTemp}
                                             oneDayFeels={this.state.oneDayFeels}/> : ''}
            </div>
            <div></div>
          </div>


        </Body>
          :<Loader/>}
      </div>
    )
      ;
  }

}

export default App;
