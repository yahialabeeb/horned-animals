import React from 'react';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataJson from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: [dataJson[0]],
    }

  }

  handleClose = () => {
    console.log("hi")
    this.setState({ show: !this.state.show })

  }


  updatingcontant = (hornedName) => {
     let dataaa =  dataJson.filter(animal => animal.title === hornedName) 
     this.setState({ data: dataaa })
  }



  render() {

    return (
      <div>
        <h1>Horned Animals</h1>
        <Main
          updatingcontant={this.updatingcontant}
          handleClose={this.handleClose}
        />

        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          title1={this.state.data[0].title}
          image_url1={this.state.data[0].image_url}
          description1={this.state.data[0].description}
          horns1={this.state.data[0].horns}
        />

      </div>
    );
  }
}


export default App;

 // if (beast.title === hornedName) {
      //   console.log(beast.title);
      //   return (
      //     < SelectedBeast
      //       title={beast.title}
      //       image_url={beast.image_url}
      //       description={beast.description}
      //       horns={beast.horns}
      //       handleClose={this.handleClose}
      //       show={this.state.show}
      //     />
      //   );
      // }
      // else {

      //   return (

      //     < SelectedBeast />
      //   );