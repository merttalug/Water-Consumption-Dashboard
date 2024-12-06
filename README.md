# Water Consumption Dashboard

A web application to monitor and manage water consumption across multiple buildings. This dashboard allows users to view total monthly consumption and detailed daily consumption for the last 7 days.

---

## Features

- **Building List**: Displays a list of buildings with their names, locations, and total monthly water consumption.
- **Search Functionality**: Filter buildings by name or location.
- **Detailed View**: View daily water usage for the last 7 days for a selected building.
- **Responsive Design**: Optimized for both desktop and mobile use.

---

## Technologies

- **Frontend**: [Next.js](https://nextjs.org/) (React Framework)
- **Backend**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **Styling**: Custom CSS

---

## Setup Instructions

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/merttalug/Water-Consumption-Dashboard.git
   cd Water-Consumption-Dashboard
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Backend Server**

   ```bash
   cd ../backend
   node server.js
   ```

   The backend server will run at `http://localhost:4000`.

5. **Start the Frontend Server**

   ```bash
   cd ../frontend
   npm run dev
   ```

   The frontend application will run at `http://localhost:3000`.

---

## Usage

1. Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
2. Search for buildings by name or location on the home page.
3. Click on "View Details" to see the last 7 days of water usage for a specific building.

---

## Project Structure

```
Water-Consumption-Dashboard/
│
├── backend/               # Backend server files
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
│
├── frontend/              # Frontend application files
│   ├── src/
│   │   ├── pages/         # Next.js pages
│   │   ├── styles/        # CSS styles
│   │   └── ...
│   ├── public/            # Public assets
│   └── package.json       # Frontend dependencies
│
└── README.md              # Project documentation
```

---

## Contributing

If you’d like to contribute, feel free to fork the repository and submit a pull request with your enhancements.

---

## 
