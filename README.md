# EduSphere

An architecture design and conceptual model for **EduSphere**, a unified higher education platform created to manage course delivery, academic grading, and student-faculty workflows.

---

## Overview

EduSphere is an academic management platform designed to centralize core university operations. Detailed functional and operational breakdowns are available in [docs/01-system-overview.md](docs/01-system-overview.md).

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

## System Architecture & Component Design

The system utilizes a standard three-tier client-server architecture with dedicated media and caching layers. Full architectural specifications can be found in [docs/02-architecture.md](docs/02-architecture.md).

### Technical Stack
- **Frontend Layer:** Preact SPA (Single Page Application) rendering web interface over HTTPS.
- **Backend API Layer:** Stateless Node.js / Go REST API for authentication (JWT), request routing, and business logic.
- **Database Layer:** PostgreSQL instance for relational metadata (user profiles, enrollment mappings, numerical grades) & Redis for session caching.
- **Object Storage Layer:** S3-compatible MinIO cluster for file artifacts (lecture PDFs, code submissions, assets).

### Component Topology

Visual diagrams and assets are hosted under the [diagrams/](diagrams/) directory (see [diagrams/README.md](diagrams/README.md) for rendering details).

```text
[ Client Layer ]               [ Application Layer ]            [ Data Layer ]

+------------------+           +-----------------------+        +--------------------------+
|  Preact SPA App  | --------> | Node.js REST API      | -----> | Relational / NoSQL DB    |
| (HTTPS Client)   |   HTTPS   | Gateway & Auth Module |        | (PostgreSQL / MongoDB)   |
+------------------+           +-----------------------+        +--------------------------+
                                                                | Redis (Session & Cache)  |
                                                                +--------------------------+
                                                                | MinIO S3 (PDFs & Media)  |
                                                                +--------------------------+

```

### Component Breakdown

1. **Frontend:** Single Page Application rendering role-based views. UI mockups and wireframes are stored in [mockups/](https://www.google.com/search?q=mockups/) (see [mockups/README.md](https://www.google.com/search?q=mockups/README.md)).
2. **Backend Engine:** Stateless REST API handling authentication (JWT), routing, and business logic.
3. **Relational Database:** PostgreSQL storing user profiles, relational course mappings, and numerical grade logs.
4. **Cache & In-Memory Storage:** Redis managing active sessions and high-frequency API responses.
5. **Object Storage:** S3-compatible MinIO instance hosting uploaded assignment binaries and lecture files.

---

## ICT Standards & Data Security

EduSphere complies with standard Information and Communications Technology (ICT) protocols and educational frameworks. Comprehensive security and compliance document is located at [docs/03-ict-and-standards.md](https://www.google.com/search?q=docs/03-ict-and-standards.md).

* **ISTE Standards:** International standards providing architectural alignment for digital learning environments and collaborative workflows.
* **ISO/IEC 27001:** Information security management standard governing data access, user authorization, and audit logging.
* **TLS 1.3 / HTTPS:** Enforced transport security for all payloads in transit between client browsers and API gateways.
* **REST API / OpenAPI 3.0:** Standardized interface definition contract for endpoint interactions.
* **Data Privacy Regulations (GDPR Compliance):** Strict operational isolation of Personally Identifiable Information (PII) across database layers.

---

## Operational Workflow Example

1. **Client Submission:** Student posts an assignment file via the web application interface.
2. **API Processing:** The REST API authenticates the request via JWT and streams the binary payload to MinIO storage.
3. **Database Logging:** Upon successful S3 upload, the backend creates a reference entry in PostgreSQL containing the file path, timestamp, and submission status.
4. **Faculty Audit:** Faculty view updates in real-time, retrieving the submission record and executing grading scripts.

---

## Repository Structure

```text
EduSphere/
├── README.md               # Main system specification
├── docs/                   # Architectural documentation ([docs/](docs/))
├── diagrams/               # System architecture diagrams ([diagrams/](diagrams/))
├── mockups/                # UI wireframes and interface mocks ([mockups/](mockups/))
└── presentation/           # Slide decks for project defence ([presentation/](presentation/))
    └── edusphere-presentation.pptx

```

---

## Defense Materials

Project presentation slides and defense artifacts are available in the [presentation/](https://www.google.com/search?q=presentation/) directory (refer to [presentation/README.md](https://www.google.com/search?q=presentation/README.md) for presentation instructions).

---

## Deployment & Local Preview

EduSphere features a lightweight, interactive Web SPA prototype designed for demonstration and architectural evaluation.

### Live Demo

* **Production URL:** [https://edu.ventie.dev](https://edu.ventie.dev)

### Local Setup & Execution

To run the frontend interface prototype locally on your machine:

1. **Clone the repository:**
```bash
git clone [https://github.com/itsVentie/EduSphere.git](https://github.com/itsVentie/EduSphere.git)
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
