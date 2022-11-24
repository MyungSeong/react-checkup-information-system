import Modal from 'react-modal';

export const ReactModalAdapter = ({ className, ...props }) => {
    const contentClassName = `${className}__content`;
    const overlayClassName = `${className}__overlay`;

    return (
        <Modal
            portalClassName={className}
            className={contentClassName}
            overlayClassName={overlayClassName}
            {...props}
        />
    );
};
