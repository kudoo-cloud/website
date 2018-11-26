import * as React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';
import { type withStylesFlowType, withStylesProps } from 'src/config/types';
import Gradient from './Gradient';
import { PricingBlockStyles as styles } from './styles';

type Props = {
  title: string,
  price: string,
  user: string,
  includedList: Array<string>,
  ...$Exact<withStylesFlowType>,
};

class PricingBlock extends React.Component<Props, any> {
  static propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    user: PropTypes.string,
    includedList: PropTypes.array,
    ...withStylesProps,
  };

  render() {
    const { classes, title, price, user, includedList } = this.props;
    return (
      <div className={classes.component}>
        <div className={classes.infoWrapper}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.price}>{price}</div>
        </div>
        <Gradient classes={{ component: classes.user }}>{user}</Gradient>
        <div className={classes.list}>
          {includedList.map((item, index) => (
            <div className={classes.listItem} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PricingBlock);
