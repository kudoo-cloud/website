import React from 'react';
import { withStyles, withStylesProps } from '@kudoo/components';
import { GradientStyles as styles } from './styles';

type Props = {
  // ...$Exact<withStylesFlowType>,
};

class Gradient extends React.Component<Props, any> {
  static propTypes = {
    ...withStylesProps,
  };

  render() {
    const { classes, children, theme, ...rest } = this.props; //eslint-disable-line
    return (
      <div className={classes.component} {...rest}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Gradient);
