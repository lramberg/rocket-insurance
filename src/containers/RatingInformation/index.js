import React, { useState } from 'react';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import RegionSelect from '../../components/RegionSelect';
import { states } from '../../library/states';

import {
  Container,
  Form
} from '../../assets/styles/layout';

import {
  Title,
  Description,
  Error
} from '../../assets/styles/text';

const RatingInformation = ({ handleCreateQuote, apiError, setApiError }) => {
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
    setFormErrors([]);
    setApiError('');

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
    if (!addressState.line1) errors.push({ key: 'line1', value: 'Please enter a street address' });
    if (!addressState.city) errors.push({ key: 'city', value: 'Please enter a city' });
    if (!addressState.region) errors.push({ key: 'region', value: 'Please select a region' });
    if (!addressState.postal) errors.push({ key: 'postal', value: 'Please enter a postal code' });
    if (!nameState.firstName) errors.push({ key: 'firstName', value: 'Please enter your first name' });
    if (!nameState.lastName) errors.push({ key: 'lastName', value: 'Please enter your last name' });

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

  const getError = (key) => {
    let inputError = formErrors.find((e) => e.key === key);
    return inputError ? inputError.value : null;
  };

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
        <Error>{getError('firstName')}</Error>
        <Input 
          placeholder='Last Name'
          value={nameState.lastName}
          onChange={(e) => handleInputChange('name', 'lastName', e.target.value)}
        />
        <Error>{getError('lastName')}</Error>
        <Input 
          placeholder='Address Line 1'
          value={addressState.line1}
          maxLength={40}
          onChange={(e) => handleInputChange('address', 'line1', e.target.value)}
        />
        <Error>{getError('line1')}</Error>
        <Input 
          placeholder='Address Line 2'
          value={addressState.line2}
          maxLength={40}
          onChange={(e) => handleInputChange('address', 'line2', e.target.value)}
        />
        <Error />
        <Input 
          placeholder='City'
          value={addressState.city}
          maxLength={20}
          onChange={(e) => handleInputChange('address', 'city', e.target.value)}
        />
        <Error>{getError('city')}</Error>
        <RegionSelect 
          options={states}
          value={addressState.region}
          onChange={(e) => handleInputChange('address', 'region', e.target.value)}
        />
        <Error>{getError('region')}</Error>
        <Input 
          placeholder='Postal Code'
          value={addressState.postal}
          maxLength={5}
          onChange={(e) => handleInputChange('address', 'postal', e.target.value)}
        />
        <Error>{getError('postal')}</Error>
        <SubmitButton onClick={handleSubmit} text={'Get A Quote'}/>
        { apiError ? <Error>{apiError}</Error> : null }
      </Form>
    </Container>
  )
}

export default RatingInformation;