## Technical Stack

- **Frontend Layer:** Preact (Vite) Single Page Application (SPA) offering a lightweight, reactive UI over HTTPS.
- **Backend API Layer:** Go / Node.js stateless REST API providing high-throughput routing, JWT authentication, and business logic execution.
- **Database & Persistence Layer:**
  - **Relational Storage (PostgreSQL):** Primary transactional database for user accounts, role-based permissions, course enrollments, and official academic records.
  - **Document Storage (MongoDB):** Flexible document store for dynamic course syllabi, unstructured task payloads, and metadata schemas.
  - **In-Memory Cache (Redis):** Distributed cache engine managing session states, active token revocation lists (blacklists), and request rate-limiting.
- **Object Storage Layer:** Distributed S3-compatible MinIO cluster hosting binary data artifacts (PDFs, media files, archive submissions).

---

## Component Architecture

```text
[ Client Layer ]              [ Application Layer ]            [ Data Layer ]

+------------------+          +-----------------------+        +--------------------------+
|  Preact SPA      | -------> | Go / Node.js API      | -----> | PostgreSQL / MongoDB     |
|  (HTTPS Client)  |  HTTPS   | Gateway & Auth Module |        +--------------------------+
+------------------+          +-----------------------+        | Redis (Session & Cache)  |
                                                               +--------------------------+
                                                               | MinIO S3 (PDFs & Media)  |
                                                               +--------------------------+

```

---

## Data Transfer Sequence (Assignment Submission)

1. **Client Request:** The user submits a coursework file through the Preact interface, generating a `POST` request with a multipart binary payload to `/api/v1/assignments/submit`.
2. **Authentication & Validation:** The API Gateway validates the incoming JSON Web Token (JWT) against the Redis session cache to verify user authorization and rate limits.
3. **Binary Streaming:** The backend streams the file payload directly into the target MinIO bucket, avoiding local memory overhead, and receives a unique object URI upon completion.
4. **Persistence Transaction:** The backend creates an atomic record in PostgreSQL / MongoDB linking the submission metadata, timestamp, user ID, and MinIO object URI.

```
