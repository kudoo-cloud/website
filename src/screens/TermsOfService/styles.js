import { type Theme } from 'src/config/theme';

export default (theme: Theme) => ({
  page: {},
  title: {
    fontFamily: theme.typography.font.family2,
    fontSize: 25,
    color: theme.palette.shadow.color3,
    marginBottom: 25,
  },
  content: {
    padding: 50,
  },
});
