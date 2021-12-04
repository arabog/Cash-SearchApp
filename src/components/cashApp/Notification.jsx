import React, { useEffect, useState } from 'react'


const Notification = ( { bal } ) => {
          const [notification, setNotification] = useState(false)


          useEffect(()=> {
                    if(bal <= 1000) {
                              setNotification(true)
                    }
          }, [bal])


          return (
                    <div
                              className= {
                                        `notification 
                                        
                                        ${notification ? 'visible' : 'hidden'}`
                              }
                    >
                              <button onClick={() => setNotification(false)} className="delete"></button>

                              <p>Your account balance is very low.</p>

                              <p>You can't transfer more money today.</p>
                    </div>
          )
}

export default Notification
