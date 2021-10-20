import * as React from 'react';
import { Divider } from 'rsuite';


const doku = (probs) => { 

  
    return (
      <>
        <div className="flex flex-col justify-center items-center text-center text-7xl text-gray-800 font-bold font-sans">
      <p className="text-7xl text-center text-gray-700 font-semibold font-sans">Dokumente - Nachweise</p>

      <Divider className="w-11/12 border border-gray-600" />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto mt-10 w-11/12 bg-gray-800">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            <iframe frameBorder="0"  width="750" height="550" src="https://7ea6082e-trial.flowpaper.com/Superbockresized/" scrolling="no" marginwidth="0" marginheight="0" allowFullScreen></iframe>;
    </div>
    </>
    )

}
export default doku
