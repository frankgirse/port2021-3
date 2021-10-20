import React from 'react'
import ReactTooltip from 'react-tooltip'
import PdfViewerComponent from '/components/PdfViewerComponent';

export const ModalDD = (probs) =>  {


   {/*} let  tempVariable = ';'
    tempVariable = (probs.DocTitle),
    console.log(tempVariable);
    let FileUrl = "";
    console.log(FileUrl);
    let fileUrlID= "";
    console.log(fileUrlID);
                
                switch (tempVariable) {
                    case "FA-Urkunde": 
                    fileUrlID = '../public/Superbock2.pdf';
                    break;
                    case "Approbation": 
                    fileUrlID = '../public/ticketpdf';
                    
                    break;
                
                    default:
                    // Anweisungen werden ausgeführt,
                    // falls keine der case-Klauseln mit expression übereinstimmt
                    break;
                };
            */}
                        


            return (

<>
<div>

{/*<!--Start of Wrap */}

{/*<!--Start of Wrap */}




{/*<!--Start of Modal */}


<div class="modal">
<input id="modal__trigger" type="checkbox" />
<label for="modal__trigger">{probs.DokTitle}</label>
<div class="modal__overlay" role="dialog" aria-labelledby="modal__title" aria-describedby="modal_desc">
<div class="modal__wrap">
    <label for="modal__trigger">&#10006;</label>
    <PdfViewerComponent fileUrlID  ></PdfViewerComponent>
</div>
</div>
</div>
{/*<!--End Of  of Wrap */}



</div>
</>
)












    
}

