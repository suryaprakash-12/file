from flask import Flask
app =Flask(__name__)

@app.route("/")
def hello():
    return "welcome to come our site"


@app.route("/user/<username>")
def display(username):
    return f'welcome  {username}'


app.run(debug = True)   