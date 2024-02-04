from flask import *
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("y.html")

@app.route("/login", methods=["POST","GET"])
def login():
    if request.method =="POST":
        name=request.form['name']
        return render_template("h.html",name = name)
    else:
        return render_template("index.html")
app.run()