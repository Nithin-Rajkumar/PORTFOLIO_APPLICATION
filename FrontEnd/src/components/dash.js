
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./dash.css";  
// import Navbar from './Navbar';

// const Dash = () => {
//   const [details, setDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [editMode, setEditMode] = useState(false);
//   const [editedDetails, setEditedDetails] = useState({});

//   useEffect(() => { 
//     const fetchDetails = async () => {
//       try { 
//         const token = localStorage.getItem('token');
         
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         };
 
//         const response = await axios.get('http://localhost:8181/api/v1/demo/getcontact/nithinrajkumar792@gmail.com', config);
//         setDetails(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching details:', error);
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, []);
//   const handleDelete = async () => {
//     try {
//       if (!details) {
//         console.error('User details not available for deletion.');
//         return;
//       }
  
//       const token = localStorage.getItem('token');
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };
  
//        await axios.delete(`http://localhost:8181/api/v1/demo/deletecontact/${details.email}`, config);
  
//        setDetails(null);
//     } catch (error) {
//       console.error('Error deleting profile:', error);
//     }
//   };
//    const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // To handle empty input fields and accept null values
//     const newValue = value === '' ? null : value;
  
//     setEditedDetails({ ...editedDetails, [name]: newValue });
//    };
 
//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };

//       // Send the updated details to the backend
//       await axios.put(`http://localhost:8181/api/v1/demo/updatecontact/${details.email}`, editedDetails, config);

//       // Fetch the updated user details from the backend
//       const response = await axios.get(`http://localhost:8181/api/v1/demo/getcontact/${details.email}`, config);
//       setDetails(response.data);
//       setEditMode(false);
//     } catch (error) {
//       console.error('Error updating details:', error);
//     }
//   };
  

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="profile-container">
//         <h1>Profile Page</h1>
//         {editMode ? (
//           <div>
//             <p><strong>Name:</strong> <input type="text" name="name" value={editedDetails.name || details.name} onChange={handleInputChange} /></p>
//             <p><strong>Email:</strong> <input type="text" name="email" value={editedDetails.email || details.email} onChange={handleInputChange} /></p>
//             <p><strong>Phone Number:</strong> <input type="text" name="phoneNo" value={editedDetails.phoneNo || details.phoneNo} onChange={handleInputChange} /></p>
//             <p><strong>Address:</strong> <in put type="text" name="address" value={editedDetails.address || details.address} onChange={handleInputChange} /></p>
//             <p><strong>Project:</strong> <input type="text" name="project" value={editedDetails.project || details.project} onChange={handleInputChange} /></p>
//             <p><strong>Technologies Description:</strong> <input type="text" name="technologies_escription" value={editedDetails.technologies_description || details.technologiesDescription} onChange={handleInputChange} /></p>
//             <p><strong>Project URL:</strong> <input type="text" name="projectUrl" value={editedDetails.projectUrl || details.projectUrl} onChange={handleInputChange} /></p>
//             <p><strong>Skills:</strong> <input type="text" name="skills" value={editedDetails.skills || details.skills} onChange={handleInputChange} /></p>
//             <p> College CGPA:  <input type="text" name="college_cgpa" value={editedDetails.collegeCgpa || details.college_cgpa} onChange={handleInputChange} /></p>
//             <button onClick={handleSave}>Save</button>
//             <button onClick={() => setEditMode(false)}>Cancel</button>
//           </div>
//         ) : (
//             <div>
//              <p><strong>Name:</strong> {details?.name}</p>
//             <p><strong>Email:</strong> {details?.email}</p>
//             <p><strong>Phone Number:</strong> {details?.phoneNo}</p>
//             <p><strong>Address:</strong> {details?.address}</p>
//             <p><strong>Project:</strong> {details?.project}</p>
//             <p><strong>Technologies Description:</strong> {details?.technologiesDescription}</p>
//             <p><strong>Project URL:</strong> {details?.projectUrl}</p>
//             <p><strong>Skills:</strong> {details?.skills}</p>
//             <p><strong>College CGPA:</strong> {details?.collegeCgpa}</p>
//             <button onClick={() => setEditMode(true)}>Edit</button>
//             {details && <button onClick={handleDelete}>Delete</button>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default  Dash;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./dash.css";  
// import Navbar from './Navbar';

// const Dash = () => {
//   const [details, setDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [editMode, setEditMode] = useState(false);
//   const [editedDetails, setEditedDetails] = useState({});

//   useEffect(() => { 
//     const fetchDetails = async () => {
//       try { 
//         const token = localStorage.getItem('token');
         
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         };
 
//         const response = await axios.get('http://localhost:8181/api/v1/demo/getcontact/nithinrajkumar792@gmail.com', config);
//         setDetails(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching details:', error);
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       if (!details) {
//         console.error('User details not available for deletion.');
//         return;
//       }
  
//       const token = localStorage.getItem('token');
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };
  
//       await axios.delete(`http://localhost:8181/api/v1/demo/deletecontact/${details.email}`, config);
  
//       setDetails(null);
//     } catch (error) {
//       console.error('Error deleting profile:', error);
//     }
//   };
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // To handle empty input fields and accept null values
//     const newValue = value === '' ? null : value;
  
//     setEditedDetails({ ...editedDetails, [name]: newValue });
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };

//       // Send the updated details to the backend
//       await axios.put(`http://localhost:8181/api/v1/demo/updatecontact/${details.email}`, editedDetails, config);

//       // Fetch the updated user details from the backend
//       const response = await axios.get(`http://localhost:8181/api/v1/demo/getcontact/${details.email}`, config);
//       setDetails(response.data);
//       setEditMode(false);
//     } catch (error) {
//       console.error('Error updating details:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="profile-container">
//         <h1>My PortFolio</h1>
//         {editMode ? (
//           <div className="profile-details">
//             {/* Each information in a separate box */}
//             <div className="profile-box">
//               <strong>Name:</strong>
//               <input type="text" name="name" value={editedDetails.name || details.name} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>Email:</strong>
//               <input type="text" name="email" value={editedDetails.email || details.email} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>Phone Number:</strong>
//               <input type="text" name="phoneNo" value={editedDetails.phoneNo || details.phoneNo} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>Address:</strong>
//               <input type="text" name="address" value={editedDetails.address || details.address} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>Project:</strong>
//               <input type="text" name="project" value={editedDetails.project || details.project} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>Technologies Description:</strong>
//               <input type="text" name="technologies_description" value={editedDetails.technologies_description || details.technologiesDescription} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>Project URL:</strong>
//               <input type="text" name="projectUrl" value={editedDetails.projectUrl || details.projectUrl} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>Skills:</strong>
//               <input type="text" name="skills" value={editedDetails.skills || details.skills} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <strong>College CGPA:</strong>
//               <input type="text" name="college_cgpa" value={editedDetails.collegeCgpa || details.college_cgpa} onChange={handleInputChange} />
//             </div>
//             <div className="profile-box">
//               <button onClick={handleSave}>Save</button>
//               <button onClick={() => setEditMode(false)}>Cancel</button>
//             </div>
//           </div>
//         ) : (
//           <div className="profile-details">
//             {/* Each information in a separate box */}
//             <div className="profile-box">
//               <strong>Name:</strong> {details?.name}
//             </div>
//             <div className="profile-box">
//               <strong>Email:</strong> {details?.email}
//             </div>
//             <div className="profile-box">
//               <strong>Phone Number:</strong> {details?.phoneNo}
//             </div>
//             <div className="profile-box">
//               <strong>Address:</strong> {details?.address}
//             </div>
//             <div className="profile-box">
//               <strong>Project:</strong> {details?.project}
//             </div>
//             <div className="profile-box">
//               <strong>Technologies Description:</strong> {details?.technologiesDescription}
//             </div>
//             <div className="profile-box">
//               <strong>Project URL:</strong> {details?.projectUrl}
//             </div>
//             <div className="profile-box">
//               <strong>Skills:</strong> {details?.skills}
//             </div>
//             <div className="profile-box">
//               <strong>College CGPA:</strong> {details?.collegeCgpa}
//             </div>
//             <div className="profile-box">
//               <button onClick={() => setEditMode(true)}>Edit</button>
//               {details && <button onClick={handleDelete} className='abc'>Delete</button>}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dash;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./dash.css";  
import Navbar from './Navbar';
import {saveAs} from 'file-saver';
const Dash = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editedDetails, setEditedDetails] = useState({});

  useEffect(() => { 
    const fetchDetails = async () => {
      try { 
        const token = localStorage.getItem('token');
         
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
 
        const response = await axios.get('http://localhost:8181/api/v1/demo/getcontact/nithinrajkumar792@gmail.com', config);
        setDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  const handleDelete = async () => {
    try {
      if (!details) {
        console.error('User details not available for deletion.');
        return;
      }
  
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
  
      await axios.delete(`http://localhost:8181/api/v1/demo/deletecontact/${details.email}`, config);
  
      setDetails(null);
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // To handle empty input fields and accept null values
    const newValue = value === '' ? null : value;
  
    setEditedDetails({ ...editedDetails, [name]: newValue });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      // Send the updated details to the backend
      await axios.put(`http://localhost:8181/api/v1/demo/updatecontact/${details.email}`, editedDetails, config);

      // Update the details state with the editedDetails
      setDetails({ ...details, ...editedDetails });

      setEditMode(false);
    } catch (error) {
      console.error('Error updating details:', error);
    }
  };
  const exportPage = () => {
    const pageContent = document.documentElement.outerHTML;
    localStorage.setItem('portfolioPage', pageContent);
    alert('Portfolio page exported and saved in local storage!');
    const blob = new Blob([pageContent], { type: 'text/html;charset=utf-8' });
  
      // Save the Blob to a file
      saveAs(blob, 'my_portfolio.html');
  
      alert('Portfolio page exported and saved as "my_portfolio.html" in the local disk!');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h1>My Portfolio</h1>
        {editMode ? (
          <div className="profile-details">
            {/* Each information in a separate box */}
            <div className="profile-box">
              <strong>Name:</strong>
              <input type="text" name="name" value={editedDetails.name || details.name} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>Email:</strong>
              <input type="text" name="email" value={editedDetails.email || details.email} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>Phone Number:</strong>
              <input type="text" name="phoneNo" value={editedDetails.phoneNo || details.phoneNo} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>Address:</strong>
              <input type="text" name="address" value={editedDetails.address || details.address} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>Project:</strong>
              <input type="text" name="project" value={editedDetails.project || details.project} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>Technologies Description:</strong>
              <input type="text" name="technologies_description" value={editedDetails.technologies_description || details.technologies_description} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>Project URL:</strong>
              <input type="text" name="projectUrl" value={editedDetails.projectUrl || details.projectUrl} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>Skills:</strong>
              <input type="text" name="skills" value={editedDetails.skills || details.skills} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <strong>College CGPA:</strong>
              <input type="text" name="college_cgpa" value={editedDetails.college_cgpa || details.college_cgpa} onChange={handleInputChange} />
            </div>
            <div className="profile-box">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="profile-details">
            {/* Each information in a separate box */}
            <div className="profile-box">
              <strong>Name:</strong> {details?.name}
            </div>
            <div className="profile-box">
              <strong>Email:</strong> {details?.email}
            </div>
            <div className="profile-box">
              <strong>Phone Number:</strong> {details?.phoneNo}
            </div>
            <div className="profile-box">
              <strong>Address:</strong> {details?.address}
            </div>
            <div className="profile-box">
              <strong>Project:</strong> {details?.project}
            </div>
            <div className="profile-box">
              <strong>Technologies Description:</strong> {details?.technologies_description}
            </div>
            <div className="profile-box">
              <strong>Project URL:</strong> {details?.projectUrl}
            </div>
            <div className="profile-box">
              <strong>Skills:</strong> {details?.skills}
            </div>
            <div className="profile-box">
              <strong>College CGPA:</strong> {details?.college_cgpa}
            </div>
            <div className="profile-box">
              <button onClick={() => setEditMode(true)}>Edit</button>
              {details && <button onClick={handleDelete} className='abc'>Delete</button>}
              {<button onClick={exportPage} className='abc'>export</button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dash;
