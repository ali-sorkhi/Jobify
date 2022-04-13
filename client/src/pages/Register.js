import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "ورود" : "ثبت نام"}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="نام"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="ایمیل"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="کلمه عبور"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          ورود
        </button>
        <p>
          {values.isMember ? "هنوز ثبت نام نکردی؟" : "قبلاً ثبت نام کردی؟"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "ثبت نام" : "ورود"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
