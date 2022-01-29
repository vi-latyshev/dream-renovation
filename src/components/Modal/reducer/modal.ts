import { Action } from '../types';

import type { ModalState, ModalComponentState, ActionMap } from '../types';

type Payload = {
    [Action.SHOW]: ModalComponentState;
    [Action.HIDE]: undefined;
    [Action.UNKNOWN]: undefined;
};

type ActionType = ActionMap<Payload>[keyof ActionMap<Payload>];

export const initialState: ModalState = {
    isOpen: false,
};

export const modalReducer = (state: ModalState, action: ActionType) => {
    switch (action.type) {
        case Action.SHOW: {
            const { component, props } = action.payload;

            return {
                isOpen: true,
                component,
                props,
            };
        }
        case Action.HIDE: {
            return {
                ...state,
                isOpen: false,
            };
        }
        default:
            throw new Error('Unexpected action');
    }
};
