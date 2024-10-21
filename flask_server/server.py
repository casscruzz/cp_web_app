# backend file

from flask import Flask, jsonify

app = Flask(__name__)


# Home Page
@app.route("/")
def home():
    return "Welcome to the Home Page!"


# Members API Route
@app.route("/members")
def members():
    return jsonify({"members": ["Member1", "Member2", "Member3"]})


# Run the app
if __name__ == "__main__":
    app.run(debug=True, port=5001)
