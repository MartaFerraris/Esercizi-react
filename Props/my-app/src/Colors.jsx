import { Color } from "./Color"

export function Colors({ colors }) {

    return (
        <div>
            <h2>List ul/li</h2>
            <ul>
                {colors?.map((color) => {
                    return <Color color={color} />
                })}
            </ul>
        </div>
    )
}