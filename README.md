# Enterprise Engineering Portfolio — Noxolo Mandisa Mkhungo

[![Angular](https://img.shields.io/badge/Angular-19.0-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Java](https://img.shields.io/badge/Backend-Java_21_%7C_Spring_Boot_3-007396?logo=openjdk&logoColor=white)](https://spring.io/)
[![Domain](https://img.shields.io/badge/Domain-noxolomandisamkhungo.co.za-10b981)](https://noxolomandisamkhungo.co.za)

This repository contains the frontend application for the professional engineering portfolio of **Noxolo Mandisa Mkhungo** (Enterprise Java Engineer | Backend Systems & Architecture). 

The platform is designed around enterprise developer standards—restrained, technically credible, and structured to highlight backend domain modeling, C4 system architecture diagrams, and interactive REST API integrations.

---

## 🏛️ Architecture & Tech Stack

### Frontend Application Layer
* **Framework:** Angular 19 (Standalone Components, Signals, Lazy-Loaded Routing)
* **UI Design System:** Bootstrap 5.3 + Custom SCSS Design Tokens
* **Typography:** `Inter` (UI Sans-Serif) & `JetBrains Mono` (Technical Metadata & Code)
* **Iconography:** Bootstrap Icons (`bootstrap-icons`)
* **Hosting Platform:** Vercel / Netlify (Automated CI/CD deployment on push to `main`)

### Target Backend Integration Layer
* **Runtime & Framework:** Java 21 / Spring Boot 3.x / Jakarta EE
* **Database & Persistence:** PostgreSQL with Flyway migration scripts
* **Containerization:** Multi-stage Docker container builds
* **Cloud API Deployment:** Render / Railway

---

## 🗺️ Application Views & Routing

| Route | View Name | Purpose |
| :--- | :--- | :--- |
| `/` | **Overview** | Elevator pitch, core competencies (Production vs POC Dev), and featured architecture previews. |
| `/architecture` | **Architecture** | Enterprise POC case studies, C4 blueprints, problem statements, and key architectural decisions. |
| `/about` | **About & Resume** | Professional experience, core enterprise capabilities, engineering philosophy, and downloadable CV. |

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
* **Node.js:** `v18.x` or `v20.x` LTS
* **npm:** `v9.x` or higher
* **Angular CLI:** `v19.x` (`npm install -g @angular/cli`)

### Quickstart

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/NMandisa/EnterpriseEngineeringPortfolio.git](https://github.com/NMandisa/EnterpriseEngineeringPortfolio.git)
   cd EnterpriseEngineeringPortfolio