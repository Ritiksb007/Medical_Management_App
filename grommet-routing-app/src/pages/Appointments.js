import React, { useState } from "react";
import { Box, Button, DataTable, Layer, TextInput, Text, FormField } from "grommet";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", date: "2025-01-20", time: "10:00 AM" },
    { id: 2, patientName: "Jane Smith", date: "2025-01-21", time: "11:00 AM" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: null, patientName: "", date: "", time: "" });
  const [isEdit, setIsEdit] = useState(false);

  const resetForm = () => {
    setFormData({ id: null, patientName: "", date: "", time: "" });
    setIsEdit(false);
  };

  const handleAddEdit = () => {
    if (isEdit) {
      setAppointments((prev) =>
        prev.map((appointment) => (appointment.id === formData.id ? formData : appointment))
      );
    } else {
      setAppointments((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    resetForm();
  };

  const handleDelete = (id) => {
    setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
  };

  return (
    <Box pad="medium">
      <Box direction="row" justify="between" align="center" margin={{ bottom: "medium" }}>
        <Text size="large" weight="bold">
          Appointments
        </Text>
        {/* Back Button Positioned on the Right */}
        <Button label="Back" onClick={() => navigate(-1)} />
      </Box>

      <Button label="Add Appointment" onClick={() => setShowForm(true)} primary margin={{ bottom: "medium" }} />
      <DataTable
        columns={[
          { property: "patientName", header: "Patient Name", primary: true },
          { property: "date", header: "Date" },
          { property: "time", header: "Time" },
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
        data={appointments}
        size="medium"
      />

      {showForm && (
        <Layer
          onEsc={() => { setShowForm(false); resetForm(); }}
          onClickOutside={() => { setShowForm(false); resetForm(); }}
        >
          <Box pad="medium" gap="small" width="medium">
            <Text size="large" weight="bold" margin={{ bottom: "small" }}>
              {isEdit ? "Edit Appointment" : "Add Appointment"}
            </Text>
            <FormField label="Patient Name">
              <TextInput
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              />
            </FormField>
            <FormField label="Date">
              <TextInput
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </FormField>
            <FormField label="Time">
              <TextInput
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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

export default Appointments;