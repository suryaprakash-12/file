from flask import *
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["POST","GET"])
def login():
    if request.method =="POST":
        user =request.form["name"]
        reg =request.form["Reg"]
        third_sem_GPA =request.form["third_sem_GPA"]
        fourth_sem_GPA =request.form["fourth_sem_GPA"]
        return render_template("table.html",name = user,Reg=reg,third_sem_GPA=third_sem_GPA,fourth_sem_GPA=fourth_sem_GPA)   
    else:
        return render_template("log.html")

app.run(debug=True)