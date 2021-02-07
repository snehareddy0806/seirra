import './App.css';
import {getEventList} from "./services/getEventsList";
import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import MarketList from "./components/marketList";


function App() {
    const [eventsList, setEventsList] = useState([])
    useEffect(() => {
        console.log('after first render')
        getEventList().then(eventRes => {
                setEventsList(eventRes)
    })
    }, []) // get data only on page loads
  return (
      eventsList.length > 0
              ? eventsList.map((listItem) => {
                      return (
                          listItem.hasOwnProperty('markets') && listItem.markets.length > 0 &&
                              <div key={listItem.id}> {listItem.name}
                                  <MarketList marketItem={listItem.markets}>
                                  </MarketList>
                              </div>
                      )
                  }
              )
              : <div> loading </div>
  )
};

export default App;
