import React, { Component } from 'react';
import AdoptionForm from '../../components/AdoptionForm/AdoptionForm';

export default class AdoptionFormRoute extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <div>
        <AdoptionForm />
      </div>
    );
  }
}
