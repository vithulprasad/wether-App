import "./wether.css"

function wether({data}) {
  return (
    <div className="wether">
       <div className="top-part">
           <div className="first">
              <p className="heading-first">{data.city}</p>
              <p>{data.weather[0].description}</p>
           </div>
           <div className="second">
              <img width={90} height={90}  alt="images" src={`./${data.weather[0].icon}.png`}/>
           </div>
       </div>
       <div className="bottom-part">
            <div className="third">
                 {Math.round(data.main.temp)}°C
            </div>
            <div className="fourth">
                 <div className="content-left">
                     <p>Feels Like</p>
                     <p>Wind</p>
                     <p>Humidity</p>
                     <p>Pressure</p>
                 </div>
                 <div className="content-right">
                     <p className="property"> {Math.round(data.main.feels_like)}°C</p>
                     <p className="property">{data.wind.speed} m/s</p>
                     <p className="property">{data.main.humidity}%</p>
                     <p className="property">{data.main.pressure} hPa</p>
                 </div>
            </div>
       </div>
    </div>
  )
}

export default wether
