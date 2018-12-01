import React from 'react';
import {
  withStyles,
  Footer,
  TermsOfService,
  withStylesProps,
} from '@kudoo/components';
import Header from '../Home/Header';
import styles from './styles';

type Props = {
  // ...$Exact<withStylesFlowType>,
};

class TermsOfServicePage extends React.Component<Props, any> {
  static propTypes = {
    ...withStylesProps,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Header showLinks={false} />
        <div className={classes.content}>
          <div className={classes.title}>Terms Of Service</div>
          <TermsOfService />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(TermsOfServicePage);
