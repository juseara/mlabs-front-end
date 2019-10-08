import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md'
import { ShadowMask, ModalWrapper, ModalHeader, ModalBody, ModalFooter, CloseButton, Logo } from './modal.styles'

const Modal = (props) => {

    if(props.show){
        document.body.style.overflow = "hidden";
    }
    else{
        document.body.style.overflow = "auto";
    }

    return (
        <>
            {props.show ? <ShadowMask onClick={props.onCancel} /> : null}

            <ModalWrapper show={props.show}>
                <ModalHeader>
                    <div>
                        <Logo image={props.image} />
                        <h3>{props.title}</h3>
                    </div>
                    <CloseButton onClick={props.onCancel}>
                        <MdClose size="17px" color="#8b9095" />
                    </CloseButton>
                </ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter>
                    <button onClick={props.onCancel}>Voltar</button>
                    <button onClick={props.onSubmit}>Proximo</button>
                </ModalFooter>
            </ModalWrapper>
        </>
    )
}


Modal.propTypes = {
    show: PropTypes.bool,
    image: PropTypes.string,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
}

Modal.defaultProps = {
    show: false,
    title: "modal",
    image: "",
    onCancel: () => { console.log("cancel") },
    onSubmit: () => { console.log("submit") }
}

export default Modal;