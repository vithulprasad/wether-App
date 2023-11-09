import React from 'react'
import './forcast.css'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from 'react-accessible-accordion'

const week_days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
function Forcast({data}) {
    const dayInWeek = new Date().getDay()
    const foreCastDays = week_days.slice(dayInWeek,week_days.length).concat(week_days.slice(0,dayInWeek))
  return (
    <>
      <label className='title'></label>
      <Accordion allowZeroExpanded>
          {data.list.splice(0,7).map((item,index)=>(
                <AccordionItem key ={index}>
                       <AccordionItemHeading>
                          <AccordionItemButton>
                            <div className='daily-item'>
                                 <img alt="weather" className='icon-small' src={`./${item.weather[0].icon}.png`}/>
                                 <label className='days'>{foreCastDays[index]}</label>
                                 <label className='description'>{item.weather[0].description}</label>
                                 <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
                            </div>
                          </AccordionItemButton>
                       </AccordionItemHeading>
                       <AccordionItemPanel>
                          <div className='daily-detail-grid'>
                              <div className='daily-detail-grid-item'>
                                 <label>Pressure: </label>
                                 <label>{item.main.pressure}Pas</label>
                              </div>
                              <div className='daily-detail-grid-item'>
                                 <label>Humidity: </label>
                                 <label>{item.main.humidity}</label>
                              </div>
                              <div className='daily-detail-grid-item'>
                                 <label>clouds: </label>
                                 <label>{item.clouds.all}%</label>
                              </div>
                              <div className='daily-detail-grid-item'>
                                 <label>WindSpeed: </label>
                                 <label>{item.wind.speed} m/s</label>
                              </div>
                              <div className='daily-detail-grid-item'>
                                 <label>sea level: </label>
                                 <label>{item.main.sea_level}m</label>
                              </div>
                              <div className='daily-detail-grid-item'>
                                 <label>feels like:</label>
                                 <label>{item.main.feels_like}°C </label>
                              </div>
                          </div>
                       </AccordionItemPanel>
                </AccordionItem>
           
          ))}
      
      </Accordion>
    </>
  )
}

export default Forcast
