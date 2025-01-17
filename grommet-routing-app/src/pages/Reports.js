import React, { useState } from "react";
import { Box, Button, DataTable, Layer, TextInput, Text, FormField } from "grommet";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([
    { id: 1, title: "Quarterly Health Report", date: "2025-01-01" },
    { id: 2, title: "Annual Summary", date: "2025-01-10" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: null, title: "", date: "" });
  const [isEdit, setIsEdit] = useState(false);

  const resetForm = () => {
    setFormData({ id: null, title: "", date: "" });
    setIsEdit(false);
  };

  const handleAddEdit = () => {
    if (isEdit) {
      setReports((prev) =>
        prev.map((report) => (report.id === formData.id ? formData : report))
      );
    } else {
      setReports((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    resetForm();
  };

  const handleDelete = (id) => {
    setReports((prev) => prev.filter((report) => report.id !== id));
  };

  return (
    <Box pad="medium">
      <Box direction="row" justify="between" align="center" margin={{ bottom: "medium" }}>
        <Text size="large" weight="bold">
          Reports
        </Text>
        {/* Back Button Positioned on the Right */}
        <Button label="Back" onClick={() => navigate(-1)} />
      </Box>

      <Button label="Generate Report" onClick={() => setShowForm(true)} primary margin={{ bottom: "medium" }} />
      <DataTable
        columns={[
          { property: "title", header: "Title", primary: true },
          { property: "date", header: "Date" },
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
        data={reports}
        size="medium"
      />

      {showForm && (
        <Layer
          onEsc={() => { setShowForm(false); resetForm(); }}
          onClickOutside={() => { setShowForm(false); resetForm(); }}
        >
          <Box pad="medium" gap="small" width="medium">
            <Text size="large" weight="bold" margin={{ bottom: "small" }}>
              {isEdit ? "Edit Report" : "Generate Report"}
            </Text>
            <FormField label="Report Title">
              <TextInput
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </FormField>
            <FormField label="Date">
              <TextInput
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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

export default Reports;