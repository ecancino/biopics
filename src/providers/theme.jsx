import MotifProvider from 'react-motif/MotifProvider'


const teal = 'teal';
const violet = 'violet';
const red = 'red';
const grey = 'grey';

const theme = {
  teal,
  violet,
  red,
  grey,
  activeColor: active => active ? teal : red
}

export default MotifProvider(theme)
