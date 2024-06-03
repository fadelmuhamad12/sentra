import { Layout } from 'antd';
import PropTypes from 'prop-types';

const Content = (props) => { 
  const { children } = props
  return (
    <Layout.Content style={{ margin: '16px 0px 0', minHeight: '100%' }}>
      {children}
    </Layout.Content>
    
  )
}

Content.propTypes = {
  children: PropTypes.element,
}

export default Content