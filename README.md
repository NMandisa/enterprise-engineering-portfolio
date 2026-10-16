# Enterprise Engineering Portfolio — Noxolo Mandisa Mkhungo

[![Angular](https://img.shields.io/badge/Angular-19.0-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Java](https://img.shields.io/badge/Backend-Java_21_%7C_Spring_Boot_3-007396?logo=openjdk&logoColor=white)](https://spring.io/)
[![CI](https://github.com/NMandisa/enterprise-engineering-portfolio/actions/workflows/angular-ci.yml/badge.svg)](https://github.com/NMandisa/enterprise-engineering-portfolio/actions)
[![Domain](https://img.shields.io/badge/Domain-noxolomandisamkhungo.co.za-10b981)](https://noxolomandisamkhungo.co.za)

This repository contains the frontend application for the professional engineering portfolio of **Noxolo Mandisa Mkhungo** (`<NM/>` — Enterprise Java Engineer | Backend Systems & Architecture).

The platform is designed around enterprise developer standards—restrained, technically credible, and structured to highlight backend domain modeling, C4 system architecture diagrams, technical trade-off analyses, and interactive REST API integrations.

---

## 🏛️ Architecture & Tech Stack

### Frontend Application Layer
- **Framework:** Angular 19 (Standalone Components, Signals, SSR-Safe Lazy-Loaded Routing)
- **UI Architecture:** Bootstrap 5.3 with Modular Sass design tokens (7-1 architecture: `abstracts/`, `base/`, `components/`, `utilities/`)
- **Typography:** `Inter` (UI Sans-Serif) & `JetBrains Mono` (Technical Metadata & Code)
- **Iconography:** Bootstrap Icons (`bootstrap-icons`)
- **Hosting Platform:** Vercel (Global Edge Network with SPA rewrite routing)

### Target Backend Integration Layer
- **Runtime & Framework:** Java 21 / Spring Boot 3.x / Jakarta EE
- **Database & Persistence:** PostgreSQL with Flyway migration scripts
- **Caching & Messaging:** Redis L2 cache layer
- **Containerization:** Multi-stage Docker container builds
- **Cloud API Deployment:** Render / Railway

---

## 🗺️ Application Views & Routing

| Route | View Name | Purpose |
| :--- | :--- | :--- |
| `/` | **Overview** | Technical stack breakdown, capability classification (Professional Experience vs. POC Dev), and featured architecture previews. |
| `/architecture` | **Architecture** | Enterprise POC blueprints, inline C4 Container SVG diagrams, problem statements, and key architectural decisions. |
| `/journal` | **Engineering Journal** | Technical articles exploring architectural trade-offs, database persistence stacks, API contract design, and build toolchain evaluations. |
| `/about` | **About & Resume** | Professional background, core enterprise capabilities, engineering philosophy, and downloadable CV. |
| `/contact` | **Contact** | Direct communication channels for recruitment inquiries, technical consulting, and professional collaboration. |

---

## 🔄 Continuous Integration & Deployment (CI/CD)

This repository uses an automated CI workflow to validate changes targeting the `main` branch, paired with automated deployment on Vercel.


```

+-----------------------+     +-------------------+     +------------------+
| Developer Push / PR   | --> | GitHub Actions    | --> | Vercel CD        |
| (branch / main)       |     | (angular-ci.yml)  |     | (Production URL) |
+-----------------------+     +-------------------+     +------------------+

```

### Pipeline Overview
* **Triggers:** Pushes to `main` and Pull Requests targeting `main`.
* **Runner Environment:** Node.js `20.x` LTS on `ubuntu-latest`.
* **Verification Steps:**
  1. **Lockfile Installation:** Runs `npm ci` to enforce reproducible installations from `package-lock.json`.
  2. **Production Compilation:** Runs `npm run build` to verify TypeScript compilation, template syntax, and Angular asset bundling.
* **Continuous Delivery (CD):**
  * **Production Endpoint:** [`enterprise-engineering-portfolio.vercel.app`](https://enterprise-engineering-portfolio.vercel.app/)
  * **Apex Domain:** `noxolomandisamkhungo.co.za` (Configured via AfriHost DNS A-records pointing to Vercel's global CDN).

---

## 🚀 Enterprise Proof-of-Concepts Roadmap

1. **PCM / PIM Core Engine** *(In Progress)*
   * **Domain:** Catalog & Master Data Management
   * **Focus:** Hierarchical category trees, attribute inheritance, Flyway DB versioning, and Redis caching.
2. **Fulfilment & Order Processing Engine** *(Planned)*
   * **Domain:** Transactional Processing
   * **Focus:** State machine orchestration, idempotent API design, and optimistic database locking.
3. **Digital Asset Management (DAM) Core** *(Planned)*
   * **Domain:** Media Pipeline & Binary Data
   * **Focus:** Asynchronous binary processing and presigned URL authorization for object stores.
4. **Multi-Tenant Storefront Context Engine** *(Planned)*
   * **Domain:** Multi-Tenant Channel Architecture
   * **Focus:** Thread-local context resolution, API security interceptors, and tenant configuration caching.
5. **Context-Driven API Representation Engine** *(Planned)*
   * **Domain:** Integration & API Gateway
   * **Focus:** Jackson serialization filters, DTO layer encapsulation, and dynamic payload projection.

---

## 🛠️ Local Development Setup

### Prerequisites
- **Node.js:** `v20.x` LTS
- **npm:** `v10.x` or higher

### Quickstart

```bash
# Clone the repository
git clone [https://github.com/NMandisa/enterprise-engineering-portfolio.git](https://github.com/NMandisa/enterprise-engineering-portfolio.git)
cd enterprise-engineering-portfolio

# Install exact dependencies
npm ci

# Start local server
ng serve

```

Access the application at `http://localhost:4200/`.

---

## 📄 Ownership

© 2026 **Noxolo Mandisa Mkhungo**. Designed and developed by **Noxolo Mandisa Mkhungo**.
