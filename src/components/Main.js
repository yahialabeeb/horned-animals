import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';
import dataJson from '../data.json';
import HornedForm from './HornedForm';

class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            numHorns: 0
        }
    }

    updateValue = (value) => {
        console.log(value);
        this.setState({
            numHorns: value
        });
    }

    render() {
        const animalArr = dataJson.map((beast) => {

            if ((beast.horns === Number(this.state.numHorns)) || (this.state.numHorns ===0)) {
                console.log(this.state.numHorns);
                return (

                    <HornedBeast
                        title={beast.title}
                        image_url={beast.image_url}
                        description={beast.description}
                        horns={beast.horns}
                        handleClose={this.props.handleClose}


                    />
                );
            } else {
                return (
                console.log(this.state.numHorns)
                );
            }
        })


        return (
            <div>
                <HornedForm
                    updateValue={this.updateValue}
                />
                <CardGroup>

                    {animalArr}

                </CardGroup>
            </div>
        );
    }


}

export default Main;



