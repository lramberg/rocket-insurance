import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

const RatingInformation = (props) => {
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
  })

  const handleSubmit = () => {
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
    props.handleCreateQuote(data);
    history.push('/quote-overview');
  }

  return (
    <div>
      <h1>Rocket Insurance</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Input 
          placeholder='First Name'
          value={nameState.firstName}
          onChange={(e) => {
            setNameState({
              ...nameState,
              firstName: e.target.value
            })
          }}
        />
        <Input 
          placeholder='Last Name'
          value={nameState.lastName}
          onChange={(e) => {
            setNameState({
              ...nameState,
              lastName: e.target.value
            })
          }}
        />
        <Input 
          placeholder='Address Line 1'
          value={addressState.line1}
          onChange={(e) => {
            setAddressState({
              ...addressState,
              line1: e.target.value
            })
          }}
        />
        <Input 
          placeholder='Address Line 2'
          value={addressState.line2}
          onChange={(e) => {
            setAddressState({
              ...addressState,
              line2: e.target.value
            })
          }}
        />
        <Input 
          placeholder='City'
          value={addressState.city}
          onChange={(e) => {
            setAddressState({
              ...addressState,
              city: e.target.value
            })
          }}
        />
        <Input 
          placeholder='Region'
          value={addressState.region}
          onChange={(e) => {
            setAddressState({
              ...addressState,
              region: e.target.value
            })
          }}
        />
        <Input 
          placeholder='Postal'
          value={addressState.postal}
          onChange={(e) => {
            setAddressState({
              ...addressState,
              postal: e.target.value
            })
          }}
        />
        <SubmitButton onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default RatingInformation;