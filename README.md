# Decoupled Ember

An attempt to create a decoupled architecture for frontend apps.

This is the Ember version. It includes:

- A Vanilla JS data layer, including in-memory persistence and API client
- Ember for the UI library
- Lightweight bindings between Ember and the data layer with a service

A full-featured decoupled app would also have:

- A CSS-only styling library, to decouple it from the UI library
- Cypress for E2E tests, to decouple those from the UI library
