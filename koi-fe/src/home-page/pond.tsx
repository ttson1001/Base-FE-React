import { Button, Form, Modal, Input, Row, Col, Card } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface PondType {
  pondId: string;
  name: string;
  volume: number;
  depth: number;
  drainCount: number;
  pumpingCapacity: number;
}

const Pond: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [ponds, setPonds] = useState<PondType[]>([]);
  const [editingPond, setEditingPond] = useState<PondType | null>(null);
  const navigate = useNavigate();

  const showModal = (pond?: PondType) => {
    setEditingPond(pond || null);
    if (pond) {
      form.setFieldsValue(pond); // Populate the form if editing
    } else {
      form.resetFields(); // Reset form if adding new pond
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const values = form.getFieldsValue();
    if (editingPond) {
      // Update existing pond
      setPonds(
        ponds.map((p) => (p.pondId === editingPond.pondId ? values : p))
      );
    } else {
      // Add new pond
      setPonds([...ponds, { ...values, pondId: Date.now().toString() }]); // Generate a unique pondId
    }
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-64 flex justify-center items-center"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhoXLO2j6Gw3QKFmiGV_qYIOHigk1gZoKfw&s)",
        }}
      >
        <span className="text-5xl font-bold text-white">My Pond</span>
      </div>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        size="large"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
        }}
        onClick={() => showModal()}
      />

      {/* Display Pond Cards */}
      <div className="p-4">
        <Row gutter={16}>
          {ponds.map((pond) => (
            <Col span={8} key={pond.pondId}>
              <Card
                className="shadow-xl"
                title={pond.name}
                extra={<Button onClick={() => showModal(pond)}>Edit</Button>}
                style={{ width: 300 }}
              >
                <p>Volume: {pond.volume} liters</p>
                <p>Depth: {pond.depth} meters</p>
                <p>Drain Count: {pond.drainCount}</p>
                <p>Pumping Capacity: {pond.pumpingCapacity}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal for Add/Edit Pond */}
      <Modal
        title="Add/Edit Pond"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form layout="vertical" form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Pond Id"
                name="pondId"
                rules={[{ required: true, message: "Please enter pond id!" }]}
              >
                <Input
                  placeholder="Enter pond id"
                  disabled={editingPond !== null}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter pond name!" }]}
              >
                <Input placeholder="Enter pond name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Volume (liters)"
                name="volume"
                rules={[
                  { required: true, message: "Please enter pond volume!" },
                ]}
              >
                <Input placeholder="Enter volume in liters" type="number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Depth (meters)"
                name="depth"
                rules={[
                  { required: true, message: "Please enter pond depth!" },
                ]}
              >
                <Input placeholder="Enter depth in meters" type="number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Drain Count"
                name="drainCount"
                rules={[
                  { required: true, message: "Please enter drain count!" },
                ]}
              >
                <Input placeholder="Enter drain count" type="number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Pumping Capacity"
                name="pumpingCapacity"
                rules={[
                  { required: true, message: "Please enter pumping capacity!" },
                ]}
              >
                <Input placeholder="Enter pumping capacity" type="number" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Pond;
