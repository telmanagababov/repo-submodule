import { now } from 'lodash';

export const getCurrentDate = () => '1current date is: ' + new Date(now()).toGMTString();

export default { getCurrentDate };
