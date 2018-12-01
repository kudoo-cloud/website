import React from 'react';
import {
  withStyles,
  TextField,
  Button,
  withStylesProps,
} from '@kudoo/components';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { SupportFormStyles as styles } from './styles';

type Props = {
  // ...$Exact<withStylesFlowType>,
};

class SupportForm extends React.Component<Props, any> {
  static propTypes = {
    ...withStylesProps,
  };

  _sendMessage = async (values, actions) => {
    try {
      await fetch(
        'https://hooks.slack.com/services/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',
        {
          method: 'POST',
          body: JSON.stringify({
            text: 'Contact Message',
            attachments: [
              {
                author_name: `Name: ${values.fullName}\n Company name: ${
                  values.companyName
                }`,
                title: `${values.email}\n${values.phoneNumber}`,
                text: values.message,
              },
            ],
          }),
        }
      );
      this._form.resetForm({});
      actions.setSubmitting(false);
      toast.success('Message Sent');
    } catch (error) {
      toast.error(error.toString());
    }
  };

  _renderForm(formProps) {
    const { classes, theme } = this.props;
    const { values, touched, errors } = formProps;
    return (
      <form onSubmit={formProps.handleSubmit}>
        <TextField
          classes={{
            component: classes.textInput,
            textInputWrapper: classes.textInputWrapper,
          }}
          placeholder={'Company Name'}
          showClearIcon={false}
          name="companyName"
          id="companyName"
          value={values.companyName}
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          error={touched.companyName && errors.companyName}
        />
        <TextField
          classes={{
            component: classes.textInput,
            textInputWrapper: classes.textInputWrapper,
          }}
          placeholder={'Full Name'}
          showClearIcon={false}
          name="fullName"
          id="fullName"
          value={values.fullName}
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          error={touched.fullName && errors.fullName}
        />
        <TextField
          classes={{
            component: classes.textInput,
            textInputWrapper: classes.textInputWrapper,
          }}
          placeholder={'Email'}
          showClearIcon={false}
          name="email"
          id="email"
          value={values.email}
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          error={touched.email && errors.email}
        />
        <TextField
          classes={{
            component: classes.textInput,
            textInputWrapper: classes.textInputWrapper,
          }}
          placeholder={'Phone Number'}
          showClearIcon={false}
          name="phoneNumber"
          id="phoneNumber"
          value={values.phoneNumber}
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          error={touched.phoneNumber && errors.phoneNumber}
        />
        <TextField
          classes={{
            component: classes.textInput,
            textInputWrapper: classes.textInputWrapper,
          }}
          placeholder={'Message'}
          showClearIcon={false}
          name="message"
          id="message"
          value={values.message}
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          error={touched.message && errors.message}
          multiline
        />
        <Button
          type="submit"
          buttonColor={theme.palette.primary.color2}
          title="Send Message"
          applyBorderRadius
          loading={formProps.isSubmitting}
        />
      </form>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.component}>
        <div className={classes.title}>Send us a message</div>
        <Formik
          ref={ref => (this._form = ref)}
          initialValues={{
            companyName: '',
            fullName: '',
            email: '',
            phoneNumber: '',
            message: '',
          }}
          validationSchema={Yup.object().shape({
            companyName: Yup.string().required('Company Name is required'),
            fullName: Yup.string().required('Full name is required'),
            email: Yup.string()
              .required('Email is required')
              .email(),
            phoneNumber: Yup.string().required('Phone Number is required'),
            message: Yup.string().required('message is required'),
          })}
          onSubmit={this._sendMessage}>
          {this._renderForm.bind(this)}
        </Formik>
      </div>
    );
  }
}

export default withStyles(styles)(SupportForm);
