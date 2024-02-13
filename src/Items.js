// import allpic from './Allpic';
// import Item from './item';

// function A({setModal}) {

//     return (
//         <div className='gellery'>
//             {allpic.map((e) => (<Item key={e.id} src={e.url} desc = {e.description} text = {e.text} {...e} setModal = {setModal}/>))}
//         </div>
//     )
// }

// export default A

import Item from './item';

function A({pic, setModal}) {

    return (
        <div className='gellery'>
            {pic.map((e) => (<Item key={e.id} src={e.url} desc = {e.description} text = {e.text} id = {e.id} {...e} setModal = {setModal}/>))}
        </div>
    )
}

export default A