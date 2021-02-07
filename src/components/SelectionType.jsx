export default function SelectionType ({slectionType, onToggleSelections}) {
    const handleSelections = (item) => {
        onToggleSelections(item)
    }
    return (
        <>
            {slectionType.map((item) => {
                return (
                    <div key={item.id}>
                        <button onClick={() => handleSelections(item)}><div>{item.name} </div>
                        <div>{item.price}</div> </button>
                    </div>
                )
            })
            }
        </>
    )
}