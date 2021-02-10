import './App.css';
import { getEventList } from "./services/getEventsList";
import { useEffect, useState } from "react";
import MarketList from "./components/marketList";
import PersistentDrawer from './components/PersistentDrawer'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { mockresponse } from './input'

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
    }
})
)
function App() {
    const [eventsList, setEventsList] = useState([])
    const [selectedList, setSelectedList] = useState([])
    const classes = useStyles()

    useEffect(() => {
        setEventsList(mockresponse)
        //the service was blocked when served so hosting a mock repsonse 
        // getEventList().then(eventRes => {
        //     setEventsList(eventRes)
        // })
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
        <>
            <PersistentDrawer selectedList={selectedList} onToggleSelections={toggleSelections} />
            <Grid container spacing={2} className={classes.grid}>
                {eventsList.length > 0
                    ? eventsList.map((listItem) => {
                        return (
                            listItem.hasOwnProperty('markets') && listItem.markets.length > 0 &&
                            <Grid item key={listItem.id} className={classes.item} lg={6} md={6} xs={12}>
                                <Paper className={classes.paper}>{listItem.name}
                                    <hr />
                                    <MarketList marketItem={listItem.markets} onToggleSelections={toggleSelections}>
                                    </MarketList>
                                </Paper>
                            </Grid>
                        )
                    }
                    )
                    : <div> loading </div>}
            </Grid>
        </>
    )
};

export default App;
