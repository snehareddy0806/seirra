import Button from "@material-ui/core/Button";
export default function SelectionType({ slectionType, onToggleSelections }) {
    const handleSelections = (item) => {
        onToggleSelections(item)
    }
    return (
        <>
            {slectionType.map((item) => {
                return (
                    <div key={item.id}>
                        <Button
                            onClick={() => handleSelections(item)}
                            color={item.flag ? "primary" : "default"}
                            variant="contained">
                            {item.name}
                            {item.price}
                        </Button>
                    </div>
                )
            })
            }
        </>
    )
}