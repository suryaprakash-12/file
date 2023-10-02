from flask import *
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["POST","GET"])
def login():
    if request.method =="POST":
        user =request.form["name"]
        pass1 =request.form["password"]
        return render_template("table.html",name = user,password=pass1)  
    else:
        return render_template("log.html")   

app.run(debug=True)