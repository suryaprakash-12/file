from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "hello"

@app.route("/callFloat/<float:Salary>")
def call_Float(Salary):
    return "my salary is %f " % Salary 
app.run()