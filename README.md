# Equipment Buddy

Build a full-stack web application for Equipment Borrowing and Return Management with WhatsApp notifications.

The application is intended for organizations, laboratories, student organizations, or campus departments to manage equipment inventory, borrowing transactions, returns, and automated WhatsApp notifications.

1. Main Goal

Create a modern, responsive, user-friendly equipment management system where administrators can:

Manage equipment inventory.

Manage users/borrowers.

Record equipment borrowing transactions.

Record equipment returns.

Track equipment availability.

Track overdue equipment.

View borrowing and return history.

Send WhatsApp notifications when equipment is borrowed or returned.

Send automatic WhatsApp reminders before the return deadline.

Send overdue notifications.

View dashboard statistics and reports.

The application should be designed with a clean, professional dashboard suitable for a university laboratory or student organization.

2. User Roles

Implement role-based access control with at least two roles:

Admin

Admin can:

Login to the system.

View dashboard.

Add, edit, delete, and manage equipment.

Manage equipment categories.

Manage users/borrowers.

Approve or reject borrowing requests.

Record equipment borrowing.

Record equipment returns.

Check equipment condition after return.

View active borrowings.

View overdue borrowings.

View borrowing history.

View notification history.

Configure WhatsApp notification settings.

Generate reports.

Manage system settings.

Borrower/User

Users can:

Login to the system.

View available equipment.

Submit borrowing requests.

View their borrowing history.

View active borrowings.

View return deadlines.

View borrowing status.

View notifications.

View their profile.

3. Authentication

Create a secure authentication system with:

Login page.

Logout.

Password hashing.

Session management.

Role-based authorization.

Admin dashboard.

User dashboard.

Use a clean and modern login interface.

4. Dashboard

Create a responsive dashboard with summary cards:

Total Equipment

Available Equipment

Currently Borrowed

Pending Requests

Overdue Equipment

Returned This Month

Add charts for:

Borrowing activity over time.

Most frequently borrowed equipment.

Equipment status distribution.

Add a "Recent Borrowing Activity" table showing:

Borrower name.

Equipment.

Borrowing date.

Expected return date.

Status.

Use clear status badges:

Available

Pending

Approved

Borrowed

Returned

Rejected

Overdue

Damaged

The dashboard should be visually clean and easy to understand.

5. Equipment Management

Create an equipment management module.

Each equipment item should have:

Equipment ID.

Inventory code.

Equipment name.

Category.

Brand.

Model.

Serial number.

Description.

Quantity.

Available quantity.

Condition.

Location.

Equipment photo.

Status.

Created date.

Updated date.

Equipment conditions:

Excellent

Good

Fair

Damaged

Lost

Equipment status should automatically update based on availability.

Features:

Add equipment.

Edit equipment.

Delete equipment.

Search equipment.

Filter by category.

Filter by status.

View equipment details.

Upload equipment image.

6. Equipment Categories

Create a category management module.

Example categories:

Measurement Equipment

Microcontroller

Networking Equipment

Computer Equipment

Electronic Components

Laboratory Equipment

Tools

Other

Admin can:

Add category.

Edit category.

Delete category.

View number of equipment items per category.

7. User Management

Create a user management page.

User fields:

Full name.

Student ID / Employee ID.

Email.

WhatsApp phone number.

Department.

Role.

Account status.

Created date.

Admin can:

Add users.

Edit users.

Delete users.

Activate/deactivate accounts.

Search users.

Filter by role.

Use proper phone number formatting and validation.

8. Borrowing System

Create a complete borrowing workflow.

The borrowing process should be:

User submits borrowing request
→ Admin reviews request
→ Admin approves or rejects
→ If approved, equipment status becomes Borrowed
→ System records borrowing transaction
→ WhatsApp notification is sent to borrower

Borrowing form fields:

Borrower.

Equipment.

Quantity.

Borrowing date.

Expected return date.

Purpose.

Additional notes.

A borrowing transaction should have:

Borrowing ID.

Borrower ID.

Equipment ID.

Quantity.

Borrowing date.

Expected return date.

Actual return date.

Purpose.

Notes.

Status.

Approved by.

Created date.

Updated date.

If an equipment item has multiple available units, the system must correctly decrease available quantity when borrowed and increase it when returned.

Do not allow users to borrow more equipment than the available quantity.

9. Borrowing Status Workflow

Implement the following workflow:

Pending
→ Approved
→ Borrowed
→ Returned

Alternative states:

Pending
→ Rejected

Borrowed
→ Overdue

Returned
→ Damaged (if equipment is returned damaged)

The system must automatically detect overdue transactions by comparing the expected return date with the current date.

10. Return System

Create a return management module.

Admin can record:

Return date.

Returned quantity.

Equipment condition.

Damage description.

Return notes.

When equipment is returned:

Update the borrowing transaction.

Set actual return date.

Increase available equipment quantity.

Update equipment condition.

Change transaction status to Returned.

Send WhatsApp return confirmation.

If equipment is damaged:

Record damage description.

Change equipment condition to Damaged.

Keep damaged quantity unavailable until repaired.

Store damage history.

If equipment is lost:

Record the lost equipment.

Decrease total available inventory.

Mark the item as Lost.

11. WhatsApp Notification System

Integrate the application with an official WhatsApp Business API provider.

The system should be designed so that the WhatsApp API credentials can be configured through environment variables.

Do not use unofficial WhatsApp Web automation.

Create a notification service abstraction so the WhatsApp provider can be changed later without changing the core borrowing system.

Notification types:

Borrowing Request

Send notification when a user submits a borrowing request.

Example:

"Hello {{borrower_name}}, your equipment borrowing request has been submitted successfully.

Equipment: {{equipment_name}}
Quantity: {{quantity}}
Borrowing date: {{borrow_date}}
Expected return date: {{return_date}}

Status: Pending approval."

Borrowing Approved

"Hello {{borrower_name}}, your equipment borrowing request has been approved.

Equipment: {{equipment_name}}
Quantity: {{quantity}}
Borrowing date: {{borrow_date}}
Expected return date: {{return_date}}

Please return the equipment on time."

Borrowing Rejected

"Hello {{borrower_name}}, unfortunately your borrowing request has been rejected.

Equipment: {{equipment_name}}
Reason: {{rejection_reason}}"

Return Confirmation

"Hello {{borrower_name}}, your equipment has been successfully returned.

Equipment: {{equipment_name}}
Return date: {{return_date}}
Condition: {{condition}}

Thank you."

Return Reminder

Send an automatic reminder before the return deadline.

Example:

"Reminder: Your equipment borrowing deadline is approaching.

Equipment: {{equipment_name}}
Expected return date: {{return_date}}

Please return the equipment on time."

Overdue Notification

"Important reminder: Your equipment borrowing is overdue.

Equipment: {{equipment_name}}
Expected return date: {{return_date}}
Days overdue: {{days_overdue}}

Please return the equipment as soon as possible."

All notification messages should be configurable by the administrator.

12. Notification History

Create a notification history page.

Display:

Notification ID.

Borrowing ID.

Recipient.

WhatsApp number.

Notification type.

Message.

Sent time.

Delivery status.

Error message if failed.

Statuses:

Pending

Sent

Delivered

Failed

Add retry functionality for failed notifications.

13. Automatic Reminder System

Implement scheduled background jobs.

The system should periodically check:

Borrowings due tomorrow.

Borrowings due today.

Overdue borrowings.

Send WhatsApp notifications automatically.

Prevent duplicate notifications for the same reminder type on the same day.

Example:

Every day at 08:00
        ↓
Check active borrowings
        ↓
Due tomorrow?
        ↓
Send reminder
        ↓
Due today?
        ↓
Send reminder
        ↓
Overdue?
        ↓
Send overdue notification


Create a notification log to prevent duplicate messages.

14. Search and Filtering

Implement search and filtering throughout the application.

Equipment:

Search by equipment name.

Search by inventory code.

Filter by category.

Filter by status.

Filter by condition.

Borrowings:

Search by borrower.

Search by borrowing ID.

Filter by status.

Filter by date.

Filter by overdue status.

Users:

Search by name.

Search by student ID.

Search by phone number.

Filter by role.

15. Reports

Create a reports module.

Reports should include:

Total borrowing transactions.

Active borrowings.

Returned equipment.

Overdue equipment.

Most borrowed equipment.

Most active borrowers.

Damaged equipment.

Lost equipment.

Allow filtering by:

Date range.

Equipment.

Category.

Borrower.

Status.

Add export functionality:

CSV.

Excel.

PDF if supported.

16. Database Design

Use a relational database.

Create tables similar to:

users

id

name

student_id

email

phone

department

role

status

password

created_at

updated_at

categories

id

name

description

created_at

updated_at

equipment

id

inventory_code

name

category_id

brand

model

serial_number

description

quantity

available_quantity

condition

location

image_url

status

created_at

updated_at

borrowings

id

borrower_id

borrow_date

expected_return_date

actual_return_date

purpose

notes

status

approved_by

created_at

updated_at

borrowing_items

id

borrowing_id

equipment_id

quantity

created_at

updated_at

returns

id

borrowing_id

return_date

processed_by

notes

created_at

updated_at

return_items

id

return_id

equipment_id

quantity

condition

damage_description

created_at

updated_at

notifications

id

borrowing_id

recipient

phone_number

type

message

status

provider_message_id

error_message

sent_at

created_at

updated_at

Maintain proper foreign key relationships and database constraints.

17. UI/UX

Create a modern, professional interface.

Design requirements:

Responsive on desktop, tablet, and mobile.

Sidebar navigation.

Top navigation bar.

Dashboard cards.

Data tables.

Search bars.

Filter controls.

Modal forms where appropriate.

Confirmation dialogs before destructive actions.

Toast notifications for successful actions.

Clear error messages.

Loading states.

Empty states.

Mobile-friendly navigation.

Use a professional color scheme suitable for a university laboratory or organization.

The UI should be simple enough for non-technical staff to use.

18. Important Business Rules

Implement these rules:

Users cannot borrow unavailable equipment.

Available quantity cannot become negative.

Borrowing approval automatically updates equipment availability.

Returning equipment automatically increases available quantity.

Damaged equipment should not be counted as available.

Lost equipment should not be counted as available.

Overdue status is automatically detected.

Users cannot return more equipment than they borrowed.

Every borrowing and return action must be recorded in history.

WhatsApp notifications must be logged.

Failed WhatsApp messages must be retryable.

Duplicate reminder messages must be prevented.

Only authorized admins can approve borrowing requests.

Only authorized admins can process returns.

All important actions should have audit logs.

19. Audit Log

Create an audit log system.

Record:

User.

Action.

Module.

Record ID.

Description.

Timestamp.

Examples:

Admin created equipment.

Admin approved borrowing.

Admin rejected borrowing.

Admin processed return.

Admin changed equipment condition.

Admin changed user role.

20. Technical Requirements

Build the application using a maintainable full-stack architecture.

Requirements:

Use a relational database.

Use secure authentication.

Use role-based access control.

Use server-side validation.

Use database transactions for borrowing and return operations.

Prevent race conditions when multiple users borrow the same equipment.

Store WhatsApp API credentials securely in environment variables.

Never expose API credentials in frontend code.

Implement error handling.

Implement API/service abstraction for WhatsApp integration.

Use reusable components.

Keep the code modular and maintainable.

21. Initial Seed Data

Create sample data for demonstration.

Sample equipment:

Digital Multimeter

Oscilloscope

Arduino UNO

ESP32

Raspberry Pi

Network Router

MikroTik Router

UTP Cable Tester

Soldering Iron

Power Supply

Create sample users:

Admin

Laboratory Staff

Student

Create sample borrowing transactions with different statuses:

Pending

Approved

Borrowed

Returned

Overdue

22. Final Deliverable

The final application should provide:

Fully functional authentication.

Admin dashboard.

User dashboard.

Equipment inventory management.

Category management.

User management.

Borrowing request system.

Borrowing approval system.

Return management.

Equipment condition tracking.

Overdue detection.

WhatsApp notification integration structure.

Automatic reminder scheduling.

Notification history.

Reports and analytics.

Audit logs.

Responsive UI.

Prioritize functionality, clean architecture, data integrity, and an intuitive user experience.

Before implementing complex features, create the database schema and core application structure first. Then implement the application module by module.

Make sure the application is runnable and that all core flows work end-to-end:

User Login
→ Browse Equipment
→ Submit Borrowing Request
→ Admin Approval
→ Equipment Becomes Borrowed
→ WhatsApp Notification
→ Return Equipment
→ Admin Records Return
→ Equipment Availability Updated
→ WhatsApp Return Confirmation

Also provide clear setup instructions for:

Installing dependencies.

Configuring the database.

Setting environment variables.

Running database migrations.

Seeding sample data.

Configuring WhatsApp API credentials.

Running scheduled reminder jobs.

Deploying the application to production.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://equip-quest-notify.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/793b9df1-3643-4f3f-95ec-723b084bfd11).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
