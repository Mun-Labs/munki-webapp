# Munki Webapp

## Architecture Overview

The Munki webapp implements a frontend hexagonal architecture (also known as ports and adapters) to create a maintainable and scalable codebase. This approach separates concerns and ensures that our business logic remains independent of external interfaces and technologies.

### 🧠 Core Domain Layer
At the center of our architecture is the domain core, containing business logic, entities, and domain-specific operations. This layer is framework-agnostic and focuses solely on cryptocurrency analytics business rules.

### 🔌 Ports Layer
The ports layer defines interfaces (contracts) that the domain layer uses to interact with external systems. These ports act as boundaries that protect our core logic from external dependencies, making the system more testable and adaptable.

### 🌉 Adapters Layer
Adapters implement the port interfaces, providing concrete implementations for external interactions like API calls, UI rendering, state management, and routing. These adapters can be swapped without affecting the domain logic.

### 🖼️ UI Component Structure
We follow the Atomic Design methodology for our UI components:
- **⚛️ Atoms**: Basic UI elements (buttons, inputs, icons)
- **🧬 Molecules**: Simple component combinations (search fields, notification items)
- **🦠 Organisms**: Complex UI sections (tables, navigation bars)
- **📐 Templates**: Page layouts and structure
- **📄 Pages**: Complete views combining multiple organisms

### 🌐 External Interactions
The outermost layer consists of external systems our application interacts with:
- Backend REST APIs for cryptocurrency data
- Browser rendering engine
- Local storage for user preferences and cache

This hexagonal approach allows us to:
1. 🔄 Change UI frameworks with minimal impact on business logic
2. 🔃 Swap API providers without affecting other parts of the application
3. 🧪 Test business logic in isolation
4. ➕ Add new features by extending existing ports or creating new ones

The clear separation of concerns supports our agile development process and ensures the application remains maintainable as it grows.

# Codebase Design

```mermaid
graph TD
    subgraph "Frontend Core"
        DL[Domain Logic]
        BL[Business Logic]
        E[Entities/Types]
    end

    subgraph "Frontend Ports (Interfaces)"
        APIP[API Client Port]
        UIP[UI Component Port]
        SMP[State Management Port]
        RP[Routing Port]
    end

    subgraph "Frontend Adapters (Implementations)"
        APIA[API Client Adapter]
        UIA[UI Component Implementation]
        SMA[State Management Adapter]
        RA[Router Adapter]
    end

    subgraph "External Systems"
        BE[Backend REST APIs]
        UI[UI]
        LS[Local Storage]
    end

    %% Component organization
    subgraph "UI Components"
        A[Atoms]
        M[Molecules]
        O[Organisms]
        T[Templates]
        P[Pages]
    end

    %% Connections between layers
    DL --- UIP & APIP & SMP & RP
    APIP --- APIA
    UIP --- UIA
    SMP --- SMA
    RP --- RA

    APIA --- BE
    UIA --- UI
    SMA --- LS

    %% UI Component hierarchy
    A --- M
    M --- O
    O --- T
    T --- P
    P --- UIA
