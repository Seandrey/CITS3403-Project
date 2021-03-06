"""changed foreign keys

Revision ID: da231efd63e8
Revises: 
Create Date: 2022-06-01 20:29:52.301953

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'da231efd63e8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('answer', sa.String(), nullable=False),
    sa.Column('date', sa.String(), nullable=False),
    sa.Column('pf', sa.String(), server_default='1/1/1/1/1', nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=64), nullable=False),
    sa.Column('email', sa.String(length=128), nullable=False),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('player_history',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('answer_history', sa.String(), nullable=False),
    sa.Column('answer_count', sa.Integer(), nullable=False),
    sa.Column('date_submitted', sa.String(), nullable=False),
    sa.Column('win', sa.Boolean(), nullable=False),
    sa.Column('history_id', sa.Integer(), nullable=True),
    sa.Column('img_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['history_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['img_id'], ['images.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('player_history')
    op.drop_table('users')
    op.drop_table('images')
    # ### end Alembic commands ###
