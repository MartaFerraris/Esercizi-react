import { Color } from "./Color"

export function Colors({ colors }) {
    
    return (
        <div>
            <ul>{colors.map((color) => {
                <Color color={color}/>
            })}
            </ul>
        </div>
    )
}