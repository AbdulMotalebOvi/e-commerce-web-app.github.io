import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Modal from 'react-responsive-modal';
import './modal.css'

export default function ModalData({ setOpen, open, setSelectedProduct }) {

    const closeIcon = (
        <XMarkIcon className="h-[24px] w-[24px] text-black" />
    );
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeIcon={closeIcon}
                center
                classNameNames={{
                    overlayAnimationIn: 'customEnterOverlayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}
                animationDuration={800}
            >
                <div className='bg-red'>
                    <h1>hi modal</h1>
                </div>
            </Modal>
        </div>
    )
}
