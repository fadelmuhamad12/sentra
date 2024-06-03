import { Modal } from 'antd'
import React from 'react'

const ModalPayment = (props) => {
  const { open, onCancel } = props

  return (
    <Modal
      visible={open}
      onCancel={onCancel}
      footer={null} // Remove footer buttons if not needed
    >
      tes
    </Modal>
  )
}

export default ModalPayment
