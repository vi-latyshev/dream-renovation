import { useReducer, useCallback } from 'react';

import { Action } from './types';
import { ModalContext } from './context/modal';
import { initialState, modalReducer } from './reducer/modal';
import { Modal } from './Modal';

interface ModalProviderProps {
    children?: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const showModal = useCallback((component, props) => {
        dispatch({
            type: Action.SHOW,
            payload: {
                component,
                props,
            },
        });
    }, []);

    const hideModal = useCallback(() => {
        dispatch({
            type: Action.HIDE,
        });
    }, []);

    return (
        <ModalContext.Provider
            value={{
                showModal,
                hideModal,
            }}
        >
            {children}
            <Modal onClose={hideModal} {...state} />
        </ModalContext.Provider>
    );
};
