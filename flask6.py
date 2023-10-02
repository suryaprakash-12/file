from flask import Flask,redirect
app = Flask(__name__)

@app.route("/")
def home():
    return redirect("/index")

@app.route("/index")
def index():
    return "hello"
app.run()        