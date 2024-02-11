# Feedback Widget

This project is a simple feedback widget for collecting and displaying feedback
from customers of a cafe. It allows users to leave feedback categorized as
either good, neutral, or bad. The application provides statistics on the
collected feedback, including the total number of responses, the breakdown by
category, and the percentage of positive feedback.

## Functionality

- Allows users to leave feedback as good, neutral, or bad.
- Displays the number of responses for each feedback category.
- Shows the total number of responses and the percentage of positive feedback.
- Provides a notification if there is no feedback yet.
- State management is handled in the root component `<App>`, with feedback
  statistics and options rendered in separate components.
- Utilizes helper methods for calculating total feedback and positive feedback
  percentage.

## Components

- `<App>`: Root component managing the application state.
- `<Section>`: Renders a section with a title and children.
- `<FeedbackOptions>`: Renders buttons for leaving feedback.
- `<Statistics>`: Displays feedback statistics.
- `<Notification>`: Displays a notification if there is no feedback yet.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Access the application in your browser at `http://localhost:3000`.

## Usage

1. Click on the buttons labeled as 'Good', 'Neutral', or 'Bad' to leave
   feedback.
2. View the updated statistics displayed below the feedback buttons.

## Credits

This project was created as part of a coding challenge or educational exercise.
Feel free to contribute or use it for learning purposes.
