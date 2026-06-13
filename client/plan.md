### Plan for JobSeekers

## Build
- Frontend - reactjs, tailwindcss
- Backend - nodejs, expressjs
- AI - free ai model to make the key words or skills match with the job description

## Design
- Landing - says everything about the application
- Dashboard - contains sidebar and main section
- Sidebar - Resume score, job recommendation, job tracker
- Main area - Content of the components in sidebar

## Data flow
- Resume ATS scoring
User -> resume uploads -> extracts keywords or skills -> matching with job desc -> score
- Job recommendation
Score -> Browser agent -> job opening -> returns jobs -> dashboard
- Job tracker
Job openings -> apply -> add to tracker

## Architecture
- Folder - DB - database connection
           Model - Query Structure
           Controllers - Basic functions
           Routes - url endpoints handling
           Middleware - 
           Utils -
           More (depends)