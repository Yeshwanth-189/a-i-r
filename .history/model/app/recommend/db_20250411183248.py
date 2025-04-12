from pymongo import MongoClient

import pandas as pd

client = MongoClient("mongodb+srv://yeshn0207:Yeshwanthair@a-i-r.q0cd0xn.mongodb.net/?retryWrites=true&w=majority&appName=a-i-r")

db = client["amazon_db"]

# Collections
products_col = db["products"]
users_col = db["users"]

df = pd.read_csv("data/amazon.csv")

# Insert products
product_docs = df.drop_duplicates('product_id')[[
    'product_id', 'product_name', 'category', 'discounted_price',
    'actual_price', 'discount_percentage', 'rating',
    'rating_count', 'about_product'
]].to_dict(orient='records')

products_col.insert_many(product_docs)

# Insert users (just their IDs for now)
user_docs = df['user_id'].unique()
users_col.insert_many([{ "_id": uid } for uid in user_docs])