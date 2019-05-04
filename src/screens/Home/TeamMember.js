import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withStylesProps } from '@kudoo/components';
import { TeamMemberStyles as styles } from './styles';

type Props = {
  avatar: string,
  name: string,
  title: string,
  description: string,
  // ...$Exact<withStylesFlowType>,
};

class TeamMember extends React.Component<Props, any> {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    ...withStylesProps,
  };

  render() {
    const { classes, avatar, name, title, description } = this.props;
    return (
      <div className={classes.component}>
        <div
          className={classes.avatarWrapper}
          style={{ backgroundImage: `url(${avatar})` }}
        />
        {name && <div className={classes.name}>{name}</div>}
        {title && <div className={classes.title}>{title}</div>}
        {description && (
          <div className={classes.description}>{description}</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(TeamMember);
