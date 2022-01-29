import { createContext } from 'react';

import type { ModalComponentState } from '../types';

export interface ModalContextState {
    showModal: <T>(
        component: ModalComponentState<T>['component'],
        props?: ModalComponentState<T>['props'],
    ) => void;
    hideModal: () => void;
}

const initialModalContextState = {
    showModal: () => { },
    hideModal: () => { },
};

export const ModalContext = createContext<ModalContextState>(initialModalContextState);
