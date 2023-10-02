from flask import *
app=Flask(__name__)

app.secret_key ='abc'


@app.route("/login", methods=["POST","GET"])
def login():
    error = None
    if request.method =="POST":
        if request.form["p"] =="AAA":
            error ="invalid"
        else:
            flash("success")
            return redirect(url_for('index'))
    return render_template("log.html",error = error)

    
        
@app.route("/index")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)   