# Kudoo's GRC (Governance, Risk and Compliance) Platform
ISO 27001

erDiagram
    User {
        int UserId
        string UserName
        string Email
    }
    Role {
        int RoleId
        string RoleName
    }
    Task {
        int TaskId
        string TaskName
        int RoleId
    }
    GovernanceFrameworks {
        int id
        string name
        string description
    }
    Domains {
        int id
        string name
        string description
        int frameworkId
    }
    Controls {
        int id
        string name
        string description
        int domainId
    }
    Checklists {
        int id
        string name
        string description
        int controlId
    }
    Policies {
        int id
        string name
        string description
        string version
        string sharepointUrl
        string copilotUrl
    }
    ControlPolicies {
        int controlId
        int policyId
    }

    User ||--o{ Role : "has"
    Role ||--o{ Task : "assigned to"
    GovernanceFrameworks ||--o{ Domains : includes
    Domains ||--o{ Controls : has
    Controls ||--o{ Checklists : includes
    Controls ||--o{ ControlPolicies : has
    Policies ||--o{ ControlPolicies : includes
    Task ||--o{ Controls : "related to"

Policies

| **Policy Name**                     | **Control Reference** |
|-------------------------------------|-----------------------|
| Information Security Roles and Responsibilities Policy | A.5.2                 |
| Asset Ownership Policy              |                 |
| Access Control Policy               |                  |
| Incident Management Policy          |                  |
| Training and Awareness Policy       |                  |
| Compliance Policy                   |                  |

**GovernanceFramework**
| id | name           | Description                              |
|----|----------------|------------------------------------------|
| 1  | ISO 27001:2022 | ISO/IEC 27001:2022 is an international standard that provides a framework for managing and protecting information assets, ensuring their confidentiality, integrity, and availability through a systematic approach. It helps organizations identify and manage information security risks, comply with legal requirements, and continually improve their security practices. |

**Domains**
| id | name                   | description            | frameworkId |
|----|------------------------|------------------------|-------------|
| 1  | Organization           |                        | 1           |
| 2  | People                 |                        | 1           |
| 3  | Physical               |                        | 1           |
| 4  | Technology             |                        | 1           |

**Role**
| id | RoleName                         | Description                    |
|----|----------------------------------|--------------------------------|
| 1  | Project Lead                     | Person responsible for project |
| 2  | Senior Management Representative | Self explanatory               |
| 3  | Domain Owner - Organization      | TBC                            |
| 4  | Domain Owner - People            | TBC                            |
| 5  | Domain Owner - Physical          | TBC                            |
| 6  | Domain Owner - Technology        | TBC                            |
| 7  | Risk Owner                       | TBC                            |
| 8  | Internal Auditor                 | TBC                            |


**Controls**
| id | name      | description                                               | domainId |
|----|-----------|-----------------------------------------------------------|----------|
| 1  | A.5.1     | Policies for information security                         | 1        |
| 2  | A.5.2     | Information security roles and responsibilities           | 1        |
| 3  | A.5.3     | Segregation of duties                                     | 1        |
| 4  | A.5.4     | Management responsibilities                               | 1        |
| 5  | A.5.5     | Contact with authorities                                  | 1        |
| 6  | A.5.6     | Contract with special interest groups                     | 1        |
| 7  | A.5.7     | Threat intelligence                                       | 1        |
| 8  | A.5.8     | Information security in project management                | 1        |
| 9  | A.5.9     | Inventory of information and other associated assets      |  1       |
| 10 | A.5.10    | Acceptable use of information and other associated assets | 1        |
| 11 | A.5.11    | Return of assets                                          | 1        |
| 12 | A.5.12    | Classification of information                             | 1        |
| 13 | A.5.13    | Labelling of information                                  | 1        |
| 14 | A.5.14    | Information transfer                                      | 1        |
| 15 | A.5.15    | Access Control                                            | 1        |
| 16 | A.5.16    | Identity management                                       | 1        |
| 17 | A.5.17    | Authentication management                                 | 1        |
| 18 | A.5.18    | Access rights                                             | 1        |
| 19 | A.5.19    | Information security in supplier relationships            | 1        |
| 20 | A.5.20    | Addressing information security within supplier agreements| 1        |
| 21 | A.5.21    | Managing information security in the ICT supply chain     | 1        |
| 22 | A.5.22    | Monitoring, review, and change management of supplier services | 1   |
| 23 | A.5.23    | Information security for use of cloud services            | 1        |
| 24 | A.5.24    | Information security incident management planning and preparation | 1|
| 25 | A.5.25    | Assessment and decision on information security events    | 1        |
| 26 | A.5.26    | Response to infromation security incidents                | 1        |
| 27 | A.5.27    | Learning from information security incidents              | 1        |
| 28 | A.5.28    | Collection of evidence                                    | 1        |
| 29 | A.5.29    | Information security during disruption                    | 1        |
| 30 | A.5.30    | ICT readiness for business continuity                     | 1        |
| 31 | A.5.31    | Legal, statutory, regulatory, and contractual requirements | 1       |
| 32 | A.5.32    | Intellectual property rights                              | 1        |
| 33 | A.5.33    | Protection of records                                     | 1        |
| 34 | A.5.34    | Privacy and protection of personally identifiable information | 1    |
| 35 | A.5.35    | Independent review of information security                | 1        |
| 36 | A.5.36    | Compliance with policies, rules, and standards for information security | 1 |
| 37 | A.5.37    | Documented operating procedures                           | 1        |
| 38 | A.6.1     | Screening                                                 | 2        |
| 39 | A.6.2     | Terms and conditions of employment                        | 2        |
| 40 | A.6.3     | Information security awareness, education, and training   | 2        |
| 41 | A.6.4     | Disciplinary process                                      | 2        |
| 42 | A.6.5     | Responsibilities after termination or change of employment | 2       |
| 43 | A.6.6     | Confidentiality or non-disclosure agreements              | 2        | 
| 44 | A.6.7     | Remote working                                            | 2        |
| 45 | A.6.8     | Information security in project management                | 2        |
| 46 | A.7.1     | Physical security perimeters                              | 3        |
| 47 | A.7.2     | Physical entry                                            | 3        |
| 48 | A.7.3     | Securing offices, rooms, and facilities                   | 3        |
| 49 | A.7.4     | Physical security monitoring                              | 3        |
| 50 | A.7.5     | Protecting against physical and environmental threats     | 3        |
| 51 | A.7.6     | Working in secure areas                                   | 3        |
| 52 | A.7.7     | Clear desk and clear screen                               | 3        |
| 53 | A.7.8     | Equipment sitting and protection                          | 3        |
| 54 | A.7.9     | Security of assets off-premises                           | 3        |
| 55 | A.7.10    | Storage media                                             | 3        |
| 56 | A.7.11    | Supporting utilities                                      | 3        |
| 57 | A.7.12    | Cabling security                                          | 3        |
| 58 | A.7.13    | Equipment maintenance                                     | 3        |
| 59 | A.7.14    | Secure disposal or re-use of equipment                    | 3        |
| 60 | A.8.1     | User endpoint devices                                     | 4        |
| 61 | A.8.2     | Privileged access                                         | 4        |
| 62 | A.8.3     | Information access restriction                            | 4        |
| 63 | A.8.4     | Access to source code                                     | 4        |
| 64 | A.8.5     | Secure authentication                                     | 4        |
| 65 | A.8.6     | Capacity management                                       | 4        |
| 66 | A.8.7     | Protection against malware                                | 4        |
| 67 | A.8.8     | Management of technical vulnerabilitiies                  | 4        |
| 68 | A.8.9     | Configuration management                                  | 4        |
| 69 | A.8.10    | Information deletion                                      | 4        |
| 70 | A.8.11    | Data masking                                              | 4        |
| 71 | A.8.12    | Data leakage prevention                                   | 4        |
| 72 | A.8.13    | Information backup                                        | 4        |
| 73 | A.8.14    | Redundancy                                                | 4        |
| 74 | A.8.15    | Logging                                                   | 4        |
| 75 | A.8.16    | Monitoring activities                                     | 4        |
| 76 | A.8.17    | Clock synchronization                                     | 4        |
| 77 | A.8.18    | Use of cryptography                                       | 4        |
| 78 | A.8.19    | Secure development environment                            | 4        | 
| 79 | A.8.20    | Application security requirements                         | 4        |
| 80 | A.8.21    | Secure coding                                             | 4        |
| 81 | A.8.22    | Security testing in development and acceptance            | 4        |
| 82 | A.8.23    | Web filtering                                             | 4        |
| 83 | A.8.24    | Protection of test data                                   | 4        |
| 84 | A.8.25    | Technical compliance review                               | 4        |
| 85 | A.8.26    | Network controls                                          | 4        |
| 86 | A.8.27    | Security of network services                              | 4        |
| 87 | A.8.28    | Secure coding                                             | 4        |
| 88 | A.8.29    | Security in network services                              | 4        |
| 89 | A.8.30    | Secure system engineering principles                      | 4        |
| 90 | A.8.31    | Secure configuration of network devices                   | 4        |
| 91 | A.8.32    | Security of network services                              | 4        |
| 92 | A.8.33    | Secure system engineering principles                      | 4        |
| 93 | A.8.34    | Secure configuration of network devices                   | 4        |

Flow

Sys Admin installs

Project Lead assigns roles

All tasks are then created for all roles according to the phases

We should phase the implementation

Initial Assessment and Planning (includes audit of policies and scope)

Risk Assessment and Treatment

Implementation of Controls

Training and Awareness

Internal Audit and Review

Certification Preparation

Certification Audi

Continuous Improvement

Policies

Organizational Policies

Information Security Policy: Outlines the organization's approach to managing information security.

Risk Management Policy: Defines the process for identifying, assessing, and managing risks.

Compliance Policy: Ensures adherence to legal, regulatory, and contractual requirements.

Incident Management Policy: Procedures for reporting, managing, and resolving security incidents.

Business Continuity Policy: Plans for maintaining operations during and after a disruption.

Internal Audit Policy: Guidelines for conducting regular audits of the ISMS.

Supplier Security Policy: Requirements for managing third-party risks.

People Policies

Access Control Policy: Defines user access levels and permissions.

Acceptable Use Policy: Rules for the proper use of organizational resources.

Employee Onboarding and Offboarding Policy: Procedures for managing employee lifecycle.

Training and Awareness Policy: Ensures employees are aware of security practices and policies.

Disciplinary Policy: Actions to be taken in case of policy violations.

Physical Policies

Physical Security Policy: Measures to protect physical assets and facilities.

Environmental Security Policy: Controls to protect against environmental threats.

Asset Management Policy: Guidelines for managing and protecting organizational assets.

Clear Desk and Clear Screen Policy: Ensures sensitive information is not left unattended.

Technology Policies

Cryptographic Policy: Guidelines for the use of cryptographic controls.

Network Security Policy: Measures to protect the organization's network infrastructure.

System Acquisition, Development, and Maintenance Policy: Ensures security is integrated into systems from the start.

Change Management Policy: Procedures for managing changes to IT systems.

Backup Policy: Ensures regular backups of critical data.

Patch Management Policy: Guidelines for applying updates and patches to systems.

Mobile Device Policy: Controls for the use of mobile devices within the organization.