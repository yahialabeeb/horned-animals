import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            numOfHorns: 0
    }

    }



    render() {


        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title1}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img src= {this.props.image_url1} width = "465px" />
                <br/>

                    {this.props.description1}
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}


export default SelectedBeast;



