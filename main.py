from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def form():
    return render_template('registration.html')


@app.route('/profile')
def profile():
    return render_template('profile.html')


@app.route('/save', methods=['POST','GET'])
def save():
    if request.method == 'POST':
        user_name = request.form.get('user_name')
        print(user_name)
        return 'SAVE'


if __name__ == "__main__":
    app.run(debug=True)