import './App.css';
import {getEventList} from "./services/getEventsList";
import {useEffect, useState} from "react";
import MarketList from "./components/marketList";
import PersistentDrawer from './components/PersistentDrawer'


function App() {
    const [eventsList, setEventsList] = useState([])
    const [selectedList, setSelectedList] = useState([])

    useEffect(() => {
        getEventList().then(eventRes => {
            setEventsList(eventRes)
        })
    }, []) // get data only on page loads


    const toggleSelections = (item) => {
        setSelectedList([...selectedList, item])
    }
    return (
        <>
        <PersistentDrawer selectedList={selectedList}/>
        {eventsList.length > 0
            ? eventsList.map((listItem) => {
                return (
                    listItem.hasOwnProperty('markets') && listItem.markets.length > 0 &&
                    <div key={listItem.id}> {listItem.name}
                        <MarketList marketItem={listItem.markets} onToggleSelections={toggleSelections}>
                        </MarketList>
                    </div>
                )
            }
            )
            : <div> loading </div>}
        </>
    )
};

export default App;
