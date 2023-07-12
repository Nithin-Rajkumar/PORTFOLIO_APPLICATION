import React from 'react';
import { Link } from 'react-router-dom';
import './templateselection.css';
import t1 from './t1.avif';
import t2 from './t2.avif';
import t3 from './t3.avif';
import t4 from './t4.jpg';
import t5 from './t5.jpg';
import t6 from './t6.webp';
import t7 from './t7.avif';
import t8 from './t8.avif';
import t9 from './t9.png';
import t10 from './t10.webp';
import t11 from './t11.jpg';
import t12 from './t12.png';
import t13 from './t13.png';
import t14 from './t14.jpg';
import t15 from './t15.jpg';
const TemplateSelection = () => {
  const templates = [
    {
      id: 1,
      name: 'Basic',
      description: 'A modern and clean template with a minimalist design.',
      image: t1,
    },
    {
      id: 2,
      name: 'Simple',
      description: 'A creative and colorful template to showcase your work.',
      image:  t2,
    },
    {
      id: 3,
      name: 'Pro',
      description: 'A professional and elegant template for a sophisticated portfolio.',
      image: t3,
    },
    {
      id: 4,
      name: 'Template 4',
      description: 'A bold and dynamic template to make your portfolio stand out.',
      image: t4,
    },
    {
      id: 5,
      name: 'Template 5',
      description: 'A clean and minimalist template with a focus on typography.',
      image:  t5,
    },
    {
      id: 6,
      name: 'Template 6',
      description: 'An artistic and visually appealing template for creative portfolios.',
      image: t6,
    },
    {
      id: 7,
      name: 'Template 7',
      description: 'A sleek and professional template for showcasing your skills.',
      image: t7,
    },
    {
      id: 8,
      name: 'Template 8',
      description: 'A vibrant and modern template with a playful design.',
      image: t8,
    },
    {
      id: 9,
      name: 'Template 9',
      description: 'An elegant and minimalist template for a refined portfolio.',
      image: t9,
    },
    {
      id: 10,
      name: 'Template 10',
      description: 'A clean and professional template with a focus on content.',
      image: t10,
    },
    {
        id: 11,
        name: 'Template 11',
        description: 'A clean and minimalist template with a focus on typography.',
        image: t11,
    },
    {
        id: 12,
        name: 'Template 12',
        description: 'A bold and dynamic template to make your portfolio stand out.',
        image: t12,
    },
    {
        id: 13,
        name: 'Template 13',
        description: 'A bold and dynamic template to make your portfolio stand out.',
        image: t13,
    },
    {
        id: 14,
        name: 'Template 14',
        description: 'A bold and dynamic template to make your portfolio stand out.',
        image: t14,
    },
    {
        id: 15,
        name: 'Template 15',
        description: 'A bold and dynamic template to make your portfolio stand out.',
        image: t15,
    }

  ];

  return (
    <div className="create-portfolio">
      <div className="create-portfolio-header">
        <h1 className="create-portfolio-title">Create Your Portfolio</h1>
        <p className="create-portfolio-description">Choose a template and start building your professional portfolio.</p>
      </div>
      <div className="create-portfolio-templates">
        {templates.map((template) => (
          <div className="create-portfolio-template" key={template.id}>
            <div className="template-image">
              <img src={template.image} alt={template.name} />
            </div>
            <div className="template-details">
              <h2 className="template-name">{template.name}</h2>
              <p className="template-description">{template.description}</p>
              <Link to={`/template/${template.id}`} className="template-link">Select Template</Link>
            </div>
          </div>
        ))}
      </div>
      <footer className="homepage-footer">
        <p>© 2023 Portfolio Builder. All rights reserved.</p><br/>
        <p>Contact : PortFolio Builder Owner NITHIN R . CopyRight Ensured</p>
      </footer>
    </div>
  );
};

export default TemplateSelection;
