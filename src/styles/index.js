import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  appContainer: {
    padding: '.8em',
  },
  menuItem: {
    textDecoration: 'none'
  },
  activeMenuItem: {
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    zIndex: 1024,
    border: '1px solid #8b9898',
    background: '#ffffff',
    padding: '0 10px'
  },
  datePicker: {}
});

export default styles
