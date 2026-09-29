const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createCV() {
  const doc = await PDFDocument.create();
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  function addPage() {
    return doc.addPage([595.28, 841.89]); // A4
  }

  // --- Page 1 ---
  let page = addPage();
  const { width, height } = page.getSize();
  let y = height - 50;

  // Header
  page.drawText('Datshin Abinanth Raj N H', { x: 50, y, size: 22, font: fontBold, color: rgb(0.1, 0.1, 0.15) });
  y -= 20;
  page.drawText('AI Trainer @micro1 | Human Data & Model Evaluation | AI Tech Team Lead @HappyVerse Finland', { x: 50, y, size: 10, font: fontBold, color: rgb(0.4, 0.3, 0.8) });
  y -= 14;
  page.drawText('Pasila, Helsinki, Finland  •  +358 46 5752287  •  abinanth28@gmail.com  •  linkedin.com/in/datshin-abinanth-raj-n-h-a09144176', { x: 50, y, size: 8.5, font: fontRegular, color: rgb(0.3, 0.3, 0.35) });
  y -= 15;

  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.85),
  });
  y -= 25;

  // Summary
  page.drawText('SUMMARY', { x: 50, y, size: 12, font: fontBold, color: rgb(0.2, 0.2, 0.25) });
  y -= 16;
  const summaryLines = [
    "I work at the intersection of human data, AI evaluation, and operational quality. Currently an AI Trainer at micro1,",
    "where I evaluate model outputs against structured rubrics, judging accuracy, consistency, and edge-case behavior to",
    "improve the quality of human feedback datasets used to train large language models.",
    "Before AI, I spent 10+ years as a structural CAD and BIM specialist across India, Germany, and the UK, working in",
    "AutoCAD, Revit, Tekla, Navisworks, and AllPlan. On the surface that's drafting—in practice it's data quality, validation,",
    "and workflow management at scale, where a single inconsistency downstream means real cost. That QA-first mindset",
    "is what I bring to human data operations today.",
    "I'm now completing a BBA in Information Technology at Haaga-Helia University of Applied Sciences in Helsinki,",
    "focusing on data, software, and AI systems. Open to roles in human data, AI operations, and annotation management."
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: 50, y, size: 9, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    y -= 13;
  }
  y -= 15;

  // Experience
  page.drawText('EXPERIENCE', { x: 50, y, size: 12, font: fontBold, color: rgb(0.2, 0.2, 0.25) });
  y -= 18;

  function renderJob(company, role, period, location, bullets) {
    if (y < 90) {
      page = addPage();
      y = height - 50;
    }
    page.drawText(company, { x: 50, y, size: 11, font: fontBold, color: rgb(0.1, 0.1, 0.15) });
    page.drawText(`${period} | ${location}`, { x: width - 240, y, size: 8.5, font: fontRegular, color: rgb(0.45, 0.45, 0.5) });
    y -= 14;
    page.drawText(role, { x: 50, y, size: 9.5, font: fontOblique, color: rgb(0.35, 0.25, 0.7) });
    y -= 14;
    for (const b of bullets) {
      if (y < 70) {
        page = addPage();
        y = height - 50;
      }
      page.drawText('•', { x: 55, y, size: 9, font: fontBold, color: rgb(0.4, 0.3, 0.8) });
      page.drawText(b, { x: 67, y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25) });
      y -= 12;
    }
    y -= 10;
  }

  renderJob('HappyVerse Summit Finland', 'AI Tech Team Lead', 'Apr 2026 – Present (6 mos)', 'Helsinki, Finland', [
    'Leading AI-driven workflow execution and coordinating cross-functional teams to deliver high-quality AI task outputs.',
    'Designing and improving AI workflows, task structuring, evaluation, and operational scalability.',
    'Collaborating with product stakeholders to align AI operations with strategic business outcomes.'
  ]);

  renderJob('micro1', 'AI Trainer', 'Feb 2026 – Present (8 mos)', 'San Francisco Bay Area (Remote)', [
    'Executed AI training and evaluation tasks to improve frontier LLM model performance.',
    'Performed structured data annotation, prompt-response evaluation, and edge-case auditing.',
    'Maintained high quality, consistency, and efficiency in remote global AI operations.'
  ]);

  renderJob('Tata Projects', 'Assistant Manager', 'Mar 2025 – Jan 2026 (11 mos)', 'Gujarat, India', [
    'Managed project workflows, planning, and coordination across large-scale infrastructure projects.',
    'Applied analytical thinking and structured problem-solving to technical drawing validation and CAD workflows.',
    'Coordinated with cross-functional execution teams to ensure quality control and process efficiency.'
  ]);

  renderJob('Assystem in India', 'Senior CAD Designer', 'May 2024 – Mar 2025 (11 mos)', 'Chennai, India', [
    'Delivered high-precision 2D and 3D CAD drawings adhering strictly to international engineering standards.',
    'Pioneered design validation workflows and structured error reduction protocols.'
  ]);

  renderJob('Hadrian Solutions Pvt. Ltd.', 'Team Lead', 'Sep 2023 – Apr 2024 (8 mos)', 'Chennai, India', [
    'Led an engineering design squad executing complex CAD workflows with high accuracy and timely delivery.',
    'Managed task allocation, workflow coordination, and issue resolution across team members.'
  ]);

  renderJob('ESTATIKA GmbH', 'AutoCAD Expert (Schalplaner und Bewehrungsplaner)', 'Mar 2021 – Sep 2023 (2 yrs 7 mos)', 'North Rhine-Westphalia, Germany', [
    'Prepared detailed reinforcement (rebar) and formwork drawings based on German DIN structural standards.',
    'Maintained strict zero-defect quality control across all deliverables in a remote European team setup.'
  ]);

  renderJob('ENOIA BABCOCK BORSIG PRIVATE LIMITED', 'Senior CAD Draftsman / Checker', 'Oct 2020 – Feb 2021 (5 mos)', 'Chennai, India', [
    'Performed detailed checking for errors, consistency, and design validation before final client submittal.'
  ]);

  renderJob('Tata Projects', 'Senior Engineer', 'Aug 2019 – Jul 2020 (1 yr)', 'Hyderabad, India', [
    'Contributed to civil and structural project execution, drawing validation, and progress tracking.'
  ]);

  renderJob('cadeploy', 'Associate Rebar Detailer', 'Apr 2018 – Jul 2019 (1 yr 4 mos)', 'Hyderabad, India', [
    'Prepared rebar detailing drawings and bar bending schedules (BBS) per project specifications.'
  ]);

  renderJob('C Tech RC Design India Private Limited', 'CAD Technician / Rebar Detailer', 'Jun 2015 – Mar 2018 (2 yrs 10 mos)', 'Chennai, India', [
    'Created 2D civil/structural drawings, BBS outputs, and ensured layer management discipline.'
  ]);

  // Education
  if (y < 120) {
    page = addPage();
    y = height - 50;
  }
  page.drawText('EDUCATION', { x: 50, y, size: 12, font: fontBold, color: rgb(0.2, 0.2, 0.25) });
  y -= 16;

  page.drawText('Haaga-Helia University of Applied Sciences', { x: 50, y, size: 10, font: fontBold, color: rgb(0.1, 0.1, 0.15) });
  page.drawText('Jan 2026 – Dec 2027 | Helsinki, Finland', { x: width - 240, y, size: 8.5, font: fontRegular, color: rgb(0.45, 0.45, 0.5) });
  y -= 13;
  page.drawText('Bachelor of Business Administration, Information Technology (Data, Software, AI Systems)', { x: 50, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 16;

  page.drawText('Golden Gate University', { x: 50, y, size: 10, font: fontBold, color: rgb(0.1, 0.1, 0.15) });
  page.drawText('Mar 2024 – Sep 2025 | California, USA', { x: width - 240, y, size: 8.5, font: fontRegular, color: rgb(0.45, 0.45, 0.5) });
  y -= 13;
  page.drawText('Bachelor of Engineering, Computer Science', { x: 50, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 16;

  page.drawText('Murugappa Polytechnic College', { x: 50, y, size: 10, font: fontBold, color: rgb(0.1, 0.1, 0.15) });
  page.drawText('Apr 2012 – Apr 2015 | Chennai, India', { x: width - 240, y, size: 8.5, font: fontRegular, color: rgb(0.45, 0.45, 0.5) });
  y -= 13;
  page.drawText('Diploma in Civil Engineering', { x: 50, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  const pdfBytes = await doc.save();
  fs.writeFileSync(path.join(__dirname, 'public', 'cv.pdf'), pdfBytes);
  fs.writeFileSync(path.join(__dirname, 'cv.pdf'), pdfBytes);
  console.log('Successfully generated public/cv.pdf and cv.pdf, size:', pdfBytes.length);
}

createCV().catch(console.error);
