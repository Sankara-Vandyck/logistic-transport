import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import myVideo from '../assets/videos/myVideo.mp4'


const VideoModal = ({ isOpen, setIsOpen }) => (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
      <source src={myVideo} type="myVideo/mp4" />
      </Dialog>
    </Transition>
  )
  export default VideoModal;
  