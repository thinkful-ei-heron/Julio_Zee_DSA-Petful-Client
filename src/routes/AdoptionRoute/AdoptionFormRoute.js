import React, { Component } from 'react';
import AdoptionForm from '../../components/AdoptionForm/AdoptionForm';

export default class AdoptionFormRoute extends Component {
  render() {
    return (
      <div>
        <AdoptionForm animal={this.props.animal} />
      </div>
    );
  }
}
