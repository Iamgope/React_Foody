import Classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop=(props)=>{
  return <div className={Classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay=(props)=>{
    return (<div className={Classes.modal}>
        <div className={Classes.content} >{props.children}
        </div>
    </div>);
}
const PortalElement=document.getElementById('overlays')
const Modal=(props)=>{
    
return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,PortalElement,PortalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
</>
}

export default Modal;