import "./ForecastCard.css";
const ForecastCard = ({ forecastData, renderForecastData}) => {
    const renderCardData = 
        forecastData[Object.keys(forecastData)[renderForecastData]];
    return (
        <div className="card-wrapper">
            {renderCardData &&
                Object.keys(renderCardData).map(key => (
                  <div className="card-container">
                    <p>{key}:00</p>
                    <p className="temp">
                      {Math.round(renderCardData[key].temp - 273.15, 2)}°C
                    </p>
                    <img
                      src={`http://openweathermap.org/img/wn/${renderCardData[key].icon}@2x.png`}
                      alt="weather icon"
                    />
                  </div>
                ))}
            </div>
          );
        };
        
export default ForecastCard;
