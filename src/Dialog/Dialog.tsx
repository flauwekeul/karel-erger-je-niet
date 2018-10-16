import * as React from 'react'
import './Dialog.css'

export class Dialog extends React.PureComponent {
    render() {
        const { children } = this.props

        return (
            <div className="Dialog">
                {children}
            </div>
        )
    }
}
