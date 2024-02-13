// function Create({url, desc, text, setModal}) {
  
//     return (
//         <div className="gellery_item" onClick = {()=>setModal({url, desc, text})}>
//             <img src={url} alt={desc} ></img>
//         </div>
//     )
// }

// export default Create;

function Create({url, desc, id, setModal}) {
  
    return (
        <div className="gellery_item" onClick = {()=>setModal(id)}>
            <img src={url} alt={desc} ></img>
        </div>
    )
}

export default Create;