import React from 'react';
import withStyles from 'components/withStyles';
import { type withStylesFlowType, withStylesProps } from 'src/config/types';
import Header from '../Home/Header';
import Footer from 'components/Footer';
import TermsOfService from 'components/TermsOfService';
import styles from './styles';

type Props = {
  ...$Exact<withStylesFlowType>,
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
