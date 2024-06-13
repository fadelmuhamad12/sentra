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
          <Input placeholder="Input Username" />
        </Form.Item>
      )}
      {name === 'phoneNumber' && (
        <Form.Item
          name='phone'
          label='Phone Number'>
          <Input addonBefore={prefixNumber} placeholder="Input Phone Number" />
        </Form.Item>
      )}

      {name === 'address' && (
        <Form.Item
          name='address'
          label='address'
          rules={[
            { required: true, message: "Please Input Your Address!" },
            { type: "text", message: "Please Input Your Address!" },
          ]}
        >
          <Input placeholder="Address" />
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
          <Input placeholder="Input Email" />
        </Form.Item>
      )}

      {name === "password" && (
        <Form.Item
          validateFirst
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Please input your password!" },
            {
              // pattern:
              //   /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!\-_?&]).{8,}(?<!\s)$/,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Input password" />
        </Form.Item>
      )}
    </>
  )
}
FormInput.propTypes = {
  name: PropTypes.string,
};

export default FormInput
