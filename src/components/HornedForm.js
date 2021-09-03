import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class HornedForm extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        numOfHorns: 0
                }
        }


        saving = (e) => {
                console.log(e.target.value);
                this.setState({ numOfHorns: e.target.value });
        }


        handelSubmit = (e) => {

                e.preventDefault();
                this.props.updateValue(this.state.numOfHorns)
                console.log('Form has been submitted');       
        }
        
        

        render() {
                return (
                        <Form onSubmit={this.handelSubmit} >
                              
                                        <Form.Label>Number of horns</Form.Label>
                                        <br/>
                                        <select onChange={this.saving} >
                                                <option value="0"> All </option>
                                                <option value="1" >1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="100">100</option>
                                   </select>
<br/>
                                <Button variant="primary" type="submit">
                                        Submit
                                </Button>
                        </Form>
                );
        }
}
export default HornedForm;
