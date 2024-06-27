import React, { useState } from "react";
import "./ServiceMaster.css";
import "./Layout";
const ServiceMaster = () => {
  const [services, setServices] = useState([
    { id: 1, geoId: "GEO001", geoName: "Geo One", geoType: "Type A" },
    { id: 2, geoId: "GEO002", geoName: "Geo Two", geoType: "Type B" },
  ]);
  const [newGeoId, setNewGeoId] = useState("");
  const [newGeoName, setNewGeoName] = useState("");
  const [newGeoType, setNewGeoType] = useState("");
  const [search, setSearch] = useState("");

  const addService = () => {
    if (newGeoId.trim() && newGeoName.trim() && newGeoType.trim()) {
      setServices([
        ...services,
        {
          id: Date.now(),
          geoId: newGeoId,
          geoName: newGeoName,
          geoType: newGeoType,
        },
      ]);
      setNewGeoId("");
      setNewGeoName("");
      setNewGeoType("");
    }
  };

  const removeService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const filteredServices = services.filter(
    (service) =>
      service.geoName.toLowerCase().includes(search.toLowerCase()) ||
      service.geoId.toLowerCase().includes(search.toLowerCase()) ||
      service.geoType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Container">
      <table class="table">
        <div className="First-Table">
          <div className="Details">
            <h4>Geo Details</h4>
            <div className="right-side">
              <div className="Search">
                <input
                  className="Input"
                  type="text"
                  placeholder="Search services"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="Search1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </div>
              </div>
              <div className="Add">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </div>

              <div className="Delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </div>
              <div className="Dowload">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </div>
              <div className="Up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                  />
                </svg>
              </div>
              <div></div>
            </div>
          </div>

          <div className="Geo-Table-Head">
            <thead>
              <tr className="Geo-Table-Row">
                <th scope="col">No</th>
                <th scope="col">Geo ID</th>
                <th scope="col">Geo Name</th>
                <th scope="col">Geo Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
          </div>
          <tbody>
            <div className="Geo-Table-Body">
              {filteredServices.map((service, index) => (
                <tr className="Geo-Table-Description" key={service.id}>
                  <td>{index + 1}</td>
                  <td>{service.geoId}</td>
                  <td>{service.geoName}</td>
                  <td>{service.geoType}</td>
                  <td>
                    <div className="Edit-Delete">
                      <div className="Edit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                      </div>
                      <button
                        className="Trash"
                        onClick={() => removeService(service.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </div>
          </tbody>
        </div>
      </table>
      <h4>Add a new service</h4>
      <input
        type="text"
        placeholder="Geo ID"
        value={newGeoId}
        onChange={(e) => setNewGeoId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Geo Name"
        value={newGeoName}
        onChange={(e) => setNewGeoName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Geo Type"
        value={newGeoType}
        onChange={(e) => setNewGeoType(e.target.value)}
      />
      <button onClick={addService}>Add Service</button>
    </div>
  );
};

export default ServiceMaster;
