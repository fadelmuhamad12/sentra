import PropTypes from 'prop-types';
import { Row, Col, Table, Pagination, Typography } from 'antd';

const { Text } = Typography;

const TableComponent = (props) => {
  const { dataSource, columns, count, limit, page, loading, expandable, onChange, scroll, rowSelection, empty, onChangeTable } = props;

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Row style={{ border: '1px solid #DDE1E4', borderRadius: 8 }}>
          <Col span={24}>
            <Table style={{ borderBottom: 'none' }}
              rowKey={(i) => (i.id ? i.id : i._id)}
              loading={loading}
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              expandable={expandable}
              onChange={onChangeTable}
              scroll={scroll}
              rowSelection={rowSelection}
              locale={{emptyText: empty}}
            />
          </Col>
          <Col span={4}
            style={{
              background: '#F9F9FA',
              borderBottomLeftRadius: 8,
              borderRight: 'none',
              display: 'flex',
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text type='gray-09'>Showing {dataSource?.length} rows</Text>
          </Col>
          <Col span={20}
            style={{
              background: '#F9F9FA',
              borderLeft: 'none',
              borderBottomRightRadius: 8,
              height: 70,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '0px 10px',
            }}>
            {/* <Pagination onChange={onChange} current={Number(page)} total={count} pageSize={Number(limit)}/> */}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

TableComponent.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
  count: PropTypes.number,
  limit: PropTypes.any,
  page: PropTypes.any,
  loading: PropTypes.bool,
  expandable: PropTypes.object,
  onChange: PropTypes.func,
  scroll: PropTypes.object,
  rowSelection: PropTypes.object,
  empty: PropTypes.string,
  onChangeTable: PropTypes.func
};

export default TableComponent;
