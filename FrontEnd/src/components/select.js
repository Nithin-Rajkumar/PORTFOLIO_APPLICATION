// import React from 'react';
// import { TextField, Grid, Button, IconButton } from '@material-ui/core';
// import { AddCircleOutline, DeleteOutline } from '@material-ui/icons';
// import Navbar from './Navbar';
// import './PortfolioForm.css'; // Import custom CSS file for styling

// const PortfolioForm = () => {
//   const [projects, setProjects] = React.useState([{ title: '', description: '', role: '', tools: '' }]);
//   const [references, setReferences] = React.useState([{ name: '', position: '', contact: '' }]);

//   const handleProjectChange = (index, field, value) => {
//     const updatedProjects = [...projects];
//     updatedProjects[index][field] = value;
//     setProjects(updatedProjects);
//   };

//   const handleReferenceChange = (index, field, value) => {
//     const updatedReferences = [...references];
//     updatedReferences[index][field] = value;
//     setReferences(updatedReferences);
//   };

//   const handleAddProject = () => {
//     setProjects([...projects, { title: '', description: '', role: '', tools: '' }]);
//   };

//   const handleRemoveProject = (index) => {
//     const updatedProjects = [...projects];
//     updatedProjects.splice(index, 1);
//     setProjects(updatedProjects);
//   };

//   const handleAddReference = () => {
//     setReferences([...references, { name: '', position: '', contact: '' }]);
//   };

//   const handleRemoveReference = (index) => {
//     const updatedReferences = [...references];
//     updatedReferences.splice(index, 1);
//     setReferences(updatedReferences);
//   };

//   return (
//     <div className="portfolio-form" style={{ backgroundColor: '#fef9f966' }}>
//       <Navbar />
//       <form>
//         <Grid container spacing={3} justify="center" alignItems="center">
//           {/* Personal Information */}
//           <Grid item xs={12} sm={4}>
//             <TextField label="Full Name" fullWidth required color="white" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Email" fullWidth required type="email" color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Phone Number" fullWidth required type="tel" color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Address" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Website" fullWidth color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* Objective */}
//           <Grid item xs={12}>
//             <TextField label="Objective" fullWidth multiline rows={3} required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* Education */}
//           <Grid item xs={12} sm={4}>
//             <TextField label="Degree/Certification" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Institution/University" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Year of Graduation" fullWidth required type="number" color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Relevant Courses or Specializations" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* Work Experience */}
//           <Grid item xs={12}>
//             <TextField label="Work Experience" fullWidth multiline rows={3} required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* Skills */}
//           <Grid item xs={12} sm={4}>
//             <TextField label="Technical Skills" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Soft Skills" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* Projects */}
//           <Grid item xs={12}>
//             <h4>Projects</h4>
//             {projects.map((project, index) => (
//               <div key={index}>
//                 <TextField
//                   label="Project Title"
//                   fullWidth
//                   required
//                   value={project.title}
//                   onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
//                   color="secondary"
//                   InputProps={{ style: { color: 'white' } }}
//                 />
//                 <TextField
//                   label="Description"
//                   fullWidth
//                   multiline
//                   rows={3}
//                   required
//                   value={project.description}
//                   onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
//                   color="secondary"
//                   InputProps={{ style: { color: 'white' } }}
//                 />
//                 <TextField
//                   label="Role/Contribution"
//                   fullWidth
//                   required
//                   value={project.role}
//                   onChange={(e) => handleProjectChange(index, 'role', e.target.value)}
//                   color="secondary"
//                   InputProps={{ style: { color: 'white' } }}
//                 />
//                 <TextField
//                   label="Technologies/Tools Used"
//                   fullWidth
//                   required
//                   value={project.tools}
//                   onChange={(e) => handleProjectChange(index, 'tools', e.target.value)}
//                   color="secondary"
//                   InputProps={{ style: { color: 'white' } }}
//                 />
//                 {index !== 0 && (
//                   <IconButton onClick={() => handleRemoveProject(index)}>
//                     <DeleteOutline />
//                   </IconButton>
//                 )}
//               </div>
//             ))}
//             <IconButton onClick={handleAddProject}>
//               <AddCircleOutline />
//             </IconButton>
//           </Grid>

//           {/* Certifications/Awards */}
//           <Grid item xs={12} sm={4}>
//             <TextField label="Certification/Award Title" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Issuing Organization" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="Year Obtained" fullWidth required type="number" color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* References */}
//           <Grid item xs={12}>
//             <h4>References</h4>
//             {references.map((reference, index) => (
//               <div key={index}>
//                 <TextField
//                   label="Name"
//                   fullWidth
//                   required
//                   value={reference.name}
//                   onChange={(e) => handleReferenceChange(index, 'name', e.target.value)}
//                   color="secondary"
//                   InputProps={{ style: { color: 'white' } }}
//                 />
//                 <TextField
//                   label="Position"
//                   fullWidth
//                   required
//                   value={reference.position}
//                   onChange={(e) => handleReferenceChange(index, 'position', e.target.value)}
//                   color="secondary"
//                   InputProps={{ style: { color: 'white' } }}
//                 />
//                 <TextField
//                   label="Contact Information"
//                   fullWidth
//                   required
//                   value={reference.contact}
//                   onChange={(e) => handleReferenceChange(index, 'contact', e.target.value)}
//                   color="secondary"
//                   InputProps={{ style: { color: 'white' } }}
//                 />
//                 {index !== 0 && (
//                   <IconButton onClick={() => handleRemoveReference(index)}>
//                     <DeleteOutline />
//                   </IconButton>
//                 )}
//               </div>
//             ))}
//             <IconButton onClick={handleAddReference}>
//               <AddCircleOutline />
//             </IconButton>
//           </Grid>

//           {/* Additional Information */}
//           <Grid item xs={12}>
//             <TextField label="Additional Information" fullWidth multiline rows={3} color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* Social Media Links */}
//           <Grid item xs={12} sm={4}>
//             <TextField label="LinkedIn Profile URL" fullWidth color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField label="GitHub Profile URL" fullWidth color="secondary" InputProps={{ style: { color: 'white' } }} />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" type="submit">
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default PortfolioForm;
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import "./select.css"; 
// import axios from "axios";

// const Add = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phoneNo: "",
//     email: "",
//     address: "",
   
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("You need to log in to perform this action.");
//         return;
//       }
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.post(
//         "http://localhost:8181/api/v1/demo/addcontacts",
//         //formData,
//         config
//       );
//       console.log(response.data);
//       setFormData({
//         name: "",
//         phoneNo: "",
//         email: "",
//         address: "",
       
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className="imgs">
//         <Navbar />
//         <div>
//           <div></div>
//           <div className="signup-form">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text1"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Phone</label>
//                 <input
//                   type="tel"
//                   name="phoneNo"
//                   value={formData.phoneNo}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email1"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Address</label>
//                 <input
//                   type="text1"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

              

//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import "./select.css"; 
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const Add = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     phoneNo: "",
//     email: "",
//     project: "",
//     technologies: "",
//     discription: "",
//     projectUrl: "",
//     skills: "",
//     college: "",
//     cgpa: "",
   
//   });

//   const handleChange = (e) => {

//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("You need to log in to perform this action.");
//         return;
//       }
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.post(
//         "http://localhost:8181/api/v1/demo/addcontacts",
        
//         formData,
//         config
//       );
//        navigate("/get");
//       console.log(response.data);
//       setFormData({
//         name: "",
//         phoneNo: "",
//         email: "",
//         project: "",
//         technologies: "",
//         discription: "",
        
//         projectUrl: "",
//         skills: "",
//         college: "",
//         cgpa: "",
       
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className="imgs">
//         <Navbar />
//         <div>
//           <div></div>
//           <div className="signup-form">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text1"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Phone</label>
//                 <input
//                   type="tel"
//                   name="phoneNo"
//                   value={formData.phoneNo}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email1"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Project</label>
//                 <input
//                   type="text1"
//                   name="project"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>technologies</label>
//                 <input
//                   type="text1"
//                   name="technologies"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Discription</label>
//                 <input
//                   type="text1"
//                   name="discription"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>ProjectUrl</label>
//                 <input
//                   type="text1"
//                   name="ProjectUrl"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Skills</label>
//                 <input
//                   type="text1"
//                   name="skills"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>College</label>
//                 <input
//                   type="text1"
//                   name="college"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>CGPA</label>
//                 <input
//                   type="text1"
//                   name="cgpa"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

              
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;
import React, { useState } from "react";
import Navbar from "./Navbar";
import "./select.css"; 
import axios from "axios";
import { NavLink } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    project: "",
    technologies: "",
    discription: "",
    projectUrl: "",
    skills: "",
    college: "",
    cgpa: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("You need to log in to perform this action.");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:8181/api/v1/demo/addcontacts",
        formData,
        config
      );
      console.log(response.data);
      setFormData({
        name: "",
        phoneNo: "",
        email: "",
        project: "",
        technologies: "",
        discription: "",
        projectUrl: "",
        skills: "",
        college: "",
        cgpa: "",
       
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="imgs">
        <Navbar />
        <div>
          <div></div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text1"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Project</label>
                <input
                  type="text1"
                  name="project"
                  value={formData.Project}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>technologies</label>
                <input
                  type="text1"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Discription</label>
                <input
                  type="text1"
                  name="discription"
                  value={formData.discription}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ProjectUrl</label>
                <input
                  type="text1"
                  name="ProjectUrl"
                  value={formData.project_url}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Skills</label>
                <input
                  type="text1"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>College</label>
                <input
                  type="text1"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>CGPA</label>
                <input
                  type="text1"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>

              

              
              <NavLink to="/get"><button type="submit" className="aaa">Get Template</button></NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;