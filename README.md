# EduSphere

An architecture design and conceptual model for **EduSphere**, a unified higher education platform created to manage course delivery, academic grading, and student-faculty workflows.

---

## Overview

EduSphere is an academic management platform designed to centralize core university operations.

* **Purpose:** Streamline coursework delivery, automate grade compilation, and enforce standardized access controls for academic records.
* **Target Audience:** Higher education institutions (students, faculty, administrative staff).
* **Delivery Model:** Web-based service backed by cloud object storage and relational databases.

---

## User Roles & Capabilities

| Role | Access Scope | Primary Actions |
| :--- | :--- | :--- |
| **Student** | Read-Only (Courses), Read/Write (Submissions) | View schedules, download course materials, submit assignments, track GPA/grades. |
| **Faculty** | Read/Write (Assigned Courses) | Publish syllabi, create assignments, grade student submissions, output internal rosters. |
| **Admin** | Read/Write (System-Wide) | Manage user identities, allocate group memberships, audit academic compliance. |

---

## Architecture

The system utilizes a standard three-tier client-server architecture with dedicated media storage:

# 02. System Architecture & Component Design

## Technical Stack
- **Frontend Layer:** React SPA (Single Page Application) rendering web interface over HTTPS.
- **Backend API Layer:** Stateless Node.js REST API for authentication (JWT), request routing, and business logic.
- **Database Layer:** PostgreSQL instance for relational metadata (user profiles, enrollment mappings, and numerical grades).
- **Object Storage Layer:** S3-compatible MinIO cluster for file artifacts (lecture PDFs, code submissions, and assets).

## Component Architecture
 
```
[ Client Layer ]              [ Application Layer ]            [ Data Layer ]

+------------------+          +-----------------------+        +--------------------------+
|  Preact SPA App  | -------> | Node.js REST API      | -----> | Relational / NoSQL DB    |
| (HTTPS Client)   |  HTTPS   | Gateway & Auth Module |        | (PostgreSQL / MongoDB)   |
+------------------+          +-----------------------+        +--------------------------+
                                                               | Redis (Session & Cache)  |
                                                               +--------------------------+
                                                               | MinIO S3 (PDFs & Media)  |
                                                               +--------------------------+
```

### Component Breakdown

1. **Frontend:** Single Page Application (React) rendering role-based views.
2. **Backend Engine:** Stateless Node.js REST API handing authentication (JWT), routing, and business logic.
3. **Relational Database:** PostgreSQL storing user profiles, relational course mappings, and numerical grade logs.
4. **Object Storage:** S3-compatible MinIO instance hosting uploaded assignment binaries and lecture files.

---

## ICT Standards & Data Security

EduSphere complies with standard Information and Communications Technology (ICT) protocols:

* **ISO/IEC 27001:** Information security management standard governing data access, user authorization, and access logging.
* **TLS 1.3 / HTTPS:** Strict transport security for all data in transit between client browsers and API gateways.
* **REST API / OpenAPI 3.0:** Standardized interface definition for client-server payloads.
* **Data Privacy Regulations (GDPR Compliance):** Enforcement of strict personal identifiable information (PII) handling for student academic histories.

---

## Repository Structure

```text
EduSphere/
├── README.md               # Main system specification
├── docs/                   # Architectural documentation          
├── diagrams/               # Architectural diagrams 
├── mockups/                # UI wireframes and interface mocks   
└── presentation/           # Final slide decks for project defence
    └── edusphere-presentation.pptx

```

---

## Operational Workflow Example

1. **Client Submission:** Student posts an assignment file via the web application interface.
2. **API Processing:** The REST API authenticates the request via JWT and streams the binary payload to MinIO storage.
3. **Database Logging:** Upon successful S3 upload, the backend creates a reference entry in PostgreSQL containing the file path, timestamp, and submission status.
4. **Faculty Audit:** Faculty view updates in real-time, retrieving the submission record and executing grading scripts.

## Deployment & Local Preview

EduSphere features a lightweight, interactive Web SPA prototype designed for demonstration and architectural evaluation.

### Live Demo
- **Production URL:** [https://edu.ventie.dev](https://edu.ventie.dev) 

### Local Setup & Execution

To run the frontend interface prototype locally on your machine:

1. **Clone the repository:**
```bash
   git clone https://github.com/itsVentie/EduSphere.git
   cd EduSphere/app

```

2. **Install dependencies:**
```bash
pnpm install

```


3. **Start the local development server:**
```bash
pnpm run dev

```


4. **Access the application:**
Open your browser and navigate to `http://localhost:5173`.
