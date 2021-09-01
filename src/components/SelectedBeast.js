import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
    render() {

        return (
            <div>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            {this.props.description}
                            {this.props.horns}

                        </p>
                        <Img src={this.props.image_url} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default SelectedBeast;



