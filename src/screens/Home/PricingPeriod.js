import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles, withStylesProps } from '@kudoo/components';
import ButtonBase from '@material-ui/core/ButtonBase';
import Gradient from './Gradient';
import { PricingPeriodStyles as styles } from './styles';

type Props = {
  onChange: Function,
  // ...$Exact<withStylesFlowType>,
};

export const PricingPeriodType = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
};

class PricingPeriod extends React.Component<Props, any> {
  static propTypes = {
    onChange: PropTypes.func,
    ...withStylesProps,
  };

  state = {
    selected: PricingPeriodType.MONTHLY,
  };

  componentDidMount() {
    if (this.props.onChange) {
      this.props.onChange(this.state.selected);
    }
  }

  _onChange = type => e => {
    this.setState({
      selected: type,
    });
    if (this.props.onChange) {
      this.props.onChange(type);
    }
  };

  _renderItem = (label, value) => {
    const { classes } = this.props;
    const { selected } = this.state;
    const isSelected = selected === value;
    return (
      <ButtonBase
        classes={{
          root: isSelected
            ? cx(classes.selectedItem, classes.item)
            : classes.item,
        }}
        onClick={this._onChange(value)}>
        {label}
      </ButtonBase>
    );
  };

  render() {
    const { classes } = this.props;
    const { selected } = this.state;
    return (
      <div className={classes.component}>
        {this._renderItem('Monthly', PricingPeriodType.MONTHLY)}
        {this._renderItem('Yearly', PricingPeriodType.YEARLY)}
        <Gradient
          classes={{ component: classes.bgPlaceholder }}
          style={{
            left: selected === PricingPeriodType.MONTHLY ? 10 : 160,
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PricingPeriod);
