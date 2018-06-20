import { sum } from 'lodash';

export const getSum = data => 'the sum is: ' + sum(data).toFixed(2);

export default { getSum };
