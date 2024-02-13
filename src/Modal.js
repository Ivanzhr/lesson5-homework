import './modal.css'
function CreateModal({pic, modal, setModal}) {
    const selectedPic = pic.find(item => item.id === modal)
    console.log(selectedPic)

    if(!modal){
        return null
    }

    const handleClickBack = () => {
        if (modal === 1) {
            setModal(pic.length);
        } else {
            setModal(modal - 1);
        }
    };

    const handleClickNext = () => {
        if (modal === pic.length) {
            setModal(1);
        } else {
            setModal(modal + 1);
        }
    };


    return(
        <div className="overlay">
            <div className="modal">
                <div className="photo"><img src={selectedPic.url} alt=""></img></div>
                <div className="text">
                    <h2>{selectedPic.description}</h2>
                    <div className='square'>
                        <div className='line'></div>
                        <div className='line_end'></div>
                    </div>
                    <p>{selectedPic.text}</p>
                </div>
                <span className='btn' onClick={()=>{setModal(null)}}>+</span>
                <span className='back' onClick={()=>{setModal(handleClickBack)}}></span>
                <span className='next'onClick={()=>{setModal(handleClickNext)}}></span>
            </div>
        </div>
    )
}

export default CreateModal