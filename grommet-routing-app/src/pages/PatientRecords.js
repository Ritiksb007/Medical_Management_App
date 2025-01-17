import React, { useState } from "react";
import { Box, Button, DataTable, Layer, TextInput, Text, FormField } from "grommet";
import { useNavigate } from "react-router-dom";

const PatientRecords = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 45, condition: "Diabetes" },
    { id: 2, name: "Jane Smith", age: 32, condition: "Hypertension" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: "", age: "", condition: "" });
  const [isEdit, setIsEdit] = useState(false);

  const resetForm = () => {
    setFormData({ id: null, name: "", age: "", condition: "" });
    setIsEdit(false);
  };

  const handleAddEdit = () => {
    if (isEdit) {
      setPatients((prev) =>
        prev.map((patient) => (patient.id === formData.id ? formData : patient))
      );
    } else {
      setPatients((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    resetForm();
  };

  const handleDelete = (id) => {
    setPatients((prev) => prev.filter((patient) => patient.id !== id));
  };

  return (
    <Box pad="medium">
      <Box direction="row" justify="between" align="center" margin={{ bottom: "medium" }}>
        <Text size="large" weight="bold">
          Patient Records
        </Text>
        {/* Back Button Positioned on the Right */}
        <Button label="Back" onClick={() => navigate(-1)} />
      </Box>

      <Button label="Add Patient" onClick={() => setShowForm(true)} primary margin={{ bottom: "medium" }} />
      <DataTable
        columns={[
          { property: "name", header: "Name", primary: true },
          { property: "age", header: "Age" },
          { property: "condition", header: "Condition" },
          {
            property: "actions",
            header: "Actions",
            render: (data) => (
              <Box direction="row" gap="small">
                <Button label="Edit" onClick={() => { setFormData(data); setIsEdit(true); setShowForm(true); }} />
                <Button label="Delete" onClick={() => handleDelete(data.id)} color="status-critical" />
              </Box>
            ),
          },
        ]}
        data={patients}
        size="medium"
      />

      {showForm && (
        <Layer
          onEsc={() => { setShowForm(false); resetForm(); }}
          onClickOutside={() => { setShowForm(false); resetForm(); }}
        >
          <Box pad="medium" gap="small" width="medium">
            <Text size="large" weight="bold" margin={{ bottom: "small" }}>
              {isEdit ? "Edit Patient" : "Add Patient"}
            </Text>
            <FormField label="Name">
              <TextInput
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </FormField>
            <FormField label="Age">
              <TextInput
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </FormField>
            <FormField label="Condition">
              <TextInput
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              />
            </FormField>
            <Box direction="row" gap="small" justify="end" margin={{ top: "medium" }}>
              <Button label="Cancel" onClick={() => { setShowForm(false); resetForm(); }} />
              <Button label={isEdit ? "Update" : "Add"} onClick={handleAddEdit} primary />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default PatientRecords;