import { createContext } from 'react';

import type { ModalComponentState } from '../types';

export interface ModalContextState {
    showModal: <T>(
        component: ModalComponentState<T>['component'],
        ...modalProps: Parameters<ModalComponentState<T>['component']>[0] extends object
            ? [ModalComponentState<T>['modalProps']]
            : [never?]
    ) => void;
    hideModal: () => void;
}

const initialModalContextState: ModalContextState = {
    showModal: () => { },
    hideModal: () => { },
};

export const ModalContext = createContext<ModalContextState>(initialModalContextState);
