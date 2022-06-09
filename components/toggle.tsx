import React from 'react'

interface State {
  isToggleOn: boolean
}

export default class Toggle extends React.Component<{}, State> {
  state: State = {
    isToggleOn: false
  }

  render() {
    const currentState: string = this.state.isToggleOn ? 'ON': 'OFF'
    return (
      <div>
        <p>{currentState}</p>
        <button>Toggle</button>
      </div>
    )
  }
}