import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withStylesProps } from '@kudoo/components';
import Gradient from './Gradient';
import { FeatureBlockStyles as styles } from './styles';

type Props = {
  icon: any,
  title: any,
  description: any,
  iconPosition: string,
  // ...$Exact<withStylesFlowType>,
};

class FeatureBlock extends React.Component<Props, any> {
  static propTypes = {
    icon: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    iconPosition: PropTypes.string,
    onClick: PropTypes.func,
    ...withStylesProps,
  };

  static defaultProps = {
    iconPosition: 'left',
  };

  _renderIcon() {
    const { classes, icon } = this.props;
    return (
      <Gradient classes={{ component: classes.iconWrapper }}>
        <div className={classes.icon}>{icon}</div>
      </Gradient>
    );
  }

  render() {
    const { classes, title, description, iconPosition, onClick } = this.props;
    return (
      <div className={classes.component} onClick={onClick}>
        {iconPosition === 'left' && this._renderIcon()}
        <div className={classes.infoWrapper}>
          {title && <h2 className={classes.title}>{title}</h2>}
          {description && (
            <div className={classes.description}>{description}</div>
          )}
        </div>
        {iconPosition === 'right' && this._renderIcon()}
      </div>
    );
  }
}

export default withStyles(styles)(FeatureBlock);
