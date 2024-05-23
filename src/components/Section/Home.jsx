import MainLayout from '../Layout/MainLayout'


const Home = () => {

  return (
    // <Row gutter={16}>
    //   <Col span={24}>
    //     <Flex justify='start'>
    //       <Link to='/'>
    //         <Button>
    //           Back
    //         </Button>
    //       </Link>
    //     </Flex>
    //   </Col>
    //   <Col span={24}>
    //     <Flex justify='center'>
    //       <Text>Product List</Text>
    //     </Flex>
    //   </Col>
    //   <Col span={24}>
    //     {datas.map(item => (
    //       <div key={item.id}>
    //         <Text onClick={() => getProduct(item.id)} style={{ cursor: 'pointer' }}>{item.name}</Text>
    //         <Text>{item.description}</Text>
    //         <Image src={item.image} style={{ width: 250 }} />
    //       </div>
    //     ))}
    //   </Col>
    //   <Modal
    //     open={isModalVisible}
    //     onCancel={handleCancel}
    //     title={selectedProduct && selectedProduct.name}
    //     footer={null}>
    //     {selectedProduct && (
    //       <>
    //         <Col span={24}>
    //           <Flex justify='center'>
    //             <Image src={selectedProduct.image} style={{ width: 250 }} />
    //           </Flex>
    //           <Text>{selectedProduct.description}</Text>
    //           <Col span={24}>
    //             <Flex justify='center'>
    //             <Text>price: 20.00000</Text>
    //             </Flex>
    //           </Col>
    //         </Col>
    //       </>
    //     )}
    //   </Modal>
    // </Row>
    <MainLayout />
  );
}

export default Home;
