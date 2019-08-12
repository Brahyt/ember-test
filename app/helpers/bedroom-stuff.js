import { helper } from '@ember/component/helper';

export function bedroomStuff([beds]) {
  if (beds <= 1) {
    return 'Oh so ronrey'
  }
  else if (beds <= 3) {
    return 'Ohh la la'
  }
  else {
    return 'Giggity';
  }
}

export default helper(bedroomStuff);