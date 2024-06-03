import { Layout } from 'antd';
import PropTypes from 'prop-types';

const Content = (props) => { 
  const { children } = props
  return (
    <Layout.Content style={{ margin: '25px 0px 0', minHeight: '25vw' }}>
      {children}
    </Layout.Content>
    
  )
}

Content.propTypes = {
  children: PropTypes.element,
}

export default Content