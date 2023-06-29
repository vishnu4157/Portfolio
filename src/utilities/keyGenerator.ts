import { v4 as uuidv4 } from 'uuid';

const getKey = () => {
  return uuidv4();
};

export default getKey;