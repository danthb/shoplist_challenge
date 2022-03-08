import './Backdrop.css';

const Backdrop = ({show, click}) => {
    return (
        show && <div className="backdrop" onClick ={click}  >
            I'm a backdrop
        </div>
    );
}

export default Backdrop;
