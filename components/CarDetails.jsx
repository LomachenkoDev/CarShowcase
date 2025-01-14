"use client"
import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import { Dialog,Transition } from '@headlessui/react'
const CarDetails = ({isOpen,closeModal,car}) => {
  const {_id,imageUrl,...clonedCar}=car;
  return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh]  transform rounded-2xl bg-lavender text-left shadow-xl trasition-all flex flex-col gap-5">
              <button type="button" onClick={closeModal} className='absolute top-2 right-2 z-10 w-fit p-2 bg-white rounded-full'>
                <Image src="/close.svg" alt="close" width={20} height={20} className='object-contain'/>
              </button>
              <div className='flex-1 flex flex-col gap-3 p-3'>
                <div className='relative w-full h-40 rounded-lg bg-pattern bg-cover'>
                <Image src={car.imageUrl}   alt="car model" fill  priority className='object-contain image'/>
                </div>
                <div className='flex gap-3'>
                     <div className='flex-1 relative w-full h-24 bg-white rounded-lg '>
                     <Image src={car.imageUrl}   alt="car model" fill priority className='object-contain'/>
                     </div>
                     <div className='flex-1 relative w-full h-24 bg-white rounded-lg '>
                     <Image src={car.imageUrl}   alt="car model" fill priority className='object-contain'/>
                     </div>
                     <div className='flex-1 relative w-full h-24 bg-white rounded-lg '>
                     <Image src={car.imageUrl}   alt="car model" fill priority className='object-contain'/>
                     </div>
                </div>
              </div>
              <div className='flex-1 flex flex-col gap-2 bg-lavender  '>
                <div className="p-4 ">
                  <h2 className='font-semibold capitalize text-xl'>{car.make} {car.model}</h2>
                  <div className='mt-3 flex flex-wrap gap-4'>
                   {Object.entries(clonedCar).map(([key,value])=>{return(
                     <div key={key} className='flex justify-between gap-5 w-full mx-2'>
                      <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                      <p className='text-black capitalize font-bold'>{value}</p>
                     </div>
                   ) }
                   )}
                  </div>
                  </div>
              </div>
            </Dialog.Panel>
     </Transition.Child>
        </div>
      </div>
      
        
         


        </Dialog>
      </Transition>
  
  )
}

export default CarDetails
