import SelectionType from "./SelectionType";
export default function MarketList ({ marketItem }) {
    return (
        <>
            {marketItem.map((item) => {
                return (
                    <div key={item.id}>{item.name}
                        <SelectionType slectionType={item.selections}/>
                    </div>
                )
            })
            }
        </>
    )
}