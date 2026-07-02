import TextInput from "../components/TextInput";

function AddressInfo({
  formData,
  handleChange,
  errors,
}) {
  return (
    <section className="form-section">

      <h2>Address Information</h2>

      <div className="form-grid">

        <TextInput
          label="Street Address"
          name="address"
          placeholder="Enter street address"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
          required
        />

        <TextInput
          label="City"
          name="city"
          placeholder="Mumbai"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
          required
        />

        <TextInput
          label="State"
          name="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={handleChange}
          error={errors.state}
          required
        />

        <TextInput
          label="Country"
          name="country"
          placeholder="India"
          value={formData.country}
          onChange={handleChange}
          error={errors.country}
          required
        />

        <TextInput
          label="ZIP Code"
          name="zipCode"
          placeholder="400001"
          value={formData.zipCode}
          onChange={handleChange}
          error={errors.zipCode}
          required
        />

      </div>

      <div className="section-divider"></div>

      <h2>Emergency Contact</h2>

      <div className="form-grid">

        <TextInput
          label="Contact Name"
          name="emergencyName"
          placeholder="Rahul Sharma"
          value={formData.emergencyName}
          onChange={handleChange}
          error={errors.emergencyName}
          required
        />

        <TextInput
          label="Relationship"
          name="relationship"
          placeholder="Brother"
          value={formData.relationship}
          onChange={handleChange}
          error={errors.relationship}
          required
        />

        <TextInput
          label="Emergency Phone"
          name="emergencyPhone"
          placeholder="+91 9876543210"
          value={formData.emergencyPhone}
          onChange={handleChange}
          error={errors.emergencyPhone}
          required
        />

      </div>

    </section>
  );
}

export default AddressInfo;