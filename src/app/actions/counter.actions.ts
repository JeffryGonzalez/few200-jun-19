// OLD SKOOL ACTION CREATORS
// import { Action } from '@ngrx/store';

// export const COUNT_INCREMENTED = '[count] incremented';
// export class IncrementedCout implements Action {
//   readonly type = COUNT_INCREMENTED;
//   constructor() { }
// }

import { createAction } from '@ngrx/store';

export const countIncremented = createAction(
  '[Counter] Count Incremented'
);

export const countDecremented = createAction(
  '[Counter] Count Decremented'
);

export const countReset = createAction(
  '[Counter] Count Reset'
);
