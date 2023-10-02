from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "hello"

@app.route("/index")
def index():
    return "i'm in index"

    app.run(debug = True)