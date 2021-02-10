import { Chip } from "@material-ui/core";

export default function SelectionChip({ slectionType, onToggleSelections }) {

    return (
        <>
            {slectionType.map((item) => {
                return (
                    <Chip
                        label={`${item.name} | ${item.price}`}
                        color={item.flag ? "primary" : "default"}
                        style={{
                            margin: 5
                        }}
                        onClick={() => onToggleSelections(item)}
                    />
                )
            })
            }
        </>
    )
}