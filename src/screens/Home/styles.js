import { type Theme } from 'src/config/theme';

export default (theme: Theme) => ({
  page: {
    overflowX: 'hidden',
  },

  // banner
  banner: {
    height: 500,
  },
  bannerTitle: {
    color: 'white',
    fontFamily: theme.typography.font.family2,
    fontSize: 42,
    paddingTop: 100,
    marginBottom: 20,
    textAlign: 'center',
  },
  bannerSubtitle: {
    color: theme.palette.shadow.color3,
    fontFamily: theme.typography.font.family2,
    fontSize: 18,
    textAlign: 'center',
  },

  sectionTitle: {
    fontFamily: theme.typography.font.family2,
    fontSize: 30,
    color: theme.palette.primary.color3,
    textAlign: 'center',
    padding: [[44, 0]],
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  sectionTitleWhite: {
    color: 'white',
  },
  marginTop0: {
    marginTop: 0,
  },
  freetrialButton: {
    border: '1px solid white',
    backgroundColor: 'transparent',
    margin: '30px auto',
  },
  // Product
  productWrapper: {
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 50,
    marginTop: -100,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 0 15px 0 rgba(0,0,0,0.05)',
    paddingBottom: 50,
  },
  products: {
    display: 'flex',
  },
  // features
  featureWrapper: {
    backgroundColor: '#232F3F',
    padding: [[0, 50, 50]],
  },
  features: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuresSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  // integration
  integrationWrapper: {
    padding: [[0, 50, 50]],
  },
  integrationTitle: {
    fontFamily: theme.typography.font.family2,
    color: '#4F208E',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  integrations: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  integrationIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: [[10, 10]],
  },
  integrationIcon: {
    maxHeight: 124,
  },
  // pricing
  pricingWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: [[0, 50, 50]],
  },
  thrityDayTrial: {
    fontFamily: theme.typography.font.family2,
    color: theme.palette.primary.color3,
    fontSize: 14,
    margin: [[30, 0]],
    textAlign: 'center',
  },
  pricings: {
    display: 'flex',
    justifyContent: 'center',
  },
  pricingItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  // Team
  teamWrapper: {
    padding: [[0, 50, 50]],
  },
  teamMembers: {
    display: 'flex',
    justifyContent: 'center',
  },
  // support
  supportWrapper: {
    padding: [[0, 50, 50]],
    backgroundColor: theme.palette.grey['100'],
    [theme.breakpoints.only('xs')]: {
      padding: [[0, 0, 50]],
    },
    [theme.breakpoints.only('sm')]: {
      padding: [[0, 20, 50]],
    },
  },
  supportContent: {
    backgroundColor: 'white',
    boxShadow: '0 0 15px 0 rgba(0,0,0,0.05)',
    padding: 50,
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    [theme.breakpoints.only('xs')]: {
      padding: [[20, 10]],
      width: '85%',
    },
    [theme.breakpoints.only('sm')]: {
      padding: 20,
      width: '85%',
    },
  },
  supportInfoWrapper: {
    display: 'flex',
    marginBottom: 20,
  },
  supportInfoIcon: {
    minWidth: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginRight: 20,
  },
  contactIcon: {
    paddingTop: 70,
    [theme.breakpoints.down('md')]: {
      paddingTop: 10,
    },
  },
  supportInfoTitle: {
    fontFamily: theme.typography.font.family2,
    color: theme.palette.primary.color1,
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 15,
  },
  supportInfoText: {
    fontFamily: theme.typography.font.family2,
    color: theme.palette.shadow.color3,
    fontSize: 16,
    marginBottom: 10,
  },
});

export const HeaderStyles = (theme: Theme) => ({
  component: {
    backgroundColor: '#232F3F',
    padding: [[30, 50]],
    zIndex: 1000,
    '&.sticky': {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
    },
    [theme.breakpoints.down('md')]: {
      padding: [[20, 0]],
    },
  },
  bigHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  smallHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  logo: {
    width: 212,
    height: 48,
  },
  smallLogo: {
    width: 150,
    marginLeft: 10,
  },
  headerMiddle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerLink: {
    color: theme.palette.primary.color1,
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    textTransform: 'uppercase',
    padding: [[0, 10]],
    textDecoration: 'none',
    cursor: 'pointer',
  },
  headerRightPart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: [[0, 10]],
  },
  loginButton: {
    backgroundColor: 'transparent',
    border: '0px solid',
  },
  loginButtonText: {
    color: theme.palette.primary.color2,
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
  },
  hamburgerIcon: {
    border: `2px solid white`,
    padding: 10,
    color: 'white',
    fontSize: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  smallMenuWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 64,
    borderTop: `1px solid #222`,
  },
  smallMenuItem: {
    textAlign: 'center',
    padding: [[20, 0]],
    borderBottom: `1px solid #222`,
    backgroundColor: '#232F3F',
    width: '100%',
    fontFamily: theme.typography.font.family2,
    color: 'white',
    fontSize: 17,
  },
});

export const GradientStyles = (theme: Theme) => ({
  component: {
    background:
      'linear-gradient(135deg, #2AC88F 0%, #29A9DB 49.19%, #6A2BB9 100%)',
  },
});

export const ProductBlockStyles = (theme: Theme) => ({
  component: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: [[20, 20]],
  },
  icon: {
    marginBottom: 20,
    fontSize: 50,
    color: '#29A9DB',
    '& i': {
      background:
        'linear-gradient(135deg, #2AC88F 0%, #29A9DB 49.19%, #6A2BB9 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
  },
  title: {
    fontFamily: theme.typography.font.family2,
    fontSize: 18,
    color: theme.palette.primary.color3,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontFamily: theme.typography.font.family2,
    fontSize: 14,
    color: '#C4C4C4',
    textAlign: 'center',
  },
});

export const FeatureBlockStyles = (theme: Theme) => ({
  component: {
    display: 'flex',
    padding: 15,
    cursor: 'pointer',
  },
  iconWrapper: {
    minWidth: 60,
    height: 60,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: [[0, 15]],
    boxShadow: '0 0 11px 0 rgba(0,0,0,0.5)',
  },
  icon: {
    fontSize: 30,
    display: 'flex',
    color: 'white',
  },
  title: {
    fontFamily: theme.typography.font.family2,
    fontSize: 18,
    color: theme.palette.primary.color1,
    marginBottom: 10,
    fontWeight: 500,
    textAlign: props => (props.iconPosition === 'right' ? 'right' : 'left'),
  },
  description: {
    fontFamily: theme.typography.font.family2,
    fontSize: 14,
    color: '#C4C4C4',
    textAlign: props => (props.iconPosition === 'right' ? 'right' : 'left'),
    maxWidth: 200,
    lineHeight: '20px',
  },
});

export const TabletStyles = (theme: Theme) => ({
  component: {
    position: 'relative',
    display: 'flex',
  },
  outerSquare: {
    width: props => props.width || '100%',
    height: props => props.height || 300,
    padding: props => props.space || 50,
    border: `2px solid white`,
    borderRadius: 20,
  },
  innerSquare: {
    width: '100%',
    height: '100%',
    border: `2px solid white`,
  },
  homeButton: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: `2px solid white`,
    position: 'absolute',
    top: '50%',
    marginTop: -15,
    marginLeft: props => (props.space ? (props.space - 30) / 2 : 10),
  },
});

export const TeamMemberStyles = (theme: Theme) => ({
  component: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  avatarWrapper: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 0 15px 0 rgba(0,0,0,0.1)',
    marginBottom: 25,
    overflow: 'hidden',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  avatar: {
    width: '100%',
  },
  name: {
    fontFamily: theme.typography.font.family2,
    fontSize: 18,
    color: theme.palette.shadow.color3,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    color: theme.palette.shadow.color3,
    marginBottom: 10,
    textAlign: 'center',
    maxWidth: 200,
  },
});

export const PricingPeriodStyles = (theme: Theme) => ({
  component: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '30px',
    backgroundColor: '#232F3F',
    padding: [[0, 10]],
    height: 60,
  },
  item: {
    height: 40,
    minWidth: 150,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.font.family2,
    fontSize: 18,
    color: theme.palette.primary.color1,
    textAlign: 'center',
    fontWeight: '500',
    borderRadius: 20,
    position: 'relative',
    zIndex: 1,
  },
  selectedItem: {
    color: 'white',
  },
  bgPlaceholder: {
    height: 40,
    width: 150,
    borderRadius: 20,
    position: 'absolute',
    left: 10,
    transition: 'all 0.2s ease-in',
  },
});

export const PricingBlockStyles = (theme: Theme) => ({
  component: {
    margin: [[10, 20]],
    width: 350,
    boxShadow: '0 0 20px 0 rgba(35,47,63,0.1)',
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#232F3F',
    padding: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    fontFamily: theme.typography.font.family2,
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    height: 50,
  },
  price: {
    fontFamily: theme.typography.font.family2,
    fontSize: 34,
    color: theme.palette.primary.color1,
    textAlign: 'center',
    fontWeight: 700,
  },
  user: {
    fontFamily: theme.typography.font.family2,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 50,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  listItem: {
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    color: theme.palette.primary.color3,
    marginBottom: 20,
  },
});

export const SupportFormStyles = (theme: Theme) => ({
  component: {
    padding: [[0, 80]],
    [theme.breakpoints.down('md')]: {
      padding: [[0, 10]],
    },
  },
  title: {
    fontFamily: theme.typography.font.family2,
    color: theme.palette.primary.color1,
    fontSize: 25,
    fontWeight: 500,
    marginBottom: 30,
    textAlign: 'center',
  },
  textInput: {
    marginBottom: 15,
  },
  textInputWrapper: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#29A9DB',
  },
});

export const NewsLetterStyles = (theme: Theme) => ({
  component: {
    display: 'flex',
    alignItems: 'center',
    padding: [[50, 120]],
    backgroundColor: theme.palette.primary.color1,
    [theme.breakpoints.down('sm')]: {
      padding: [[50, 20]],
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: 20,
    },
  },
  icon: {
    minWidth: 60,
    height: 60,
    borderRadius: '50%',
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white',
  },
  title: {
    fontFamily: theme.typography.font.family2,
    color: 'white',
    fontSize: 22,
    fontWeight: 500,
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  subtitle: {
    fontFamily: theme.typography.font.family2,
    color: 'white',
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  signupWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButton: {
    border: `1px solid white`,
    backgroundColor: 'transparent',
  },
  formWrapper: {
    display: 'flex',
  },
  textInput: {
    marginRight: 10,
  },
  textInputWrapper: {
    border: `2px solid white`,
    minWidth: 250,
  },
  submitButton: {
    border: `2px solid white`,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  submitAfterIcon: {
    marginRight: 0,
  },
});

export const toastStyle = {
  fontSize: 16,
  fontWeight: '500',
  textAlign: 'center',
  minHeight: 50,
  fontFamily: "'montserrat', sans-serif",
  borderRadius: 3,
  lineHeight: '22px',
};
