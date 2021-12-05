import React, {useState} from 'react'
import "./SearchBar.css"

import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"


const SearchBar = ( { placeholder, data } ) => {
          const [filteredData, setFilteredData] = useState([])
          const [wordEntered, setWordEntered] = useState("")

          
          const handleFilter = (event) => {
                    const searchWord = event.target.value;

                    setWordEntered(searchWord)


                    const newFilter = data.filter(word => {
                              return word.title.toLowerCase().includes(searchWord.toLowerCase())
                    })


                    if(searchWord !== "") {
                              setFilteredData(newFilter)
                    }else {
                              setFilteredData([])
                    }
          }


          const clearInput = () => {
                    setFilteredData([]);

                    setWordEntered("")
          }


          return (
                    <div className="search">
                              <div className="searchInputs">
                                        <input 
                                                  type="text" 
                                                  placeholder= {placeholder}
                                                  value={wordEntered}
                                                  onChange={handleFilter}
                                        />

                                        <div className="searchicon">
                                                  {
                                                            filteredData.length === 0
                                                                      ? (
                                                                                <SearchIcon />
                                                                      ) : (
                                                                                <CloseIcon id="clearBtn" onClick={clearInput} />
                                                                      )
                                                  }
                                        </div>
                              </div>

                              {
                                        filteredData.length !== 0 && (
                                                  <div className="dataResult">
                                                            {
                                                                      filteredData
                                                                                .slice(0, 15)
                                                                                .map( (value, key) => {
                                                                                          return (
                                                                                                    <a 
                                                                                                              href={value.link}

                                                                                                              className="dataItem"

                                                                                                              target="_blank"

                                                                                                              rel="noreferrer"
                                                                                                    >
                                                                                                              <p>{value.title} </p>                    
                                                                                                    </a>
                                                                                          )
                                                                                })
                                                            }
                                                  </div>
                                        )
                              }
                    </div>
          )
}


export default SearchBar
