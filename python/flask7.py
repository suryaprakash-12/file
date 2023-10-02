from flask import *
app=Flask(__name__)

@app.route("/login", methods=["POST","GET"])
def login():
    if request.method =="POST":
        user =request.form["name"]
        return render_template("table.html",name = user)
    else:
        return render_template("login.html")


@app.route("/success/<name>")
def success(name):
    return "welcome %s" % name

app.run(debug=True)        
    