import React, { useState, useEffect } from 'react'
import Notification from './Notification'


const AccountBal = ( {acct } ) => {
          const [bal, setBal] = useState()
          const [savBal, setSavBal] = useState()


          useEffect(() => {
                    setBal(acct.bal)

                    setSavBal(acct.savingBal)
          }, [acct.bal, acct.savingBal])


          const handleSavings = () => {
                    if(bal > 1000) {
                              setBal(bal - 100)

                              setSavBal(savBal + 100)
                    }
          }


          const handleSpendings = () => {
                    if (savBal > 30) {
                              setBal(bal + 100)
          
                              setSavBal(savBal - 100)
                    }
          }


          return (
                    <div className="columns">
                              <div className="column">
                                        <div className="box">
                                                  <h4 className="title is-4">Your account balance:</h4>

                                                  <div className="df-box">
                                                            <div className="amount balance">${bal}</div>

                                                            <button 
                                                                      id="balance" 
                                                                      className="button"

                                                                      onClick={() => handleSavings()}
                                                            >
                                                                      Send $100
                                                            </button>

                                                  </div>
                                        </div>
                              </div>

                              <div className="column">
                                        <div className="box">
                                                  <h4 className="title is-4">Your savings balance:</h4>

                                                  <div className="df-box">
                                                            <div className="amount savings">${savBal}</div>

                                                            <button 
                                                                      id="balance" 
                                                                      className="button"

                                                                      onClick={() => handleSpendings()}
                                                            >
                                                                      Send $100
                                                            </button>

                                                  </div>
                                        </div>
                              </div>

                              <Notification bal={bal} />

                    </div>
          )
}

export default AccountBal
