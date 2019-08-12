import { helper } from '@ember/component/helper';

export function namesDouble([names]) {
  const flipped = names.split(' ')
  return flipped[1] + ", " + flipped[0]
}

export default helper(namesDouble);