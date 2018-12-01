import React from 'react';
import { withStyles, Footer, withStylesProps } from '@kudoo/components';
import Header from '../Home/Header';
import PrivacyHTML from './privacy.md';
import styles from './styles';

type Props = {
  // ...$Exact<withStylesFlowType>,
};

class PrivacyPolicy extends React.Component<Props, any> {
  static propTypes = {
    ...withStylesProps,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Header showLinks={false} />
        <div className={classes.content}>
          <div className={classes.title}>Privacy Policy</div>
          <div dangerouslySetInnerHTML={{ __html: PrivacyHTML }} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(PrivacyPolicy);
