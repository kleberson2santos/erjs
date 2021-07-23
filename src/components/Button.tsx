import { Component } from 'react';

interface ButtonProps {
  onClick?: () => any;
  initializeClicked?: boolean;
}

interface ButtonState {
  alreadyCliked: boolean;
}

class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = { alreadyCliked: !!props.initializeClicked };
  }

  render() {
    console.log(this.state);
    return (
      <button
        onClick={() => {
          this.setState({ alreadyCliked: true });
          this.props.onClick?.call([]);
        }}
        disabled={this.state.alreadyCliked}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;