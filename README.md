# AI Medical Diagnostic Tool

This is a simple AI-powered medical prototype that takes patient symptoms as input and returns a preliminary analysis.

## Files:

- `index.html`: The main HTML file for the frontend.
- `static/style.css`: The CSS file for styling the frontend.
- `static/config.js`: JavaScript file for frontend configuration (e.g., backend URL).
- `static/script.js`: JavaScript file for frontend logic (e.g., sending data to backend).
- `app.py`: The Python Flask backend application.
- `requirements.txt`: List of Python dependencies.
- `README.md`: This file.

## How it Works:

1.  The user enters symptoms in the text area on the `index.html` page.
2.  The JavaScript code in `static/script.js` sends the symptoms to the Flask backend (`app.py`) via a POST request to the `/analyze` endpoint.
3.  The Flask backend uses a pre-trained AI model (from the `transformers` library) to analyze the symptoms and returns a preliminary analysis.
4.  The JavaScript code displays the analysis in the `#result` div on the `index.html` page.

## Deployment:

This project is structured for easy deployment to platforms like Netlify (for the frontend) and Render or Railway (for the backend).

### Frontend (Netlify):

1.  Create a new repository on GitHub and push your project files to it.
2.  Sign up for or log in to Netlify.
3.  Create a new site from Git and connect it to your GitHub repository.
4.  Configure build settings:
    *   **Build command:** Leave blank.
    *   **Publish directory:** Leave blank (Netlify will automatically detect `index.html`).
5.  Deploy the site. Netlify will serve your `index.html` and the files in the `static` folder.

### Backend (Render, Railway, etc.):

1.  These platforms can deploy directly from GitHub repositories. Refer to their documentation for specific instructions.
2.  You will typically configure your backend to run the `app.py` file. For example, on Render, you might set the start command to `gunicorn app:app`.
3.  Ensure that your hosting platform provides a public URL for your backend.

### Connecting Frontend and Backend:

1.  Once your backend is deployed, you will get a public URL (e.g., `https://your-backend.onrender.com`).
2.  Update the `backendUrl` variable in `static/js/script.js` with this URL.
3.  Push the updated `static/js/script.js` to your GitHub repository.
4.  Netlify will automatically redeploy your frontend with the correct backend URL.

## Running Locally (for development/testing):

1.  Clone the repository.
2.  Install the required Python packages: `pip install -r requirements.txt`.
3.  Run the Flask backend: `python app.py`.
4.  Open `index.html` in your web browser. You may need a local web server to serve the static files correctly (e.g., using Python's `http.server`). If running the frontend and backend locally, you might need to adjust the `backendUrl` in `static/js/script.js` to `http://127.0.0.1:5000` or similar.

## Disclaimer:

This is a prototype using a general text classification model for demonstration. It is **not** a substitute for professional medical advice or diagnosis. Do not use this tool for actual medical decisions.
