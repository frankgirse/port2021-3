import * as React from 'react'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

export const PdfViewerComponent = (probs) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
      <div
        style={{
          height: '60vh',
          width: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Viewer fileUrl= {probs.fileUrlID} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  )
}

export default PdfViewerComponent
