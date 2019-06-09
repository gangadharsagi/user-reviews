import { makeStyles } from '@material-ui/core';

export const ReviewDetailsStyles = makeStyles(theme => ({
  icon: {
    fontSize: 16,
  },
  card: {
    minWidth: 275,
    maxWidth: 600,
    padding: 10,
    marginBottom: 10,
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    width: '80%',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  grey: {
    color: 'grey',
  },
  logo: {
    width: 40,
    height: 40,
  },
}));