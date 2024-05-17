import PropTypes from "prop-types";
import { Form, Input } from "antd";


const FormInput = (props) => {
  const { name } = props
  return (
    <>
      {name === 'email' && (
        <Form.Item
          name='email'
          label='email'
          rules={[
            { required: true, message: "Please Input Your email!" },
            { type: "email", message: "Please Input Your email!" },
          ]}
        >
          <Input placeholder="Input Email"/>
        </Form.Item>
      )}

      {name === "password" && (
        <Form.Item
          validateFirst
          name="password"
          label="Password"
          rules={[
            { required: true, message: "password wajib di isi!" },
            { min: 8, message: "Masukkan password dengan benar!" },
            {
              pattern:
                /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!\-_?&]).{8,}(?<!\s)$/,
              message: "Masukkan password dengan benar!",
            },
          ]}
        >
          <Input.Password placeholder="Masukkan password" />
        </Form.Item>
      )}
    </>
  )
}
FormInput.propTypes = {
  name: PropTypes.string,
};

export default FormInput
