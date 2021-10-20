import React from 'react'
import { telephonefill, envelopefill } from 'react-icons/bs'
import { Divider } from 'rsuite'

const kontakt = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center text-center text-7xl text-gray-700 font-bold font-sans">
      <p className="text-7xl text-center text-gray-700 font-semibolf font-sans">Kontakt</p>

      <Divider className="w-11/12 border border-gray-600" />

      <p className="mt-5 text-3xl text-center text-yellow-600  font-sans lg:text-5xl">
        Dr. med. Frank Girse
      </p>
      <p className="text-3xl text-center text-yellow-600 font-sans lg:text-5xl">Binzenstrasse 2</p>
      <p className="text-3xl text-center text-yellow-600  font-sans lg:text-5xl">4058 Basel</p>

      <div className="mx-auto w-full grid-col-2 justify-center">
        <p className="text-2xl text-center text-yellow-600 font-sans lg:text-5xl">
        <i className="bi bi-telephone-fill text-gray-600"></i> +41 61 746 1907
        </p>
      </div>

      <div className="flex">
        <p className="text-2xl text-center text-yellow-600  font-sans lg:text-5xl">
          <i class="bi bi-envelope-fill text-gray-600"></i> fgirse@bluemail.ch
        </p>
      </div>
    </div>

    </>
  )
}

export default kontakt