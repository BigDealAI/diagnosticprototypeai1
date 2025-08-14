from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__, static_folder="static")
CORS(app)

# Small, fast demo model (not medical! placeholder for prototype)
classifier = pipeline("text-classification", model="distilbert-base-uncased-finetuned-sst-2-english")

@app.route("/")
def root():
    return send_from_directory(".", "index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json(force=True, silent=True) or {}
    symptoms = data.get("symptoms", "")
    try:
        result = classifier(symptoms)
        label = result[0]["label"] if result else "UNKNOWN"
    except Exception as e:
        label = f"ERROR: {e}"
    return jsonify({"analysis": label})

# Static files (style.css, script.js, config.js) are served automatically from /static
