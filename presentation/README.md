# Project Defense Presentation

This directory contains the presentation materials and slide decks used for the architectural defense and demonstration of the **EduSphere** higher education platform.

---

## File Index

* **Presentation File:** [`edusphere-presentation.pptx`](https://github.com/itsVentie/EduSphere/blob/main/presentation/edusphere-presentation.pptx)
* **Live Prototype:** [https://edu.ventie.dev](https://edu.ventie.dev)
* **System Specification:** [`README.md`](https://github.com/itsVentie/EduSphere/blob/main/README.md)

---

## Slide Deck Structure & Overview

The presentation is structured into **8 core slides** designed for a 10–12 minute defense:

1. **Title & System Overview**
   * Introduction to EduSphere, key target audience, and primary platform goals.
   * Reference: [`docs/01-system-overview.md`](https://github.com/itsVentie/EduSphere/blob/main/docs/01-system-overview.md)

2. **Problem Statement & Market Need**
   * Fragmentation of academic workflows, lack of centralized submission tracking, and compliance gaps.

3. **System Architecture & Tech Stack**
   * High-level 3-tier architecture diagram.
   * Core tech stack: Preact, Node.js / Go REST API, PostgreSQL, Redis, MinIO S3.
   * Reference: [`docs/02-architecture.md`](https://github.com/itsVentie/EduSphere/blob/main/docs/02-architecture.md) & [`diagrams/`](https://github.com/itsVentie/EduSphere/tree/main/diagrams)

4. **Role-Based Access Control (RBAC)**
   * Granular permission breakdown for Students, Faculty, and Administrators.

5. **Operational Workflows & File Ingestion**
   * Step-by-step submission process, JWT validation, and asynchronous object storage streaming to MinIO.

6. **ICT Standards, Security & Compliance**
   * ISTE Standards alignment, ISO/IEC 27001 compliance, TLS 1.3 encryption, and GDPR PII isolation.
   * Reference: [`docs/03-ict-and-standards.md`](https://github.com/itsVentie/EduSphere/blob/main/docs/03-ict-and-standards.md)

7. **UI/UX Mockups & Prototype Demo**
   * Preview of interface wireframes and live demonstration walkthrough.
   * Reference: [`mockups/`](https://github.com/itsVentie/EduSphere/tree/main/mockups)

8. **Conclusion & Future Roadmap**
   * Summary of architectural advantages and upcoming extensions (e.g., automated CI/CD code grading sandbox).

---

## Defense Guidelines & Speaker Notes

1. **Architecture Focus:** When presenting Slide 3, highlight the isolation between relational metadata (PostgreSQL) and binary assets (MinIO).
2. **Security & Privacy:** Emphasize TLS 1.3 payload encryption and JWT lifecycle management during Slide 6.
3. **Interactive Demo:** Transition to [https://edu.ventie.dev](https://edu.ventie.dev) during Slide 7 to showcase the SPA client-side routing and instant UI state updates.