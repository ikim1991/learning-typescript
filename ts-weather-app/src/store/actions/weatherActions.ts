import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_ERROR, SET_LOADING } from '../types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => async (dispatch: Dispatch) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
        
        if(!res.ok){
            const resData: WeatherError = await res.json();
            throw new Error(resData.message);
        }

        const resData: WeatherData = await await res.json();
        dispatch({
            type: GET_WEATHER,
            payload: resData
        })
    } catch(e){
        dispatch({
            type: SET_ERROR,
            payload: e.message
        })
    }
}

export const setLoading = (): WeatherAction => {
    return{
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return{
        type: SET_ERROR,
        payload: ''
    }
}