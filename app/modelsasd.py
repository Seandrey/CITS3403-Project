from app import db, login_manager
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

#bcrypt generate_password_hash(), check_generate_password_hash()
 @login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

class User(db.model,UserMixin):
    __tablename__'users'

    id = db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(64,unique=True,nullable=False))
    email=db.Column(db.String(128), unique=True, nullable=False))
    password_hash=db.Column(db.String(128))

    def __init__(self, user_id,username, password, email):
        self.username = username
        self.password = generate_password_hash(password)
<<<<<<< HEAD:app/modelsasd.py
=======
        self.name = name

>>>>>>> eb7d238d7988a56c5cba1cc73ba357c8dd20a792:app/models.py
        self.email = email
    
    def __repr__(self):
        return f'<User {self.username}>'
    
    def autheticate_password(self, pwd):
        return check_password_hash(self.password,pwd)
    
   

class Player_history(db.model):
    
    __table_name= 'player_history'
    id = db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(64,unique=True,nullable=False))
    email=db.Column(db.String(128), unique=True, nullable=False))
    password_hash=db.Column(db.String(128))


    def __init__(self, ):
        super(PlayerHisto_hy,db.model.
    _
    __table_name= 'player_history'_init__(*args))
        

        
        