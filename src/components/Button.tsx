import { Component } from 'react';

interface ButtonProps {
  onClick?: () => any;
  initializeClicked?: boolean;
}

interface ButtonState {
  alreadyCliked: boolean;
  timerId?: NodeJS.Timeout;
}

class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = { alreadyCliked: !!props.initializeClicked };
  }

  render() {
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

  componentDidMount() {
    const timerId = setInterval(() => {
      console.log('to rodando');
    }, 3000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    console.log('button será desmontado');
    if (this.state.timerId) clearInterval(this.state.timerId);
  }
}

export default Button;
