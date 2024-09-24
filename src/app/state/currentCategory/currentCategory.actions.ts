
import {createAction, props} from '@ngrx/store';

export const setCurrentCategory = createAction('[Current Category] Set Current Category', props<{ category: string }>());
