import React from 'react';
import Error from './Error';
import MyForm from './MyForm';

class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.show === false &&
          <Error goBack={this.props.goBack} />
        }
        {this.props.show === true &&
          <MyForm
            getLocation={this.props.getLocation}
            getData={this.props.getData}
            data={this.props.data}
            vision={this.props.vision}
            size={this.props.size}
          />
        }
      </div>
    );
  }
}

export default Main;
