'use client'

import { Component, Children, cloneElement } from "react";

class Tabs extends Component {
    state = {
        activeIndex: 0
    }

    render() {
        const newChildren = Children.map(this.props.children, (child, index) => {
            if (child.type) {
                return cloneElement(child, {
                    active: this.state.activeIndex === index,
                    onClick: () => this.setState({ activeIndex: index })
                });
            } else {
                return child;
            }
        });

        return (
            <>
                {newChildren}
            </>
        );
    }
}

export default Tabs