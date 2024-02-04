from flask import *
app = Flask(__name__)

@app.route("/")
def hello():
    return redirect("/index")

@app.route("/index")
def index():
    return "i'm in index"

app.run(debug = True)