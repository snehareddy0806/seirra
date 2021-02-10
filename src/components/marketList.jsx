import SelectionType from "./SelectionType";
import { Divider, Typography } from '@material-ui/core';

export default function MarketList({ marketItem, onToggleSelections }) {
    return (
        <>
            {marketItem.map((item) => {
                return (
                    <div key={item.id}>
                        <Typography variant="subtitle1">
                            {item.name}
                        </Typography>
                        <Divider variant="middle" />
                        <SelectionType slectionType={item.selections} onToggleSelections={onToggleSelections} />
                    </div>
                )
            })
            }
        </>
    )
}