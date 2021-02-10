import { getEventList } from "./services/getEventsList";
import { useEffect, useState } from "react";
import PersistentDrawer from './components/PersistentDrawer'
import { makeStyles } from '@material-ui/core/styles';
import { mockresponse } from './input'
import EventsList from "./components/EventsList";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    item: {
        textAlign: 'center',
    },
    paper: {
        height: '100%'
    },
    load: {
        display: 'flex',
        margin: 'auto',
    }
})
)
function App() {
    const [eventsList, setEventsList] = useState([])
    const [selectedList, setSelectedList] = useState([])
    const [isFallBackHeader, setFallBackHeader] = useState(false)
    const [isFallBackUI, setFallBackUI] = useState(false) //TODO FAllBack ui screen

    useEffect(() => {
        // the service was blocked when served so hosting a mock repsonse 
        getEventList().then(eventRes => {
            setEventsList(eventRes)
        }).catch((err) => {
            if (err.status === 403) {
                setFallBackHeader(true) //for hosting purposes only
                setEventsList(mockresponse)
            } else {
                setFallBackUI(true)
            }
        })
    }, []) // get data only on page loads


    const toggleSelections = (item) => {
        if (selectedList.includes(item)) {
            item.flag = false
            setSelectedList(selectedList.filter(listItem => listItem.id !== item.id))
        } else {
            item.flag = true
            setSelectedList([...selectedList, item])
        }
    }
    return (
        isFallBackUI ? <div>Sorry the website is down. Please contact us at 999999999</div>
            : <>
                <PersistentDrawer selectedList={selectedList} onToggleSelections={toggleSelections} isFallBackHeader={isFallBackHeader} />
                <EventsList events={eventsList} onToggleSelections={toggleSelections} />
            </>
    )
};

export default App;
