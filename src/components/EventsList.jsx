import { Grid, Paper, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MarketList from './marketList';

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
export default function EventsList({ events, onToggleSelections }) {
    const classes = useStyles();
    return (< Grid container spacing={2} className={classes.grid} >
        {events.length > 0
            ? events.map((listItem) => {
                return (
                    listItem.hasOwnProperty('markets') && listItem.markets.length > 0 &&
                    <Grid item key={listItem.id} className={classes.item} lg={6} md={6} xs={12}>
                        <Paper className={classes.paper}>{listItem.name}
                            <hr />
                            <MarketList marketItem={listItem.markets} onToggleSelections={onToggleSelections}>
                            </MarketList>
                        </Paper>
                    </Grid>
                )
            }
            )
            : <div className={classes.load}>
                <CircularProgress />
            </div>
        }
    </Grid >
    )
}