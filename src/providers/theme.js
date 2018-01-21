import { addMotif } from '../hocs'

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

export default addMotif(theme)
