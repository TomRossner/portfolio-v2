// Content (projects, tech stack, resume) is managed from the admin dashboard
// (admin.tomrossner.dev) and served by the content API under /api on this same domain.
// In development, set REACT_APP_CONTENT_URL=http://localhost:5006 in .env.development.
const BASE_URL = (process.env.REACT_APP_CONTENT_URL || '').replace(/\/$/, '');

/** Turns API-relative paths like "/uploads/logos/react.svg" into absolute URLs in dev. */
const withBase = (path) => (path && path.startsWith('/') ? `${BASE_URL}${path}` : path);

const getJSON = async (path) => {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`Request to ${path} failed (${res.status})`);
  return res.json();
};

export const getProjects = async () => {
  const projects = await getJSON('/api/public/projects');
  return projects.map((p) => ({
    ...p,
    technologies: p.technologies.map((t) => ({ ...t, logo: withBase(t.logo) })),
  }));
};

export const getTechnologies = async () => {
  const techs = await getJSON('/api/public/technologies');
  return techs.map((t) => ({ ...t, logo: withBase(t.logo) }));
};

export const RESUME_URL = `${BASE_URL}/api/resume`;

export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = RESUME_URL;
  link.download = 'Tom_Rossner.pdf';
  link.rel = 'noopener noreferrer';
  link.click();
};
