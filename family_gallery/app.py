from flask import Flask, render_template, redirect, request, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import os

app = Flask(__name__)

app.config['SECRET_KEY'] = "secret123"
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
app.config['UPLOAD_FOLDER'] = "static/uploads"

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


# -------------------
# DATABASE MODELS
# -------------------

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))


class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(200))
    user = db.Column(db.String(100))


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# -------------------
# ROUTES
# -------------------

@app.route("/")
@login_required
def home():
    photos = Photo.query.all()
    return render_template("home.html", photos=photos)


@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "POST":

        username = request.form.get("username")
        password = request.form.get("password")

        user = User.query.filter_by(username=username, password=password).first()

        if user:
            login_user(user)
            return redirect("/")
    
    return render_template("login.html")


@app.route("/register", methods=["GET","POST"])
def register():

    if request.method == "POST":

        username = request.form.get("username")
        password = request.form.get("password")

        new_user = User(username=username, password=password)

        db.session.add(new_user)
        db.session.commit()

        return redirect("/login")

    return render_template("register.html")


@app.route("/upload", methods=["GET","POST"])
@login_required
def upload():

    if request.method == "POST":

        file = request.files["image"]

        if file:

            path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
            file.save(path)

            photo = Photo(filename=file.filename, user=current_user.username)

            db.session.add(photo)
            db.session.commit()

            return redirect("/")

    return render_template("upload.html")


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect("/login")


# -------------------

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)