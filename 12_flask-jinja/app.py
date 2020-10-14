# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020 

from flask import Flask, render_template #Q0: What happens if you remove render_template from this line?
# It will return this error: “NameError: name 'render_template' is not defined” in the browser and the Flask command line/terminal
app = Flask(__name__) 

@app.route("/") 
def hello_world():
    return "No hablo queso!"

coll = [0,1,1,2,3,5,8]

@app.route("/my_foist_template") #Q1: Can all of your teammates confidently predict the URL to use to load this page?
# Yes, localhost:5000/my_foist_template, or 127.0.0.1:5000/my_foist_template, since the app route is ("/my_foist_template")

def test_tmplt():
    return render_template( 'model_tmplt.html', foo="fooooo", collection=coll) #Q2: What is the significance of each argument?
    # Each of the arguments are passed into the rendering of the model_tmplt.html file. The first parameter is the name of the file, foo gets the string “fooooo” as the title of the webpage, and collection gets the list declared in line 12.


if __name__ == "__main__":
    app.debug = True
    app.run()
