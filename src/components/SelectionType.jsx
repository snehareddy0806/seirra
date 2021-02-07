export default function SelectionType ({slectionType}) {
    return (
        <>
            {slectionType.map((item) => {
                return (
                    <div key={item.id}>
                        <div>{item.name} </div>
                        <div>{item.price}</div>
                    </div>
                )
            })
            }
        </>
    )
}