import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';
import { type withStylesFlowType, withStylesProps } from 'src/config/types';
import { TabletStyles as styles } from './styles';

type Props = {
  width: number,
  height: number,
  space: number,
  screenSrc: string,
  ...$Exact<withStylesFlowType>,
};

class Tablet extends React.Component<Props, any> {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    space: PropTypes.number,
    screenSrc: PropTypes.string,
    ...withStylesProps,
  };

  render() {
    const { classes, screenSrc } = this.props;
    return (
      <div className={classes.component}>
        <div className={classes.outerSquare}>
          <div className={classes.innerSquare}>
            <img
              src={screenSrc}
              style={{ height: '100%', width: '100%' }}
              alt="Tablet"
            />
          </div>
        </div>
        <div className={classes.homeButton} />
      </div>
    );
  }
}

export default withStyles(styles)(Tablet);
