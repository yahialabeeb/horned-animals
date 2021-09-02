
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

    handlecontant = () => {
        this.increaseVotes();
        this.props.handleClose();
        this.props.updatingcontant(this.props.title);
        console.log(this.props.title);
    }
    increaseVotes = () => {

        this.setState({
            votes: this.state.votes + 1
        });
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem', }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.handlecontant}/>

                    <Card.Body>
                        <Card.Title>This animal name is  {this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                            <p> {this.props.horns} </p>
                            <p>Number of ❤️ are {this.state.votes}</p>

                        </Card.Text>
                        <Button onClick={this.increaseVotes}> VOTE !!</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}


export default HornedBeast;