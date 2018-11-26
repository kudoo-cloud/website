import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from 'components/withStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { type withStylesFlowType, withStylesProps } from 'src/config/types';
import Gradient from './Gradient';
import { toast } from 'react-toastify';
import { NewsLetterStyles as styles } from './styles';

type Props = {
  ...$Exact<withStylesFlowType>,
};

type State = {
  showForm: boolean,
};

class NewsLetter extends React.Component<Props, State> {
  static propTypes = {
    ...withStylesProps,
  };

  state = {
    showForm: false,
  };

  _toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };

  _submitForm = async (values, actions) => {
    try {
      await fetch(
        'https://hooks.slack.com/services/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',
        {
          method: 'POST',
          body: JSON.stringify({
            text: 'Subscription',
            attachments: [
              {
                title: `${values.email}`,
              },
            ],
          }),
        }
      );
      this._form.resetForm({});
      actions.setSubmitting(false);
      toast.success('Subscribed Successfully');
      this._toggleForm();
    } catch (error) {
      toast.error(error.toString());
    }
  };

  _renderInput() {
    const { classes } = this.props;
    return (
      <Formik
        ref={ref => (this._form = ref)}
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email(),
        })}
        onSubmit={this._submitForm}>
        {formProps => (
          <form
            className={classes.formWrapper}
            onSubmit={formProps.handleSubmit}>
            <TextField
              classes={{
                component: classes.textInput,
                textInputWrapper: classes.textInputWrapper,
              }}
              placeholder={'Email'}
              showClearIcon={false}
              name="email"
              id="email"
              value={formProps.values.email}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              error={formProps.touched.email && formProps.errors.email}
              showErrorMessage={false}
            />
            <Button
              classes={{
                component: classes.submitButton,
                afterIcon: classes.submitAfterIcon,
              }}
              width={50}
              type="submit"
              title={
                formProps.isSubmitting ? '' : <i className="fa fa-check" />
              }
              loading={formProps.isSubmitting}
            />
          </form>
        )}
      </Formik>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container classes={{ container: classes.component }}>
        <Grid item xs={12} lg={8} classes={{ item: classes.item }}>
          <Gradient classes={{ component: classes.icon }}>
            <i className="fa fa-envelope" />
          </Gradient>
          <div style={{ flex: 1 }}>
            <div className={classes.title}>Signup for our newsletter</div>
            <div className={classes.subtitle}>
              Keep up to date of our latest features, releases and articles.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className={classes.signupWrapper}>
            {!this.state.showForm ? (
              <Button
                title="Signup now"
                classes={{ component: classes.signupButton }}
                applyBorderRadius
                width={250}
                onClick={this._toggleForm}
              />
            ) : (
              this._renderInput()
            )}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewsLetter);
