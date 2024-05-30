import PropTypes from "prop-types";
import { Form, Input, Select } from "antd";


const FormInput = (props) => {
  const { name } = props

  const prefixNumber = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="88">+88</Option>
        <Option value="89">+89</Option>
        <Option value="90">+90</Option>
      </Select>
    </Form.Item>
  )

  return (
    <>
      {name === 'username' && (
        <Form.Item
          name='username'
          label='username'
          rules={[
            { required: true, message: "Please Input Your username!" },
            { type: "text", message: "Please Input Your username!" },
          ]}
        >
          <Input placeholder="Input Username"/>
        </Form.Item>
      )}
       {name === 'phoneNumber' && (
        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[
            { required: true, message: "Please Input Your Phone Number!" },
            { type: "number", message: "Please Input Your Phone Number!" },
          ]}
        >
          <Input addonBefore={prefixNumber} placeholder="Input Phone Number"/>
        </Form.Item>
      )}
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
