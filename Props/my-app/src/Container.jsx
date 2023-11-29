import { useState } from "react"

export function Container({ title, children }) {

    const [collapsed, setCollapsed] = useState(false)

    function handleCollapse() {
        setCollapsed((click) => !click)
    }

    return (
        <div className="container">
            <div className="app-title">{title}<button onClick={handleCollapse}>Reduce</button></div>
            {collapsed && <div className="app-content">{children}</div>}
            {/* <div className={!collapsed ? 'app-content' : 'app-content-hidden'}>{children}</div> */}
        </div>
    )
}