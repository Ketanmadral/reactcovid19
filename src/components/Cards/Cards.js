import React from 'react';
import styles from "./Cards.module.css";
import cx from "classnames";
import CountUp from 'react-countup';


function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {

    if (!confirmed) {
        return "Loading...";
    }

    console.log(recovered)
    return (
        <>
        <div className='container '>
           <div className='row my-4 d-flex justify-content-center'>
               <div className='col-md-3'>
               
               <div className={cx(styles.card, styles.infected)}>
                   <div className='card-body'>
                        <p className='text-secondary'>Infected</p>
                        <p className='h4'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                seperator=","
                            />
                        </p>
                        <p className='text-secondary h4'>{new Date(lastUpdate).toDateString()}</p>
                        <p className='small'>Number of active cases of covid-19</p>
                    </div>
                </div>
               </div>
               <div className='col-md-3 '> 
               <div className={cx(styles.card, styles.recovered)}>
                    <div className='card-body'>
                        <p className='text-secondary'>Recovered</p>
                        <p className='h4'>
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                seperator=","
                            />
                        </p>
                        <p className='text-secondary h4'>{new Date(lastUpdate).toDateString()}</p>
                        <p className='small'>Number of Recoveries from covid-19</p>
                    </div>
                </div>
               </div>
               <div className='col-md-3'> 
               <div className={cx(styles.card, styles.deaths)}>
                    <div className='card-body'>
                        <p className='text-secondary'>Deaths</p>
                        <p className='h4'>
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                seperator=","
                            />
                        </p>
                        <p className='text-secondary h4'>{new Date(lastUpdate).toDateString()}</p>
                        <p className='small'>Number of deaths caused by covid-19</p>
                    </div>
                </div>
               </div>

           </div>

           </div>
       </>

    )
}

export default Cards