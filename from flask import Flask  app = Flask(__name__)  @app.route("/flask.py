from flask import Flask

app = Flask(__name__)

@app.route("/analyze")
def analyze():
    return {
        "protocol":"TCP",
        "source":"192.168.1.5",
        "destination":"8.8.8.8"
    }

app.run()
