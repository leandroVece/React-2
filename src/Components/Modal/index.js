import ReactDOM from 'react-dom';
import { functionModal } from './modalFuntion';

function Modal() {

    const handelClick = () => {
        functionModal()
    }

    return ReactDOM.createPortal(
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" className="btn btn-primary me-5 mt-2" id='buttonModal' onClick={handelClick} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@gmail.com">Contactanos</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal'),
    );
}

export default Modal;