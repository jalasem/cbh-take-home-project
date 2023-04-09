# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket Breakdown
#### 1. Ticket 1: Add custom_id field to the Agent model and create a migration script

- **Description**: Update the Agent model to include a new optional field called 'custom_id' which will store the custom ID for each Agent, provided by the Facility. Create a migration script to update the existing database structure.
- **Acceptance Criteria**: The Agent model should have the new custom_id field, and it should allow NULL values. The migration script should successfully update the database structure.
- **Time Estimate**: 1 hour
- **Implementation Details**: Add the custom_id field to the Agent model schema and update the database migration script.

#### 2. Ticket 2: Update Facility UI to allow assigning custom IDs to Agents

- **Description**: Update the Facility UI to allow Facilities to assign and edit custom IDs for Agents they work with.
- **Acceptance Criteria**: The Facility UI should have an input field for assigning custom IDs to Agents, and Facilities should be able to edit these custom IDs.
- **Time Estimate**: 3 hours
- **Implementation Details**: Modify the Facility UI component to include an input field for custom IDs, and update the API calls to save the custom IDs in the database.

#### 3. Ticket 3: Modify getShiftsByFacility function to return custom_id for Agents

- **Description**: Update the getShiftsByFacility function to return the custom_id field for each Agent assigned to a Shift.
- **Acceptance Criteria**: The getShiftsByFacility function should return the custom_id field for each Agent in the response.
- **Time Estimate**: 2 hours
- **Implementation Details**: Modify the getShiftsByFacility function to include the custom_id field in the response, and update any related API calls and tests.

#### 4. Ticket 4: Update generateReport function to use custom_id for Agents

- **Description**: Modify the generateReport function to use the custom_id field for each Agent when generating the PDF report.
- **Acceptance Criteria**: The PDF report should display the custom_id instead of the internal database id for each Agent.
- **Time Estimate**: 2 hours
- **Implementation Details**: Update the generateReport function to use the custom_id field for Agents, and update any related tests.

#### 5. Ticket 5: Write documentation and update API examples

- **Description**: Update the API documentation to include the new custom_id field and provide examples of how to use it in API requests.
- **Acceptance Criteria**: The API documentation should be up to date, reflecting the custom_id field and its usage.
- **Time Estimate**: 1 hours
- **Implementation Details**: Update the API documentation to include the custom_id field, provide examples for its usage, and ensure that all relevant information is up to date.
