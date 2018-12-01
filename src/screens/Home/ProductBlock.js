import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withStylesProps } from '@kudoo/components';
import { ProductBlockStyles as styles } from './styles';

type Props = {
  icon: any,
  title: any,
  description: any,
  // ...$Exact<withStylesFlowType>,
};

class ProductBlock extends React.Component<Props, any> {
  static propTypes = {
    icon: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    ...withStylesProps,
  };

  render() {
    const { classes, icon, title, description } = this.props;
    return (
      <div className={classes.component}>
        {icon && <div className={classes.icon}>{icon}</div>}
        {title && <h2 className={classes.title}>{title}</h2>}
        {description && (
          <div className={classes.description}>{description}</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ProductBlock);
