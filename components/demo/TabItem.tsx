'use client'

import type { ReactNode } from "react"

interface Props {
    active?: boolean
    children?: ReactNode
    onClick?: () => void
}

const TabItem = ({ active, onClick, children }: Props) => {
    const tabStyle = {
        'max-width': '150px',
        color: active ? 'red' : 'green',
        border: active ? '1px red solid' : '0px',
    };

    return (
        <h1 style={tabStyle} onClick={onClick}>
            {children}
        </h1>
    );
}

export default TabItem