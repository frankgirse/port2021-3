import * as React from 'react'
import { Divider } from 'rsuite'
import { ModalDD } from '../components/ModalDD'

const dokumente = (probs) => {
  let DokTitle = ''

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center text-7xl text-gray-700 font-sans">
        <p> Dokumente + Nachweise</p>
        <Divider style={{ borderWidth: 1, width: 1100, borderColor: 'darkgray' }} />
      </div>

      <div className="mx-auto mt-5 p-10 w-11/12 h-auto text-center text-xl bg-gray-400  text-gray-700 font-sans grid grid-cols-3 gap-10">
        <div className="w-auto p-5 text-1xl bg-gray-600 border border-gray-600 border-rounded-ld hover:bg-gray-800">
          <ModalDD DokTitle="FA-Urkunde"></ModalDD>
        </div>

        <div className="w-auto p-5 text-1xl bg-gray-600 border border-gray-600 hover:bg-gray-800">
          <ModalDD DokTitle="Approbation"></ModalDD>
        </div>

        <div className="w-auto p-5 text-sm bg-gray-600 border border-gray-600 hover:bg-gray-800">
          <ModalDD DokTitle="MIDI-FMH-Äquivalent"></ModalDD>
        </div>

        <div className="w-auto p-5 bg-gray-600 border border-gray-600 hover:bg-gray-800">
          <ModalDD DokTitle="MIDI Approbation"></ModalDD>
        </div>

        <div className="w-auto p-5 bg-gray-600 border border-gray-600 hover:bg-gray-800">
          <ModalDD DokTitle="Staasexamen Medizin"></ModalDD>
        </div>

        <div className="w-auto p-5 bg-gray-600 border border-gray-600 hover:bg-gray-800">
          <ModalDD DokTitle="AZ Münsterlingen"></ModalDD>
        </div>

        
      </div>
    </>
  )
}

export default dokumente
