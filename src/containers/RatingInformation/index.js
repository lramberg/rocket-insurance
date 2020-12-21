import React, { useState } from 'react';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {
  Container,
  Form
} from '../../assets/styles/layout';

import {
  Title,
  Description,
  Error
} from '../../assets/styles/text';

const RatingInformation = ({ handleCreateQuote, error }) => {
  const [nameState, setNameState] = useState({
    firstName: '',
    lastName: ''
  });
  const [addressState, setAddressState] = useState({
    line1: '',
    line2: '',
    city: '',
    region: '',
    postal: ''
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleInputChange = (type, key, value) => {
    setFormErrors('');

    if (type === 'name') {
      setNameState({
        ...nameState,
        [key]: value
      })
    } else {
      setAddressState({
        ...addressState,
        [key]: value
      })
    }
  }

  const validateForm = () => {
    let errors = [];
    if (!addressState.line1) errors.push('Please enter a street address');
    if (!addressState.city) errors.push('Please enter a city');
    if (!addressState.region) errors.push('Please enter a region');
    if (!addressState.postal) errors.push('Please enter a postal code');
    if (!nameState.firstName) errors.push('Please enter your first name');

    setFormErrors(errors);

    if (errors.length) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = () => {
    const formIsValid = validateForm();

    const data = {
      first_name: nameState.firstName,
      last_name: nameState.lastName,
      address: {
        line_1: addressState.line1,
        line_2: addressState.line2,
        city: addressState.city,
        region: addressState.region,
        postal: addressState.postal
      }
    }
    if (formIsValid) {
      handleCreateQuote(data);
    }
  }

  return (
    <Container>
      <Title>Welcome to Rocket Insurance</Title>
      <Description>As interplanetary travel becomes mainstream, we're excited to offer rocket owners comprehensive coverage options to let them fly through space worry-free.</Description>
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        <Input 
          placeholder='First Name'
          value={nameState.firstName}
          onChange={(e) => handleInputChange('name', 'firstName', e.target.value)}
        />
        <Input 
          placeholder='Last Name'
          value={nameState.lastName}
          onChange={(e) => handleInputChange('name', 'lastName', e.target.value)}
        />
        <Input 
          placeholder='Address Line 1'
          value={addressState.line1}
          onChange={(e) => handleInputChange('address', 'line1', e.target.value)}
        />
        <Input 
          placeholder='Address Line 2'
          value={addressState.line2}
          onChange={(e) => handleInputChange('address', 'line2', e.target.value)}
        />
        <Input 
          placeholder='City'
          value={addressState.city}
          onChange={(e) => handleInputChange('address', 'city', e.target.value)}
        />
        <Input 
          placeholder='Region'
          value={addressState.region}
          onChange={(e) => handleInputChange('address', 'region', e.target.value)}
        />
        <Input 
          placeholder='Postal Code'
          value={addressState.postal}
          onChange={(e) => handleInputChange('address', 'postal', e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}/>
        { error ? <Error>{error}</Error> : null }
        { formErrors.length ? 
          formErrors.map((error, index) => {
            return <Error key={`error-${index}`}>{error}</Error>
          }) : null }
      </Form>
    </Container>
  )
}

export default RatingInformation;