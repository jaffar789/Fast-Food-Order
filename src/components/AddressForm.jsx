import React, { useState } from 'react';

const AddressForm = ({ onSubmit, onCancel }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ address, phone });
  };

  return (
    <div className="container">
      <h2>Enter Shipping Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <button type="button" className="btn btn-secondary ml-2" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddressForm;
