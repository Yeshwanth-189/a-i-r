from pymongo import MongoClient

import pandas as pd

client = MongoClient("mongodb+srv://yeshn0207:Yeshwanthair@a-i-r.q0cd0xn.mongodb.net/?retryWrites=true&w=majority&appName=a-i-r")

db = client["amazon_db"]

# Collections
products_col = db["products"]
users_col = db["users"]
import pandas as pd

def seed_database_from_csv(csv_path="data/amazon.csv"):
    df = pd.read_csv(csv_path)

    # Insert products
    product_docs = df.drop_duplicates('product_id')[[
        'product_id', 'product_name', 'category', 'discounted_price',
        'actual_price', 'discount_percentage', 'rating',
        'rating_count', 'about_product'
    ]].to_dict(orient='records')
    

    if db.products.count_documents({}) == 0:
        products_col.insert_many(product_docs)
        print("✅ Products connected 🔌")

    # Insert users
    user_docs = df['user_id'].unique()
    if db.users.count_documents({}) == 0:
        users_col.insert_many([{ "_id": uid } for uid in user_docs])
        print("✅ Users connected 🔌")
