import actionCreator from "../../services/actionCreator";

export const CHANGE_VIEW = 'CHANGE_VIEW';

// export const actionChangeView = actionCreator(CHANGE_VIEW, 'type');
export const actionChangeView = view => ({ type: view });




