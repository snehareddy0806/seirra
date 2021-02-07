import SelectionType from "./SelectionType";
export default function MarketList ({ marketItem, onToggleSelections }) {
    return (
        <>
            {marketItem.map((item) => {
                return (
                    <div key={item.id}>{item.name}
                        <SelectionType slectionType={item.selections} onToggleSelections={onToggleSelections}/>
                    </div>
                )
            })
            }
        </>
    )
}