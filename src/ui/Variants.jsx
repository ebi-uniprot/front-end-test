import React, { Component } from 'react';
import axios from 'axios';

class RetrieveVariants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: null,
    };
  }

  componentDidMount() {
    this.getVariants(this.props.proteinId);
  }

  getVariants(proteinId) {
    this.state.variants = axios.get(`https://www.ebi.ac.uk/proteins/api/variation/${proteinId}`);
  }

  render() {
    if (this.state.variants) {
      return (
        <table>
          {this.state.variants.map(variant => (
            <tr>
              <td>{variant.begin}</td>
              {/* Show required fields */}
            </tr>
          ))}
        </table>
      );
    }
    return <div>My variants should be displayed here</div>;
  }
}

export default RetrieveVariants;
