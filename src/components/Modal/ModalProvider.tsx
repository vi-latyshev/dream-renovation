import { useReducer, useCallback, useMemo } from 'react';

import { Action } from './types';
import { ModalContext } from './context/modal';
import { initialState, modalReducer } from './reducer/modal';
import { Modal } from './ModalBase';

interface ModalProviderProps {
    children?: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const showModal = useCallback((component, modalProps = {}) => {
        dispatch({
            type: Action.SHOW,
            payload: {
                component,
                modalProps,
            },
        });
    }, []);

    const hideModal = useCallback(() => {
        dispatch({
            type: Action.HIDE,
        });
    }, []);

    const modalValue = useMemo(() => ({
        showModal,
        hideModal,
    }), [showModal, hideModal]);

    return (
        <ModalContext.Provider value={modalValue}>
            {children}
            <Modal onClose={hideModal} {...state} />
        </ModalContext.Provider>
    );
};
