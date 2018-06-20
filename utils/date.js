import { now } from 'lodash';

export const getCurrentDate = () => 'current date is: ' + new Date(now()).toGMTString();

export default { getCurrentDate };
