import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {
  Container,
  Form
} from '../../assets/styles/layout';

import {
  Title,
  Error
} from '../../assets/styles/text';

const RatingInformation = ({ handleCreateQuote }) => {
  const history = useHistory();
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
  const [error, setError] = useState('');

  const handleInputChange = (type, key, value) => {
    setError('');

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

  const handleSubmit = () => {
    if (
      !addressState.line1 ||
      !addressState.line2 ||
      !addressState.city ||
      !addressState.region ||
      !addressState.postal ||
      !nameState.firstName ||
      !nameState.lastName
    ) {
      setError('Please fill in all fields to get a quote');
      return;
    }

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
    handleCreateQuote(data);
    history.push('/quote-overview');
  }

  return (
    <Container>
      <Title>Welcome to Rocket Insurance</Title>
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
          placeholder='Postal'
          value={addressState.postal}
          onChange={(e) => handleInputChange('address', 'postal', e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}/>
        { error ? <Error>{error}</Error> : null }
      </Form>
    </Container>
  )
}

export default RatingInformation;