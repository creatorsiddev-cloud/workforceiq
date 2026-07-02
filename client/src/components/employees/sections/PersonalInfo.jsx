import ImageUpload from "../components/ImageUpload";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import DateInput from "../components/DateInput";

function PersonalInfo({
  formData,
  handleChange,
  handleImageChange,
  errors,
}) {
  return (
    <section className="form-section">

      <h2>Personal Information</h2>

      <ImageUpload
        image={formData.profileImage}
        onImageChange={handleImageChange}
      />

      <div className="form-grid">

        <TextInput
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />

        <TextInput
          label="Last Name"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />

        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <TextInput
          label="Phone Number"
          name="phone"
          placeholder="+91 9876543210"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />

        <SelectInput
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            "Male",
            "Female",
            "Other",
          ]}
          error={errors.gender}
          required
        />

        <DateInput
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          error={errors.dob}
          required
        />

      </div>

    </section>
  );
}

export default PersonalInfo;