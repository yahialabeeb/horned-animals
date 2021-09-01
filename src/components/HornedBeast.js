
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0,
        }
    }


    increaseVotes = () => {

        this.setState({
            votes: this.state.votes + 1
        });


    // this.props.handleClose();
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem', }}>
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>This animal name is  {this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                            <p> {this.props.horns} </p>
                            <p>Number of are {this.state.votes}</p>

                        </Card.Text>
                        <Button onClick={this.increaseVotes}> VOTE !!</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}


export default HornedBeast;