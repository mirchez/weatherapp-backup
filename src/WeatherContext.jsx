import  React,{ useReducer, useCallback, useContext } from 'react'

const WeatherStateContext = React.createContext()

const WeatherDispatchContext = React.createContext() 

const initialValue = {
    allWeather:{},
    allChartData:{}, 
    allForecastItemList:{}
}

const WeatherContext = ({children}) =>{
    
    const reducer = useCallback((state, action) => {
        switch(action.type) {
            case 'SET_ALL_WEATHER':
                const weatherCity = action.payload;
                const newAllWeather = { ...state.allWeather, ...weatherCity };
                return { ...state, allWeather: newAllWeather };
    
            case 'SET_CHART_DATA':
                const chartDataCity = action.payload;
                const newChartDataCity = { ...state.chartDataCity, ...chartDataCity };
                return { ...state, chartDataCity: newChartDataCity }; // Propiedad consistente
    
            case 'SET_FORECAST_ITEM_LIST':
                const forecastItemListCity = action.payload;
                const newAllForecastItemListCity = { ...state.allForecastItemListCity, ...forecastItemListCity };
                return { ...state, allForecastItemListCity: newAllForecastItemListCity }; // Propiedad corregida
    
            default: 
                return state;
        } 
    }, []);
    

    const [state, dispatch] = useReducer(reducer, initialValue)
    return(
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

const useWeatherDispatchContext = () =>{
    const dispatch = useContext(WeatherDispatchContext)

    if(!dispatch){
        throw new Error("Must set dispatch provider")
    }

    return dispatch
}
const useWeatherStateContext = () =>{
    const state = useContext(WeatherStateContext)

    if(!state){
        throw new Error("Must set state provider")
    }

    return state
}

export {
    WeatherContext,
    useWeatherDispatchContext,
    useWeatherStateContext
}

