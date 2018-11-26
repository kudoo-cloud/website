import { type Theme } from 'src/config/theme';

export default (theme: Theme) => ({
  page: {
    '& pre': {
      whiteSpace: 'pre-wrap',
    },
    '& code': {
      whiteSpace: 'pre-wrap',
    },
    '& h1, & h2, & h3': {
      color: theme.palette.shadow.color3,
    },
  },
  title: {
    fontFamily: theme.typography.font.family2,
    fontSize: 25,
    color: theme.palette.shadow.color3,
    marginBottom: 25,
  },
  content: {
    padding: 50,
    fontFamily: theme.typography.font.family2,
    lineHeight: '26px',
  },
});
